import React from 'react'

import qs from 'qs'

import Header from '@/containers/header/Header'
import Hgroup from '@/components/common/Hgroup'
import Category from '@/components/category/Category'
import Read from '@/containers/weapon/read/Read'
// import Information from '@/components/common/Information'
import Tax from '@/components/common/Tax'
import Smelt from '@/components/common/Smelt'
import Enchant from '@/components/common/Enchant'
import Footer from '@/components/footer/Footer'

// import navigation from '@/utility/navigation'

// const func = (service: any, child: any, navigation: any) => {
//   let result = []

//   loop: for (let i in navigation) {
//     for (let j in navigation[i].children) {
//       if (navigation[i].children[j].category === child) {
//         result = navigation[i].children

//         break loop
//       }
//     }
//   }

//   return result
// }

function Result({ location, match }: any) {
  const service = match.params.service

  // const child = match.params.child

  // const result = func(service, child, navigation)

  const prefixed = qs.parse(location.search, {
    ignoreQueryPrefix: true
  })

  const grade = !!prefixed.grade ? prefixed.grade : 1

  return (
    <>
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
                  value: grade
                }
              ]
            }}
            style={{ padding: '12px' }}
          />

          <Hgroup attributes={{ level: 3, title: '근거리 무기', invisible: false }} style={{ padding: '12px 12px 0' }} />
          <Read location={location} attributes={{ service: service }} style={{ padding: '12px 12px 0' }} />

          <Hgroup attributes={{ level: 3, title: '업그레이드 비용', invisible: false }} style={{ padding: '24px 12px 0' }} />
          <Tax location={location} style={{ padding: '12px 12px 0' }} />

          <Hgroup attributes={{ level: 3, title: '업그레이드 단계', invisible: false }} style={{ padding: '24px 12px 0' }} />
          <Smelt style={{ padding: '12px 12px 0' }} />

          <Hgroup attributes={{ level: 3, title: '강화 단계', invisible: false }} style={{ padding: '24px 12px 0' }} />
          <Enchant style={{ padding: '12px 12px 0' }} />
        </section>

        <Footer />
      </div>
    </>
  )
}

export default React.memo(Result)
