import React from 'react'
// import styled from 'styled-components'

import { Swiper, SwiperSlide } from 'swiper/react'
import Vertical from '@/components/common/Vertical'

import 'swiper/swiper-bundle.min.css'

// const Test = styled.div``

function Result() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        freeMode={true}
        onSlideChange={() => console.log('onSlideChange: slide change!')}
        onSwiper={(swiper) => console.log('onSwiper → swiper: ', swiper)}
        wrapperTag="ul"
        className="list_vertical">
        <SwiperSlide tag="li" className="item">
          <Vertical />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Result
