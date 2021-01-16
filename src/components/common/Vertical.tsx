import React from 'react'
import styled from 'styled-components'

const Vertical = styled.section`
  .list_vertical {
    padding-right: 12px;
  }

  .item {
    padding-left: 12px;
    box-sizing: border-box;
  }

  .link_vertical {
    display: block;
  }

  .frame_vertical {
    display: block;
    padding-top: 100%;
    border-radius: 12px;
    font-size: 1px;
    color: transparent;
    background-color: #f2f2f2;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .information_vertical {
    padding: 6px;
  }

  .title_vertical {
    display: block;
    font-size: 14px;
    word-break: break-all;
  }

  .description_vertical {
    margin-top: 6px;
  }

  .description_vertical > li {
    font-size: 12px;
  }
`

function Result() {
  return (
    <Vertical>
      <a href="/" className="link_vertical">
        <span className="frame_vertical">
          <span className="thumbnail_vertical"></span>
        </span>

        <div className="information_vertical">
          <strong className="title_vertical">Ultimate Rifle/AntiMaterial</strong>
          <ul className="description_vertical">
            <li>공격력 1,966</li>
            <li>치명타 11</li>
            <li>명중률 25%</li>
            <li>탄착률 55%</li>
            <li>속도 240발/1분</li>
          </ul>
        </div>
      </a>
    </Vertical>
  )
}

export default Result
