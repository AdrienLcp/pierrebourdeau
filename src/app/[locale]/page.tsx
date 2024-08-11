import { AnimatedLink } from '@/app/components/animated-link'
import React from 'react'

const HomePage: React.FC = () => (
  <div style={{ paddingBlock: 200, display: 'flex', flexDirection: 'column', gap: 50 }}>
    <div>Home page</div>

    <AnimatedLink href='/' label='Ceci est un lien' />
  </div>
)

export default HomePage
