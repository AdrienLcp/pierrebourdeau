'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { RouterProvider } from 'react-aria-components'

import { I18nProvider } from '@/i18n/client'

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  const router = useRouter()

  return (
    <RouterProvider navigate={router.push}>
      <I18nProvider>
        {children}
      </I18nProvider>
    </RouterProvider>
  )
}
