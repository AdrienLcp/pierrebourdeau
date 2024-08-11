import { AnimatedLink } from '@/components/animated-link'
import { Button } from '@/components/button'
import React from 'react'

const HomePage: React.FC = () => (
  <div style={{ paddingBlock: 200, display: 'flex', flexDirection: 'column', gap: 50 }}>
    <div>Home page</div>

    <AnimatedLink href='/' label='Ceci est un lien avec un label un peu long' />

    <Button style={{ width: 'fit-content' }}>Button</Button>
  </div>
)

export default HomePage
