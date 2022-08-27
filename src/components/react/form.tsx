import { Button } from './button'
import type { SyntheticEvent } from 'react'
import { useState, useRef } from 'react'
import { TextSubline } from './text'
import Input from './input'
import { SEND_CONTACT_MESSAGE } from '../../services/SEND_CONTACT_MESSAGE'
import { Card } from './card'

const Form = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('')
  const refForm = useRef<HTMLFormElement>(null)
  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = refForm.current
    if (form) {
      const data = Object.fromEntries(new FormData(form))
      if (!data?.email && !data?.message) {
        return alert('')
      }
      if (!data?.email) {
        return setStatus('Email is required')
      }
      if (!data?.message) {
        return setStatus('Message is required')
      }
      setIsLoading(true)

      SEND_CONTACT_MESSAGE(data).then((resMessage) => {
        form.reset()
        setStatus(resMessage)
      }).catch(setStatus).finally(() => setIsLoading(false))
    }
  }

  const handlerSetStatus = () => setStatus('')

  return (
        <div className='flex flex-col gap-2'>
            <form ref={refForm} onSubmit={onSubmit} className="grid grid-cols-1 w-full shadow-lg p-4 rounded-md max-w-2xl">
                <Input label='Your name:' name='name' props={{ placeholder: 'Jhon Rambo', type: 'text' }} />
                <Input label='Your email:' name='email' props={{ placeholder: 'jhon_rambo@email.com', type: 'email', required: true }} />
                <label htmlFor="message">
                    <TextSubline>Your message:</TextSubline>
                </label>
                    <textarea className='dark:bg-custom-dark-2 border-[1px] border-[#b4b2b27d] dark:border-custom-dark rounded-md w-full p-1 focus:outline-hidden my-2 shadow-sm resize-none' name="message" required placeholder='Hi, my name is Jhon Rambo...' />
                <Button props={{ type: 'submit', disabled: isLoading }}>{ isLoading ? 'Sending...' : 'Send'}</Button>
                {
                    status &&
                    <div className='grid place-content-center my-2'>
                        <Card props={{ onClick: handlerSetStatus }}>
                            <p>{status}</p>
                        </Card>
                    </div>
                }
            </form>
        </div>
  )
}

export default Form
