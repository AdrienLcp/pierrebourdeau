'use client'

import React from 'react'

import { Carousel } from '@/components/carousel'
import { LinkButton } from '@/components/link-button'
import { useI18n } from '@/i18n/client'
import { ROUTES } from '@/routes'

import './projects-carousel.styles.sass'

export const ProjectsCarousel: React.FC = () => {
  const { i18n } = useI18n()

  return (
    <div className='projects-carousel'>
      <div className='projects-carousel__background'>

      </div>

      <div className='projects-carousel__content'>
        <Carousel>
          <span>test 1</span>
          <span>test 2</span>
          <span>test 3</span>
          <span>test 4</span>
          <span>test 5</span>
          <span>test 6</span>
        </Carousel>

        <LinkButton
          className='projects-carousel__link'
          href={ROUTES.work}
          variant='filled'
        >
          {i18n('experiences.projects.all-projects')}
        </LinkButton>
      </div>
    </div>
  )
}
