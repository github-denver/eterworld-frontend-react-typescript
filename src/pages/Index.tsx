import React from 'react'

import Header from '@/containers/header/Header'
import Hgroup from '@/components/common/Hgroup'
import Category from '@/components/category/Category'
import Swiper from '@/components/slide/Swiper'
// import Horizontal from '@/components/common/Horizontal'
// import Quick from '@/components/common/Quick'
import Footer from '@/components/footer/Footer'

function Index({ history, location, match }: any) {
  return (
    <div className="wrapper">
      <Header />

      <section className="container">
        <Hgroup attributes={{ title: '본문' }} />

        {/* <Category attributes={{ padding: true }} /> */}

        <Hgroup attributes={{ level: 3, title: '인기 있는 무기', invisible: false, padding: true }} />
        <Swiper attributes={{ padding: true }} />

        <Hgroup attributes={{ level: 3, title: '근거리 무기', invisible: false, padding: true }} />
        {/* <Horizontal attributes={{ padding: true }} /> */}

        <Hgroup attributes={{ level: 3, title: '원거리 무기', invisible: false, padding: true }} />
        {/* <Horizontal attributes={{ padding: true }} /> */}
      </section>

      {/* <Quick /> */}

      <Footer />
    </div>
  )
}

export default React.memo(Index)
