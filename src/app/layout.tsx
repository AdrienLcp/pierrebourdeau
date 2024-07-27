import React from 'react'

import { Html } from '@/app/components/html'
import { Providers } from '@/app/components/providers'
import type { LayoutProps } from '@/lib/next'

import '@/styles/base.sass'

const RootLayout: React.FC<LayoutProps> = ({ children }) => (
  <Providers>
    <Html>
      {children}
    </Html>
  </Providers>
)

export default RootLayout
