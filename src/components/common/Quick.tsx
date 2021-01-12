import React from 'react'
import styled from 'styled-components'

import Hgroup from '@/components/common/Hgroup'

interface State {
  quick: Function
}

const Styled: State = {
  quick: styled.aside`
    position: fixed;
    right: 12px;
    bottom: 12px;
    left: 12px;
    z-index: 10;
    height: 56px;
    padding: 12px;
    border: 1px solid #e9e9e9;
    border-radius: 16px;
    box-sizing: border-box;
    background-color: #fff;
    text-align: center;

    .inner_quick {
      margin-left: -12px;
    }

    .button_global {
      margin-left: 12px;
    }
  `
}

function Quick() {
  return (
    <Styled.quick>
      <Hgroup attributes={{ title: '빠른 서비스' }} />

      <div className="inner_quick">
        <button type="button" className="button_global">
          <span className="icon_global icon_hamburger">검색</span>
        </button>
      </div>
    </Styled.quick>
  )
}

export default React.memo(Quick)
