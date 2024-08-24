import type { Metadata } from 'next'
import React from 'react'

import { Container } from '@/app/components/container'
import { Providers } from '@/app/components/providers'
import { getBaseMetadata } from '@/metadata'
import type { LayoutProps } from '@/lib/next'

import '@/styles/base.sass'

const baseMetadata = getBaseMetadata()

export const metadata: Metadata = {
  ...baseMetadata
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Providers>
      <Container>
        {children}
      </Container>
    </Providers>
  )
}

export default RootLayout
