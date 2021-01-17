import React from 'react'
import styled from 'styled-components'

// import Profile from '@/components/common/Profile'
import Navigation from '@/components/menu/Navigation'

import { Attributes } from '@/interfaces/visible.interfaces'

interface State {
  menu: any
}

const Styled: State = {
  menu: styled.div`
    text-align: left;
    background-color: #f1f1f1;

    &,
    .inner_menu {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      min-width: 320px;
      margin: 0 auto;
    }

    .inner_menu {
      overflow-x: hidden;
      overflow-y: auto;
      max-width: 640px;
      padding-bottom: 40px;
      background-color: #fff;
    }

    .button_close {
      position: absolute;
      top: 12px;
      right: 12px;
    }
  `
}

interface IProps_Square {
  visible: any
}

const Visible = React.memo(function Visible({ visible }: IProps_Square) {
  return (
    <>
      <button type="button" className="button_global button_close" onClick={visible}>
        <span className="icon_global icon_close">주메뉴 닫기</span>
      </button>
    </>
  )
})

function Result({ attributes }: Attributes) {
  const { visible } = attributes

  return (
    <Styled.menu className="menu">
      <div className="inner_menu">
        {/* <Profile /> */}

        <Navigation />

        <Visible visible={visible} />
      </div>
    </Styled.menu>
  )
}

export default Result
