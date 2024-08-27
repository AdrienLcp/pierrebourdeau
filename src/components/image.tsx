'use client'

import NextImage, { type ImageProps as NextImageProps } from 'next/image'
import React from 'react'

import { classNames } from '@/helpers/styles'
import { ImageFallbackIcon } from '@/icons/image-fallback'

import './image.styles.sass'

type ImageHeight = NextImageProps['height']
export type ImageSrc = NextImageProps['src'] | null | undefined
type ImageWidth = NextImageProps['width']

// Override the default `src` prop to allow for `null` values
type ImageProps = Omit<NextImageProps, 'src'> & {
  src: ImageSrc
}

export type ImageObj = {
  alt: NextImageProps['alt']
  height: ImageHeight
  src: ImageSrc
  width: ImageWidth
}

type ImageFallbackProps = {
  height: ImageHeight
  width: ImageWidth
}

const ImageFallback: React.FC<ImageFallbackProps> = ({ height, width }) => (
  <span className='image__fallback'>
    <ImageFallbackIcon height={height} width={width} />
  </span>
)

export const Image: React.FC<ImageProps> = ({
  className,
  height,
  onError,
  src,
  width,
  ...props
}) => {
  const [hasImageError, setHasImageError] = React.useState<boolean>(false)

  if (hasImageError || src == null || (typeof src === 'string' && src.trim() === '')) {
    return <ImageFallback height={height} width={width} />
  }

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasImageError(true)

    if (typeof onError === 'function') {
      onError(event)
    }
  }

  return (
    <NextImage
      className={classNames('image', className)}
      fetchPriority='low'
      height={height}
      loading='lazy'
      onError={handleImageError}
      src={src}
      width={width}
      {...props}
    />
  )
}
