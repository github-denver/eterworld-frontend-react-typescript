import React from 'react'

import qs from 'qs'

import Header from '@/containers/header/Header'
import Hgroup from '@/components/common/Hgroup'
import Category from '@/components/category/Category'
import Choice from '@/containers/common/Choice'
import Rows from '@/containers/weapon/list/List'
import Pagination from '@/components/common/Pagination'
// import Quick from '@/components/common/Quick'
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

function List({ location, match }: any) {
  const service = match.params.service

  // const child = match.params.child

  // const result = func(service, child, navigation)

  const prefixed = qs.parse(location.search, {
    ignoreQueryPrefix: true
  })

  const grade = !!prefixed.grade ? prefixed.grade : 1
  console.log('pages → List.tsx → grade: ', grade)

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
                value: grade
              }
            ]
          }}
          style={{ padding: '12px' }}
        />

        <Hgroup attributes={{ level: 3, title: '근거리 무기', invisible: false, padding: true }} style={{ padding: '12px 12px 0' }} />
        <Choice location={location} attributes={{ label: 'grade', grade: grade, suffix: '등급' }} style={{ padding: '12px' }} />

        <Rows location={location} attributes={{ service: service }} style={{ padding: '0 12px' }} />

        <Pagination />
      </section>

      {/* <Quick /> */}

      <Footer />
    </div>
  )
}

export default React.memo(List)
