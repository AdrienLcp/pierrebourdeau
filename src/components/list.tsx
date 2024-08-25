'use client'

import React from 'react'
import { type Key, ListBox, ListBoxItem, type ListBoxItemProps, type ListBoxProps } from 'react-aria-components'

import { getHrefWithLocale, useI18n } from '@/i18n/client'
import { getReactAriaClassName } from '@/lib/react-aria'
import { isInternalRoute } from '@/routes'

import './list.styles.sass'

type BaseListItem = ListBoxItemProps & {
  key: ListBoxItemProps['id']
  label: string
}

type ListProps <T extends BaseListItem> = ListBoxProps<T> & {
  onItemAction?: (item: T) => void
}

export function List<T extends BaseListItem>({
  children,
  items,
  onAction,
  onItemAction,
  ...props
}: ListProps<T>) {
  const itemsArray = Array.from(items || [])

  const handleListAction = (key: Key) => {
    if (typeof onAction === 'function') {
      onAction(key)
    }

    if (typeof onItemAction !== 'function') {
      return
    }

    const item = itemsArray.find((item) => item.key === key)

    if (item !== undefined) {
      onItemAction(item)
    }
  }

  return (
    <ListBox {...props} items={items} onAction={handleListAction}>
      {typeof children !== 'function'
        ? children
        : (item) => (
          <ListItem
            {...item}
            className={(values) => getReactAriaClassName(values, item.className)}
            id={item.key}
            key={item.key}
            textValue={item.label}
          >
            {children(item)}
          </ListItem>
        )
      }
    </ListBox>
  )
}

export const ListItem: React.FC<ListBoxItemProps> = ({ children, className, href, ...props }) => {
  const { currentLocale } = useI18n()

  const validHref = isInternalRoute(href)
    ? getHrefWithLocale(href, currentLocale)
    : href

  return (
    <ListBoxItem
      {...props}
      className={(values) => getReactAriaClassName(values, className, 'list-item')}
      href={validHref}
    >
      {children}
    </ListBoxItem>
  )
}
