import React from 'react'
// import styled from 'styled-components'

import Hgroup from '@/components/common/Hgroup'

function Search() {
  return (
    <>
      <div className="group_search">
        <Hgroup attributes={{ title: '검색' }} />

        <div className="group_select">
          <label htmlFor="search" className="label_select">
            <span className="text_select">제목</span>
            <span className="icon_global"></span>
          </label>

          <select name="search" className="select_local">
            <option value="subject">제목</option>
            <option value="content">내용</option>
          </select>
        </div>

        <div className="group_field">
          <span className="box_field">
            <input type="text" className="field_local" />
          </span>
        </div>

        <a href="/" className="button_global button_default" role="button">
          검색
        </a>
      </div>
    </>
  )
}

export default React.memo(Search)
