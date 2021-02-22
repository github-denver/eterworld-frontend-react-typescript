import React from 'react'

import qs from 'qs'

import Header from '@/containers/header/Header'
import Hgroup from '@/components/common/Hgroup'
import Category from '@/components/category/Category'
import Choice from '@/containers/common/Choice'
import List from '@/containers/list/weapon/common/List'
// import Quick from '@/components/common/Quick'
import Footer from '@/components/footer/Footer'

import navigation from '@/utility/navigation'

const func = (child: any, navigation: any) => {
  let result = []

  loop: for (let i in navigation) {
    for (let j in navigation[i].children) {
      if (navigation[i].children[j].category === child) {
        result = navigation[i].children[j].text

        break loop
      }
    }
  }

  return result
}

function Result({ location }: any) {
  const pathname = location.pathname.split('/').filter((element: string) => {
    return element !== null && element !== undefined && element !== ''
  })

  const prefixed = qs.parse(location.search, {
    ignoreQueryPrefix: true
  })

  const service = pathname[1]

  const category = pathname[2]

  const heading = func(category, navigation)

  const grade = !!prefixed.grade ? Number(prefixed.grade) : 1

  let number = pathname.splice(-1)[0]

  if (number === 'list' || number === 'read' || category === 'read') {
    number = 1
  }

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
                value: grade
              }
            ]
          }}
          styles={{ padding: '12px' }}
        />

        <Hgroup attributes={{ level: 3, title: heading, invisible: false }} styles={{ padding: '12px 12px 0' }} />
        <Choice
          location={location}
          attributes={{
            label: 'grade',
            grade: grade,
            suffix: '등급',
            start: 1,
            end: 12,
            size: 4,
            checked: true
          }}
          styles={{ padding: '12px 12px 0' }}
        />

        <List location={location} attributes={{ service, category, number, grade }} styles={{ padding: '12px 12px 0' }} />
      </section>

      {/* <Quick /> */}

      <Footer />
    </div>
  )
}

export default React.memo(Result)
