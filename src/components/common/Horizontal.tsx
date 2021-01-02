import React from 'react'
import styled from 'styled-components'

const Horizontal = styled.div``

function Result() {
  return (
    <Horizontal>
      <ul className="list_horizontal">
        <li>
          <a href="/" className="link_horizontal">
            <span className="frame_horizontal">
              <span className="thumbnail_horizontal"></span>
            </span>

            <div className="information_horizontal">
              <strong className="title_horizontal">Ultimate Rifle/AntiMaterial</strong>
              <ul className="description_horizontal">
                <li>공격력 1,966</li>
                <li>치명타 11</li>
                <li>명중률 25%</li>
                <li>탄착률 55%</li>
                <li>속도 240발/1분</li>
              </ul>
            </div>
          </a>
        </li>
      </ul>
    </Horizontal>
  )
}

export default Result
