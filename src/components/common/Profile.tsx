import React from 'react'
import styled from 'styled-components'

import Picture from '@/components/common/Picture'

const Profile = styled.div`
  display: table;
  width: 100%;
  padding: 10px 50px 10px 10px;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #fff;
  text-align: left;

  &:first-child {
    border-top: 0 none;
  }

  .link_profile {
    display: block;
    font-size: 0;
  }

  .txt_profile {
    display: inline-block;
    font-size: 14px;
    vertical-align: middle;
  }

  .group_picture + .txt_profile {
    margin-left: 10px;
  }
`

function Result() {
  return (
    <>
      <Profile className="group_profile">
        <a href="/member/login" className="link_profile">
          <Picture />

          <span className="txt_profile">로그인해 주세요.</span>
        </a>
      </Profile>
    </>
  )
}

export default Result
