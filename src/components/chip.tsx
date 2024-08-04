import React from 'react'

import { classNames } from '@/helpers/styles'

import './chip.styles.sass'

export type ChipColor = 'green' | 'orange' | 'red'

type ChipProps = React.ComponentProps<'span'> & {
  color: ChipColor
}

export const Chip: React.FC<ChipProps> = ({ className, color, ...props }) => (
  <span className={classNames('chip', color, className)} {...props} />
)
