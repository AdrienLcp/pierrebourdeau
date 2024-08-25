'use client'

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import React from 'react'
import { Slider, SliderThumb, SliderTrack } from 'react-aria-components'
import type SwiperCore from 'swiper'
import { Swiper, type SwiperProps, SwiperSlide } from 'swiper/react'

import { Button } from '@/components/button'
import { classNames } from '@/helpers/styles'
import { useI18n } from '@/i18n/client'

import './carousel.styles.sass'

type CarouselProps = Omit<SwiperProps, 'children'> & {
  children: Array<React.ReactNode>
}

export const Carousel: React.FC<CarouselProps> = ({ children, className, ...props }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState<number>(0)

  const { i18n } = useI18n()

  const swiperRef = React.useRef<SwiperCore | null>(null)

  const slideCount = children.length

  const handleSlideChange = (index: number) => {
    setCurrentSlideIndex(index)
    swiperRef.current?.slideTo(index)
  }

  const swipeToPreviousSlide = () => {
    if (currentSlideIndex > 0) {
      handleSlideChange(currentSlideIndex - 1)
    }
  }

  const swipeToNextSlide = () => {
    if (currentSlideIndex < slideCount - 1) {
      handleSlideChange(currentSlideIndex + 1)
    }
  }

  if (slideCount === 0) {
    return null
  }

  return (
    <section
      aria-label={i18n('experiences.projects.carousel.aria-label')}
      className='carousel'
    >
      <Swiper
        {...props}
        className={classNames('carousel__swiper', className)}
        onSlideChange={({ realIndex }) => setCurrentSlideIndex(realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
      >
        {children.map((child, index) => (
          <SwiperSlide className='carousel__swiper__item' key={index}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='carousel__controls'>
        <Button
          aria-label={i18n('experiences.projects.carousel.previous-slide-button-aria-label')}
          Icon={<ChevronLeftIcon />}
          isDisabled={currentSlideIndex === 0}
          onPress={swipeToPreviousSlide}
          size='icon'
          variant='transparent'
        />

        <span>{currentSlideIndex + 1} / {slideCount}</span>

        <Button
          aria-label={i18n('experiences.projects.carousel.next-slide-button-aria-label')}
          Icon={<ChevronRightIcon />}
          isDisabled={currentSlideIndex === slideCount - 1}
          onPress={swipeToNextSlide}
          size='icon'
          variant='transparent'
        />
      </div>

      <Slider
        aria-label={i18n('experiences.projects.carousel.slider-aria-label')}
        className='carousel__slider'
        onChange={(value) => handleSlideChange(value)}
        maxValue={slideCount - 1}
        minValue={0}
        value={currentSlideIndex}
      >
        <SliderTrack>
          <SliderThumb />
        </SliderTrack>
      </Slider>
    </section>
  )
}
