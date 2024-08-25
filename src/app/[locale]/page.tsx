import React from 'react'

import { HomeHero } from '@/app/[locale]/home-hero'
import { ProjectsCarousel } from '@/experiences/projects-carousel'
import { ClientsCarousel } from '@/experiences/clients-carousel'

const HomePage: React.FC = () => (
  <>
    <HomeHero />

    <ClientsCarousel />

    <ProjectsCarousel />
  </>
)

export default HomePage
