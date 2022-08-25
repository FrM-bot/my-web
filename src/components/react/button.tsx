import type { FC, ReactElement } from 'react'

interface Props {
    children: ReactElement | string
    onClick: () => void
}

export const Button: FC<Props> = ({ children, onClick }) => (
    <button
    className="dark:text-gray-400 dark:hover:bg-custom-dark-2 dark:hover:bg-gray-700 outline-none rounded-lg text-sm p-2.5 inline-flex items-center duration-300 hover:shadow-xl hover:bg-[rgba(255,255,255,0.4)]"
    onClick={onClick}>
        {children}
    </button>
)

interface PropsLink {
    children: ReactElement | string
    href: string
    className?: string
    target?: string
}

export const Link: FC<PropsLink> = ({ children, href, ...props }) => (
    <a href={href} className="after:absolute after:bg-gradient-to-l after:from-[#da62c4] after:to-custom-cyan after:w-full after:h-px after:bottom-0 after:left-0 after:scale-x-0 after:duration-300 grid place-content-center relative py-1 px-2 w-fit hover:after:scale-x-100" {...props}>{ children }</a>
)

export const ButtonLink: FC<PropsLink> = ({ children, className, href, ...props }) => {
  const defaultStylesCard = 'dark:bg-custom-dark-2 shadow-lg flex justify-center items-center rounded-sm after:absolute after:bg-gradient-to-l after:from-[#da62c4] after:to-custom-cyan after:w-full after:h-px after:bottom-0 after:left-0 after:scale-x-0 after:duration-300 relative py-1 px-2 w-fit hover:after:scale-x-100 hover:cursor-pointer'

  return (
       <a href={href} className={className ? `${defaultStylesCard} ${className}` : defaultStylesCard} {...props}>{ children }</a>
  )
}
