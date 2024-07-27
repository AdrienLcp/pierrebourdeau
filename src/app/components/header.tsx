import React from 'react'

import './header.styles.sass'
import { LogoIcon } from '@/icons/logo'

export const Header: React.FC = () => {
  return (
    <div className='header'>
      <LogoIcon />
    </div>
  )
}
