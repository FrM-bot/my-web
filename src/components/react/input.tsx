import type { InputHTMLAttributes, FC } from 'react'
import { TextSubline } from './text'

interface IInput {
    label: string
    name: string
    props: InputHTMLAttributes<HTMLInputElement>
}

const Input: FC<IInput> = ({ label, name, props }) => {
  return (
    <label htmlFor={name}> <TextSubline>{ label }</TextSubline>
        <input name={name} className='dark:bg-custom-dark-2 border-[1px] border-[#b4b2b27d] dark:border-custom-dark rounded-md w-full p-2 focus:outline-hidden my-2 shadow-sm' {...props} />
    </label>
  )
}

export default Input
