import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

import Vertical from '@/components/common/Vertical'

import { Attributes } from '@/interfaces/padding.interfaces'

import 'swiper/swiper-bundle.min.css'

interface State {
  swiper: any
}

interface Props {
  padding: boolean
}

const Styled: State = {
  swiper: styled.div`
    ${(props: Props) => {
      return (
        props.padding &&
        css`
          .group_swiper {
            padding: 12px;
          }
        `
      )
    }}
  `
}

function Result({ attributes }: Attributes) {
  const assignment = useMemo(() => {
    return Object.assign({}, defaultProps.attributes, attributes)
  }, [attributes])

  const { padding } = useMemo(() => {
    return assignment
  }, [assignment])

  return (
    <Styled.swiper padding={padding}>
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

const defaultProps = {
  attributes: {
    padding: false
  }
}

export default Result
