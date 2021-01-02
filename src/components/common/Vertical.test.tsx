import React, { useEffect } from 'react'
import styled from 'styled-components'

// import Swiper from 'swiper'
// import 'swiper/dist/css/swiper.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'

// import Hgroup from '@/components/common/Hgroup'

// import { Attributes } from '@/interfaces/hgroup.interfaces'

const Vertical = styled.section`
  .group_popular {
    margin-top: 12px;
  }

  .list_popular {
    padding-right: 12px;
  }

  .list_popular .item {
    padding-left: 12px;
    box-sizing: border-box;
  }

  .link_popular {
    display: block;
  }

  .frame_popular {
    display: block;
    padding-top: 100%;
    border-radius: 12px;
    font-size: 1px;
    color: transparent;
    background-color: #f1f1f1;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .information_popular {
    padding: 6px;
  }

  .information_popular .title_popular {
    display: block;
    font-size: 14px;
    word-break: break-all;
  }

  .information_popular .description_popular {
    margin-top: 6px;
  }

  .information_popular .description_popular > li {
    font-size: 12px;
  }
`

// function Result({ attributes }: Attributes) {
function Result() {
  // const assignment = Object.assign({}, defaultProps.attributes, attributes)

  // const { title } = assignment

  useEffect(() => {
    console.log('useEffect(() => {}, [])')

    // const swiper = new Swiper('.swiper-container')
    // console.log('useEffect(() => {}, []) → swiper: ', swiper)
  }, [])

  return (
    <>
      <Vertical>
        <div className="group_popular">
          <Swiper
            slidesPerView={2}
            freeMode={true}
            onSlideChange={() => console.log('onSlideChange: slide change!')}
            onSwiper={(swiper) => console.log('onSwiper → swiper: ', swiper)}
            wrapperTag="ul"
            className="list_popular">
            <SwiperSlide tag="li" className="item">
              <a href="/" className="link_popular">
                <span className="frame_popular">
                  <span className="thumbnail_popular"></span>
                </span>

                <div className="information_popular">
                  <strong className="title_popular">Ultimate Rifle/AntiMaterial</strong>
                  <ul className="description_popular">
                    <li>공격력 1,966</li>
                    <li>치명타 11</li>
                    <li>명중률 25%</li>
                    <li>탄착률 55%</li>
                    <li>속도 240발/1분</li>
                  </ul>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide tag="li" className="item">
              <a href="/" className="link_popular">
                <span className="frame_popular">
                  <span className="thumbnail_popular"></span>
                </span>

                <div className="information_popular">
                  <strong className="title_popular">Ultimate Rifle/AntiMaterial</strong>
                  <ul className="description_popular">
                    <li>공격력 1,966</li>
                    <li>치명타 11</li>
                    <li>명중률 25%</li>
                    <li>탄착률 55%</li>
                    <li>속도 240발/1분</li>
                  </ul>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide tag="li" className="item">
              <a href="/" className="link_popular">
                <span className="frame_popular">
                  <span className="thumbnail_popular"></span>
                </span>

                <div className="information_popular">
                  <strong className="title_popular">Ultimate Rifle/AntiMaterial</strong>
                  <ul className="description_popular">
                    <li>공격력 1,966</li>
                    <li>치명타 11</li>
                    <li>명중률 25%</li>
                    <li>탄착률 55%</li>
                    <li>속도 240발/1분</li>
                  </ul>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </Vertical>
    </>
  )
}

/* const defaultProps = {
  attributes: {
    title: 'title을 입력해 주세요.'
  }
} */

export default Result
