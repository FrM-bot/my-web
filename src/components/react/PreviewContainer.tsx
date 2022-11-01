import type { ReactElement } from 'react'

const PreviewContainer = ({ children }: { children: ReactElement }) => {
  return (
    <div className='mt-4 w-full flex justify-center rounded-md border-[1px] border-[#b4b2b27d] dark:border-custom-cyan p-4 shadow-xl'>
    {children}
  </div>
  )
}

export default PreviewContainer
