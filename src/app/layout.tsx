import React from 'react'

import { Container } from '@/app/components/container'
import { I18nProvider } from '@/i18n/client'
import type { LayoutProps } from '@/lib/next'

import '@/styles/base.sass'

const RootLayout: React.FC<LayoutProps> = ({ children }) => (
  <I18nProvider>
    <Container>
      {children}
    </Container>
  </I18nProvider>
)

export default RootLayout
