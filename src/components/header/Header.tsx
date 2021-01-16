import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Hgroup from '@/components/common/Hgroup'
import Menu from '@/components/menu/Menu'
// import Search from '@/components/common/Search'

const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  padding: 12px;
  background-color: #5f7368;

  .inner_half {
    vertical-align: middle;
    text-align: right;
  }

  .inner_half:first-child {
    text-align: left;
  }

  .title_eternalcity {
    display: inline-block;
    vertical-align: middle;
  }

  .link_eternalcity {
    display: block;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }

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
  const [menuVisible, setMenuVisible] = useState(false)
  // const [searchVisible, setSearchVisible] = useState(false)

  const onMenuVisible = useCallback(() => {
    setMenuVisible((menuVisible) => {
      return !menuVisible
    })
  }, [])

  /* const onSearchVisible = useCallback(() => {
    setSearchVisible((searchVisible) => {

      return !searchVisible
    })
  }, []) */

  return (
    <>
      <Header className="header">
        <div className="group_half">
          <div className="inner_half">
            <h1 className="title_eternalcity">
              <Link to="/" className="link_eternalcity">
                이터월드
              </Link>
            </h1>
          </div>

          <div className="inner_half">
            <button type="button" className="button_global button_hamburger" onClick={onMenuVisible}>
              <span className="icon_global icon_hamburger">주메뉴 열기</span>
            </button>

            <Hgroup attributes={{ title: '로그인 정보' }} />

            {/* <ul className="list_utility">
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
            </ul> */}

            {menuVisible && <Menu attributes={{ visible: onMenuVisible }} />}

            {/* {searchVisible && <Search attributes={{ visible: onSearchVisible }} />} */}
          </div>
        </div>
      </Header>
    </>
  )
}

export default React.memo(Result)
