import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Hgroup from '@/components/common/Hgroup'
import Menu from '@/components/menu/Menu'
// import Search from '@/components/common/Search'

const Header = styled.header`
  /* position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100; */
  padding: 12px;
  background-color: #fff;
  text-align: right;

  .title_eternalcity {
    position: absolute;
    top: 0;
    left: 0;
    /* top: 50%;
    left: 12px;
    margin-top: -13.5px; */
  }

  .link_eternalcity {
    display: block;
    font-size: 18px;
    font-weight: bold;
  }

  /*
  .button_hamburger {
    position: absolute;
    top: 12px;
    right: 100px;
  }

  .list_utility {
    position: absolute;
    top: 12px;
    right: 12px;
  }
  */

  .button_hamburger {
    display: inline-block;
    vertical-align: top;
  }

  .button_hamburger ~ .list_utility {
    margin-left: 12px;
  }

  .list_utility {
    display: inline-block;
    font-size: 0;
    vertical-align: top;
  }

  .list_utility > li {
    display: inline-block;
    vertical-align: top;
  }

  .list_utility > li + li {
    margin-left: 12px;
  }

  .list_utility .link_utility {
    display: block;
  }
`

function Result() {
  console.log('')
  console.log('function Header() { .. }')

  const [menuVisible, setMenuVisible] = useState(false)
  // const [searchVisible, setSearchVisible] = useState(false)

  const onMenuVisible = useCallback(() => {
    setMenuVisible((menuVisible) => {
      console.log('function Header() { .. } → menuVisible: ', menuVisible)
      console.log('function Header() { .. } → !menuVisible: ', !menuVisible)

      return !menuVisible
    })
  }, [])

  /* const onSearchVisible = useCallback(() => {
    setSearchVisible((searchVisible) => {
      console.log('function Header() { .. } → searchVisible: ', searchVisible)
      console.log('function Header() { .. } → !searchVisible: ', !searchVisible)

      return !searchVisible
    })
  }, []) */

  return (
    <>
      <Header className="header">
        <h1 className="title_eternalcity">
          <Link to="/" className="link_eternalcity">
            이터월드
          </Link>
        </h1>

        <button type="button" className="button_global button_hamburger" onClick={onMenuVisible}>
          <span className="icon_global icon_hamburger">주메뉴 열기</span>
        </button>

        <Hgroup attributes={{ title: '로그인 정보' }} />

        <ul className="list_utility">
          <li>
            <Link to="/" className="link_utility">
              <span className="icon_global icon_login">로그인</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="link_utility">
              <span className="icon_global icon_register">회원가입</span>
            </Link>
          </li>
        </ul>

        {menuVisible && <Menu attributes={{ visible: onMenuVisible }} />}

        {/* {searchVisible && <Search attributes={{ visible: onSearchVisible }} />} */}
      </Header>
    </>
  )
}

export default React.memo(Result)
