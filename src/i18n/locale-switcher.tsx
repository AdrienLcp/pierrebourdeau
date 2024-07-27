'use client'

import React from 'react'

import { Pressable } from '@/components/pressable'
import { classNames } from '@/helpers/styles'
import { LOCALES } from '@/i18n'
import { useI18n } from '@/i18n/client'

import './locale-switcher.styles.sass'

export const LocaleSwitcher: React.FC = () => {
  const { changeLocale, currentLocale } = useI18n()

  return (
    <div className='locale-switcher'>
      {LOCALES.map(locale => (
        <Pressable
          className={classNames('locale-switcher__button', currentLocale === locale && 'active')}
          key={locale}
          onPress={() => changeLocale(locale)}
        >
          {locale.toUpperCase()}
        </Pressable>
      ))}
    </div>
  )
}
