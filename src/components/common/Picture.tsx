import React from 'react'
import styled from 'styled-components'

const Picture = styled.div`
  display: inline-block;
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  background-color: #f9f9f9;
  vertical-align: middle;

  .thumbnail_picture {
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`

function Result() {
  return (
    <>
      <Picture className="group_picture">
        <img src="/" alt="" className="thumbnail_picture" />
      </Picture>
    </>
  )
}

export default Result
