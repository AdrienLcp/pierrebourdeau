import type { ButtonRenderProps } from 'react-aria-components'

type ClassNames = Array<string | undefined | null | false>

type ElementRenderProps
  = ButtonRenderProps

type RenderPropsValues <T extends ElementRenderProps> = T & {
  defaultClassName: string | undefined
}

export const classNames = (...classes: Array<string | undefined | null | false>): string => {
  return classes.filter(Boolean).join(' ')
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
