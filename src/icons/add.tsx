import React from 'react'

import { DEFAULT_SVG_PROPS, type BaseIconProps } from '@/icons'

export const AddIcon: React.FC<BaseIconProps> = ({ color = '#171716', ...props }) => (
  <svg {...DEFAULT_SVG_PROPS} {...props}>
    <g>
      <path
        d='M15 6.5625V23.4375'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
      <path
        d='M23.4375 15H6.5625'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
    </g>
  </svg>
)
