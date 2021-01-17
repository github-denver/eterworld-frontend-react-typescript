import React from 'react'

import qs from 'qs'

import Header from '@/containers/header/Header'
import Hgroup from '@/components/common/Hgroup'
import Category from '@/components/category/Category'
import Read from '@/containers/weapon/read/Read'
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

  if (number === 'list' || number === 'read') {
    number = 1
  }

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

          <Hgroup attributes={{ level: 3, title: heading, invisible: false }} style={{ padding: '12px 12px 0' }} />
          <Read location={location} attributes={{ service, category, grade, number }} style={{ padding: '12px 12px 0' }} />
        </section>

        <Footer />
      </div>
    </>
  )
}

export default React.memo(Result)
