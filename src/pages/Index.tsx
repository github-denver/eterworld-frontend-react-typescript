import React from 'react'

import Header from '@/containers/header/Header'
import Hgroup from '@/components/common/Hgroup'
import Category from '@/components/category/Category'
import Swiper from '@/components/slide/Swiper'
// import Horizontal from '@/components/common/Horizontal'
import Rows from '@/containers/weapon/list/List'
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
          style={{ padding: '12px' }}
        />

        <Hgroup attributes={{ level: 3, title: '인기 있는 무기', invisible: false }} style={{ padding: '12px 12px 0' }} />
        <Swiper attributes={{ padding: true }} />

        <Hgroup attributes={{ level: 3, title: '근거리 무기', invisible: false }} style={{ padding: '12px 12px 0' }} />
        <Rows location={location} attributes={{ service: 'weapon', category: 'melee', grade: 12 }} style={{ padding: '12px 12px 0' }} />
        {/* <Horizontal attributes={{ padding: true }} /> */}

        <Hgroup attributes={{ level: 3, title: '원거리 무기', invisible: false }} style={{ padding: '12px 12px 0' }} />
        <Rows location={location} attributes={{ service: 'weapon', category: 'ranged', grade: 12 }} style={{ padding: '12px 12px 0' }} />
      </section>

      {/* <Quick /> */}

      <Footer />
    </div>
  )
}

export default React.memo(Index)
