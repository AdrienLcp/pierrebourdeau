'use client'

import React from 'react'

import { Footer } from '@/app/components/footer'
import { Header, HEADER_REST_HEIGHT_IN_PX } from '@/app/components/header'
import { useI18n } from '@/i18n/client'

import './container.styles.sass'

const globalStyleVariables: Record<string, string | number> = {
  '--header-rest-height': `${HEADER_REST_HEIGHT_IN_PX}px`
}

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { currentLocale } = useI18n()

  return (
    <html
      dir='ltr'
      lang={currentLocale}
      style={globalStyleVariables}
    >
      <body>
        <Header />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
