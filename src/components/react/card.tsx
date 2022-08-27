import type { HTMLAttributes, FC, ReactElement } from 'react'
interface ICardProps {
    children: ReactElement
    className?: string
    props?: HTMLAttributes<HTMLDivElement>
}

const defaultStylesCard = 'w-fit h-fit rounded-lg dark:bg-custom-dark-2 p-2 shadow-xl'

export const Card: FC<ICardProps> = ({ children, className, props }) => {
  return (
    <div className={className ? `${defaultStylesCard} ${className}` : defaultStylesCard} {...props}>{ children }</div>
  )
}
