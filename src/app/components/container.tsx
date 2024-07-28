'use client'

import React from 'react'

import { Footer } from '@/app/components/footer'
import { Header } from '@/app/components/header'
import { useI18n } from '@/i18n/client'

import './container.styles.sass'

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { currentLocale } = useI18n()

  return (
    <html dir='ltr' lang={currentLocale}>
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
