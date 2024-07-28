import React from 'react'

import { Mailto } from '@/contact/mailto'
import { LocaleSwitcher } from '@/i18n/locale-switcher'
import { Navigation } from '@/routes/navigation'

import './header-content.styles.sass'

export const HeaderContent: React.FC = () => (
  <>
    <Navigation />

    <div className='header-content__footer'>
      <LocaleSwitcher />
      <Mailto />
    </div>
  </>
)
