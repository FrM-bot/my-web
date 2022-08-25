import type { FC, ReactElement } from 'react'

interface ICardProps {
    children: ReactElement
    className?: string
}

const defaultStylesCard = 'w-fit h-fit rounded-lg dark:bg-custom-dark-2 p-2 shadow-xl'

export const Card: FC<ICardProps> = ({ children, className }) => {
  return (
    <div className={className ? `${defaultStylesCard} ${className}` : defaultStylesCard}>{ children }</div>
  )
}
