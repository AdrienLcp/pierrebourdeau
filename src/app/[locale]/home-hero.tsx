'use client'

import React from 'react'

import { WordsSwitcher } from '@/animations/words-switcher'
import { ClientsCarousel } from '@/experiences/clients-carousel'

import './home-hero.styles.sass'

export const HomeHero: React.FC = () => {
  return (
    <>
      <div className='home-hero__row first'>
        <span className='home-hero__main-display'>
          USER
        </span>

        <span className='home-hero__small-display'>
          I move pixels to make people&apos;s lives easier
        </span>
      </div>

      <div className='home-hero__row second'>
        <WordsSwitcher
          wordClassName='home-hero__main-display'
          words={['EXPERIENCE', 'INTERFACE']}
        />
      </div>

      <div className='home-hero__row'>
        <span className='home-hero__main-display'>DESIGNER</span>
      </div>

      <ClientsCarousel />
    </>
  )
}
