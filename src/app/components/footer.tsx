import React from 'react'

import { LocaleSwitcher } from '@/i18n/locale-switcher'

import './footer.styles.sass'

export const Footer: React.FC = () => (
  <footer className='footer'>
    <LocaleSwitcher />
  </footer>
)
