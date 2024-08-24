'use client'

import React from 'react'
import { useLocale } from 'react-aria-components'

import { Footer } from '@/app/components/footer'
import { Header, HEADER_REST_HEIGHT_IN_PX } from '@/app/components/header'

import './container.styles.sass'

const globalStyleVariables: Record<string, string | number> = {
  '--header-rest-height': `${HEADER_REST_HEIGHT_IN_PX}px`
}

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { direction, locale } = useLocale()

  return (
    <html
      dir={direction}
      lang={locale}
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
