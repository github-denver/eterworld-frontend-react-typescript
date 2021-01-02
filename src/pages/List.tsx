import React from 'react'
import { Link } from 'react-router-dom'

import Header from '@/containers/header/Header'
import Hgroup from '@/components/common/Hgroup'
import Category from '@/components/category/Category'
import Choice from '@/components/common/Choice'
import Horizontal from '@/components/common/Horizontal'
import Pagination from '@/components/common/Pagination'

function List() {
  console.log('')
  console.log('function List() { .. }')

  return (
    <>
      <div className="wrapper">
        <Header />

        <section className="container">
          <Hgroup attributes={{ title: '본문' }} />

          <Category />

          <Hgroup attributes={{ level: 3, title: '근거리 무기', invisible: false }} />
          <Choice />

          <Horizontal />

          <Pagination />
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

export default React.memo(List)
