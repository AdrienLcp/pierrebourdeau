'use client'

import React from 'react'

import './animated-link.styles.sass'
// import './animated-link.styles.scss'

type AnimatedLinkProps = {
  href: string
  label: string
}

export const AnimatedLink: React.FC<AnimatedLinkProps> = ({ href, label }) => {
  // const renderSpannedText = (text: string) => {
  //   return text.split('').map((char, index) => (
  //     <span key={index}>
  //       {char === ' ' ? '\u00A0' : char}
  //     </span>
  //   ))
  // }

  // return (
  //   <div className='animated-link'>
  //     <a href={href} className='animated-link__span'>
  //       <div>{renderSpannedText(label.trim())}</div>
  //       <div>
  //         <svg preserveAspectRatio='none' viewBox='0 0 192 5'>
  //           <path d='M191.246 4H129C129 4 127.781 4.00674 127 4C114.767 3.89447 108.233 1 96 1C83.7669 1 77.2327 3.89447 65 4C64.219 4.00674 63 4 63 4H0.751923' />
  //         </svg>
  //       </div>
  //     </a>
  //   </div>
  // )

  const string = label.trim()

  return (
    <a className='animated-link' href={href}>
      <div className='animated-link__box'>
        {string.split('').map((char, index) => {
          const delay = `${string.length * index}ms`
          const style: Record<string, string> = {
            '--delay': delay
          }

          return (
            <span
              className='animated-link__box__character'
              key={index}
              style={style}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          )
        })}
      </div>
    </a>
  )
}
