import type { ButtonRenderProps, LinkRenderProps } from 'react-aria-components'

import { classNames, type ClassNames } from '@/helpers/styles'

type ElementRenderProps
  = ButtonRenderProps
  | LinkRenderProps

type RenderPropsValues <T extends ElementRenderProps> = T & {
  defaultClassName: string | undefined
}

export const getReactAriaClassName = <T extends ElementRenderProps> (
  values: RenderPropsValues<T>,
  className: string | ((values: RenderPropsValues<T>) => string) | undefined,
  ...baseClassName: ClassNames
) => {
  const classNameOverride = typeof className === 'function'
    ? className(values)
    : className

  return classNames(...baseClassName, classNameOverride)
}
