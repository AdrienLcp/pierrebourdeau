import React from 'react'

import { Chip, type ChipColor } from '@/components/chip'
import { classNames } from '@/helpers/styles'
import { useI18n } from '@/i18n/client'

import './availability.styles.sass'

type AvailabilityStatus = 'available' | 'unavailable'

type AvailabilityProps = React.ComponentProps<'div'> & {
  isHidden?: boolean
  status: AvailabilityStatus
}

export const Availability: React.FC<AvailabilityProps> = ({
  className,
  isHidden,
  status = 'available',
  ...props
}) => {
  const { i18n } = useI18n()

  const availabilities: Record<AvailabilityStatus, { color: ChipColor, label: string }> = {
    available: { color: 'green', label: i18n('app.header.availability.available') },
    unavailable: { color: 'red', label: i18n('app.header.availability.unavailable') }
  }

  const availability = availabilities[status] ?? availabilities.unavailable

  return (
    <div className={classNames('availability', isHidden && 'hidden', className)} {...props}>
      <Chip color={availability.color} />
      <span>{availability.label}</span>
    </div>
  )
}
