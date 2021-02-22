import React from 'react'

import Header from '@/containers/header/Header'
import Hgroup from '@/components/common/Hgroup'
import Category from '@/components/category/Category'
import Swiper from '@/components/slide/Swiper'
// import Horizontal from '@/components/common/Horizontal'
import Melee from '@/containers/list/weapon/melee/List'
import Ranged from '@/containers/list/weapon/ranged/List'
// import Quick from '@/components/common/Quick'
import Footer from '@/components/footer/Footer'

function Index({ history, location, match }: any) {
  return (
    <div className="wrapper">
      <Header />

      <section className="container">
        <Hgroup attributes={{ title: '본문' }} />

        <Category
          location={location}
          attributes={{
            data: [
              {
                text: '홈',
                service: 'weapon',
                custom: '/'
              },
              {
                text: '근거리 무기',
                service: 'weapon',
                category: 'melee'
              },
              {
                text: '원거리 무기',
                service: 'weapon',
                category: 'ranged'
              }
            ],
            query: [
              {
                key: 'grade',
                value: 1
              }
            ]
          }}
          styles={{ padding: '12px' }}
        />

        <Hgroup attributes={{ level: 3, title: '인기 있는 무기', invisible: false }} styles={{ padding: '12px 12px 0' }} />
        <Swiper styles={{ padding: '12px' }} />

        <Hgroup attributes={{ level: 3, title: '근거리 무기', invisible: false }} styles={{ padding: '12px 12px 0' }} />
        <Melee location={location} attributes={{ service: 'weapon', category: 'melee', grade: 12, paging: false }} styles={{ padding: '12px 12px 0' }} />

        <Hgroup attributes={{ level: 3, title: '원거리 무기', invisible: false }} styles={{ padding: '12px 12px 0' }} />
        <Ranged location={location} attributes={{ service: 'weapon', category: 'ranged', grade: 12, paging: false }} styles={{ padding: '12px 12px 0' }} />
      </section>

      {/* <Quick /> */}

      <Footer />
    </div>
  )
}

export default React.memo(Index)
