import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Hgroup from '@/components/common/Hgroup'

const Navigation = styled.nav`
  overflow: hidden;
  background-color: #f1f1f1;

  .inner_gnb {
    margin-top: 10px;
    border-top: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
  }

  .list_gnb {
    background-color: #fff;
  }

  .title_gnb {
    display: block;
    padding: 12px;
    font-size: 14px;
    font-weight: 700;
  }

  .list_lnb {
    position: relative;
    margin: 0 -1px -1px;
    font-size: 0;
    background-color: #f9f9f9;
  }

  .list_lnb:before {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1px;
    z-index: 1;
    background-color: #e9e9e9;
    content: '';
  }

  .list_lnb > li {
    display: inline-block;
    position: relative;
    width: 50%;
    margin-top: -1px;
    border: 1px solid #e9e9e9;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    vertical-align: top;
  }

  .list_lnb > li:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -1px;
    border-left: 1px solid #f9f9f9;
    content: '';
  }

  .list_lnb .link_lnb {
    display: block;
    margin-left: -1px;
    padding: 13px 0;
    font-size: 12px;
    text-align: center;
  }
`

function Result() {
  return (
    <>
      <Navigation className="gnb">
        <Hgroup attributes={{ title: '주메뉴' }} />

        <div className="inner_gnb">
          <ul className="list_gnb">
            <li>
              <strong className="title_gnb">무기</strong>
              <ul className="list_lnb">
                <li>
                  <Link to="/eternalcity/weapon/melee/list" className="link_lnb">
                    근거리 무기
                  </Link>
                </li>
                <li>
                  <Link to="/eternalcity/weapon/ranged/list" className="link_lnb">
                    원거리 무기
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </Navigation>
    </>
  )
}

export default Result
