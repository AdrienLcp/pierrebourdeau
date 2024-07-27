export type BaseIconProps = React.ComponentProps<'svg'>

const DEFAULT_SVG_SIZE = 30

export const DEFAULT_SVG_PROPS = {
  fill: 'none',
  height: `${DEFAULT_SVG_SIZE}`,
  viewBox: `0 0 ${DEFAULT_SVG_SIZE} ${DEFAULT_SVG_SIZE}`,
  width: `${DEFAULT_SVG_SIZE}`,
  xmlns: 'http://www.w3.org/2000/svg'
}
