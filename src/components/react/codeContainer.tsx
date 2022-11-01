import { Button } from './button'
import CopyIcon from 'src/icons/copy'
import CheckIcon from 'src/icons/check'
import { ReactElement, useEffect, useRef, useState } from 'react'

const CodeContainer = ({ children }: { children: ReactElement }) => {
  const refContainer = useRef<HTMLDivElement>(null)
  const [isCopy, setIsCopy] = useState(false)
  const [isVisible, setisVisible] = useState(false)

  useEffect(() => {
    if (isCopy) {
      const intervalId = setInterval(() => {
        setIsCopy(false)
      }, 3000)
      return () => {
        clearInterval(intervalId)
      }
    }
  }, [isCopy])

  const onCopy = () => {
    if (refContainer.current) {
      !isCopy && setIsCopy(true)
      navigator.clipboard.writeText(refContainer.current.children.item(0)?.textContent ?? '')
        .then(() => console.log('success')
        )
    }
  }

  return (
    <div className="relative" onMouseEnter={() => setisVisible(true)} onMouseLeave={() => setisVisible(false)}>
      <div ref={refContainer} className="text-xs" >
        {children}
      </div>

      {
        isVisible &&
        <Button props={{ onClick: () => onCopy() }} className='absolute top-2 right-2 text-xs'>
          {
            isCopy ? <CheckIcon /> : <CopyIcon />
          }
        </Button>
      }
    </div>
  )
}

export default CodeContainer
