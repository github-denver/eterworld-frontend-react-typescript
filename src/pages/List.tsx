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

function List({ location, match }: any) {
  const service = match.params.service

  const prefixed = qs.parse(location.search, {
    ignoreQueryPrefix: true
  })

  const grade = !!prefixed.grade ? Number(prefixed.grade) : 1

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

        <Hgroup attributes={{ level: 3, title: '근거리 무기', invisible: false }} style={{ padding: '12px 12px 0' }} />
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
          style={{ padding: '12px 12px 0' }}
        />

        <Rows location={location} attributes={{ service: service }} style={{ padding: '12px 12px 0' }} />

        <Pagination />
      </section>

      {/* <Quick /> */}

      <Footer />
    </div>
  )
}

export default React.memo(List)
