import React from 'react'

import { Contact } from '@/contact/contact'
import { Socials } from '@/contact/socials'

import './footer.styles.sass'

export const Footer: React.FC = () => (
  <footer className='footer'>
    <div className='footer__top-right-box'>
      <Contact />
    </div>

    <div className='footer__bottom-left-box'>
      <Socials />
    </div>
  </footer>
)
