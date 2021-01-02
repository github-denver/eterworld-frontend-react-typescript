import React from 'react'

import Header from '@/containers/header/Header'
import Hgroup from '@/components/common/Hgroup'
import Category from '@/components/category/Category'

import Swiper from '@/components/slide/Swiper'
import Horizontal from '@/components/common/Horizontal'

function Index() {
  return (
    <>
      <div className="wrapper">
        <Header />

        <section className="container">
          <Hgroup attributes={{ title: '본문' }} />

          <Category />

          <Hgroup attributes={{ level: 3, title: '인기 있는 무기', invisible: false }} />
          <Swiper />

          <Hgroup attributes={{ level: 3, title: '인기 있는 방어구', invisible: false }} />
          <Swiper />

          <Hgroup attributes={{ level: 3, title: '인기 있는 장신구', invisible: false }} />
          <Swiper />

          <Hgroup attributes={{ level: 3, title: '근거리 무기', invisible: false }} />
          <Horizontal />

          <Hgroup attributes={{ level: 3, title: '원거리 무기', invisible: false }} />
          <Horizontal />

          <Hgroup attributes={{ level: 3, title: '남성용 방어구', invisible: false }} />
          <Horizontal />

          <Hgroup attributes={{ level: 3, title: '남성용 변이체 방어구', invisible: false }} />
          <Horizontal />

          <Hgroup attributes={{ level: 3, title: '여성용 방어구', invisible: false }} />
          <Horizontal />

          <Hgroup attributes={{ level: 3, title: '여성용 변이체 방어구', invisible: false }} />
          <Horizontal />

          <Hgroup attributes={{ level: 3, title: '액세서리', invisible: false }} />
          <Horizontal />
        </section>

        {/* <aside className="group_quick">
          <Hgroup attributes={{ title: '빠른 서비스' }} />

          <div className="inner_quick">
            <button type="button" className="button_global">
              <span className="icon_global icon_hamburger">검색</span>
            </button>

            <button type="button" className="button_global">
              <span className="icon_global icon_hamburger">검색</span>
            </button>

            <button type="button" className="button_global">
              <span className="icon_global icon_hamburger">검색</span>
            </button>
          </div>
        </aside> */}

        <footer className="footer"></footer>
      </div>
    </>
  )
}

export default React.memo(Index)
