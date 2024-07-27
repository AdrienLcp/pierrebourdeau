'use client'

import React from 'react'

import { Button } from '@/components/button'
import { AddIcon } from '@/icons/add'

const HomePage: React.FC = () => (
  <div style={{ marginInline: 'auto', padding: 50 }}>
    <Button variant='filled' Icon={<AddIcon />} iconSide='right'>
      Label
    </Button>
  </div>
)

export default HomePage
