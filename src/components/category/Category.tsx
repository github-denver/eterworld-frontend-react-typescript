import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Hgroup from '@/components/common/Hgroup'

const Category = styled.div`
  /* position: fixed;
  top: 56px;
  right: 0;
  left: 0;
  z-index: 10; */
  padding: 12px 0;
  background-color: #fff;

  .list_category {
    overflow: auto;
    /* padding: 0 12px; */
    font-size: 0;
    white-space: nowrap;
  }

  .list_category > li {
    display: inline-block;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    vertical-align: top;
  }

  .list_category > li + li {
    padding-left: 12px;
  }

  .link_category {
    display: block;
    border-radius: 12px;
    padding: 6px 12px;
    font-size: 14px;
    font-weight: bold;
    color: gray;
    background-color: #f1f1f1;
  }

  .link_category.current {
    color: #fff;
    background-color: #000;
  }
`

function Result() {
  return (
    <>
      <Category className="group_category">
        <Hgroup attributes={{ level: 3, title: '전체 서비스' }} />

        <ul className="list_category">
          <li>
            <Link to="/eternalcity/weapon/melee/list" className="link_category current">
              근거리 무기
            </Link>
          </li>
          <li>
            <Link to="/eternalcity/weapon/ranged/list" className="link_category">
              원거리 무기
            </Link>
          </li>
          <li>
            <Link to="/" className="link_category" onClick={() => alert('남성용 방어구')}>
              남성용 방어구
            </Link>
          </li>
          <li>
            <Link to="/" className="link_category">
              남성용 변이체 방어구
            </Link>
          </li>
          <li>
            <Link to="/" className="link_category">
              여성용 방어구
            </Link>
          </li>
          <li>
            <Link to="/" className="link_category">
              여성용 변이체 방어구
            </Link>
          </li>
          <li>
            <Link to="/" className="link_category">
              액세서리
            </Link>
          </li>
        </ul>
      </Category>
    </>
  )
}

export default React.memo(Result)
