import React from 'react'
// import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

import Vertical from '@/components/common/Vertical'

// import { Attributes } from '@/interfaces/padding.interfaces'

import 'swiper/swiper-bundle.min.css'

interface Attributes {
  [key: string]: any
}

interface State {
  swiper: any
}

interface Props {
  styles: boolean
}

const Styled: State = {
  swiper: styled.div`
    /* ${(props: Props) => {
      return (
        props.styles &&
        css`
          .group_swiper {
            padding: 12px;
          }
        `
      )
    }} */
  `
}

function Result({ attributes, styles }: Attributes) {
  /* const assignment = useMemo(() => {
    return Object.assign({}, defaultProps.attributes, attributes)
  }, [attributes])

  const {} = useMemo(() => {
    return assignment
  }, [assignment]) */

  return (
    <Styled.swiper style={styles}>
      <Swiper
        slidesPerView={2}
        freeMode={true}
        onSlideChange={() => console.log('onSlideChange: slide change!')}
        onSwiper={(swiper) => console.log('onSwiper → swiper: ', swiper)}
        wrapperTag="ul"
        className="group_swiper">
        <SwiperSlide tag="li">
          <Vertical />
        </SwiperSlide>
      </Swiper>
    </Styled.swiper>
  )
}

/* const defaultProps = {
  attributes: {}
} */

export default React.memo(Result)
