import React, { useMemo } from 'react'
import styled from 'styled-components'

const Information = styled.div`
  overflow: hidden;
  padding-left: 12px;

  .title {
    display: block;
    font-size: 14px;
    word-break: break-all;
  }

  .description {
    margin: 6px 0 0 -6px;
  }

  .description > li {
    display: inline-block;
    margin-left: 6px;
    font-size: 12px;
    vertical-align: top;
  }
`

interface Attributes {
  attributes: {
    name: any
    power: any
    critical: any
    hit: any
    shoot: any
    speed: any
  }
}

function Result({ attributes }: Attributes) {
  const assignment = useMemo(() => {
    return Object.assign({}, defaultProps.attributes, attributes)
  }, [attributes])

  const { name, power, critical, hit, shoot, speed } = useMemo(() => {
    return assignment
  }, [assignment])

  return (
    <>
      <Information>
        <strong className="title">{name}</strong>
        <ul className="description">
          <li>공격력 {power}</li>
          <li>치명타 {critical}</li>
          <li>명중률 {hit}%</li>
          <li>탄착률 {shoot}%</li>
          <li>속도 {speed}발/1분</li>
        </ul>
      </Information>
    </>
  )
}

const defaultProps = {
  attributes: {
    thumbnail: ''
  }
}

export default Result
