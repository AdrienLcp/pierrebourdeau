import React from 'react'

import { Marquee } from '@/animations/marquee'
import { GoogleIcon, MicrosoftIcon } from '@/icons'

import './clients-carousel.styles.sass'

const CAROUSEL_ITEM_COLOR = 'var(--neutral-foreground-tertiary-rest, #B7BBB8)'

export const ClientsCarousel: React.FC = () => (
  <Marquee className='clients-carousel'>
    <MicrosoftIcon color={CAROUSEL_ITEM_COLOR} />
    <GoogleIcon color={CAROUSEL_ITEM_COLOR} />
  </Marquee>
)
