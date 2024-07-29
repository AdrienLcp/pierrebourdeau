import React from 'react'

import type { BaseIconProps } from '@/icons'
import { METADATA } from '@/metadata'

import './logo.styles.sass'

export const Logo: React.FC<BaseIconProps> = ({ ...props }) => (
  <svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    width='37'
    height='50'
    viewBox='0 0 37 50'
    fill='none'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.39394e-06 43.6959L0 49.9384H21.5834C30.0978 49.9384 37 42.9513 37 34.3327C37 29.6884 34.9958 25.5179 31.8153 22.6592C34.9533 20.3959 36.9998 16.6822 36.9998 12.4846C36.9998 5.59011 31.479 0.000938506 24.6682 0H17.468L6.16666 1.40764e-06L3.21803 0H9.39394e-06V43.6959ZM24.6666 18.7269H21.5834H18.5H12.3334V24.9692V31.2114H6.16666V6.24229H24.6666C28.0724 6.24234 30.8332 9.03708 30.8332 12.4846C30.8332 15.9321 28.0722 18.7269 24.6666 18.7269ZM6.16664 43.6959H21.5834C26.6919 43.6959 30.8332 39.5039 30.8332 34.3327C30.8332 29.1613 26.6919 24.9692 21.5834 24.9692H18.5V37.4537H12.3334H6.16664V43.6959Z'
      fill='#171716'
    />
  </svg>
)

export const LogoTitle: React.FC = () => (
  <div className='logo'>
    <Logo />

    <span className='logo__title'>
      {METADATA.name}
    </span>
  </div>
)
