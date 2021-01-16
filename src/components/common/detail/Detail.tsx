import React, { useMemo } from 'react'
import styled from 'styled-components'

interface Attributes {
  [key: string]: any
}

interface State {
  wrapper: any
  title: any
  list: any
  item: any
}

const Styled: State = {
  wrapper: styled.div`
    overflow: hidden;
    padding-left: 12px;
  `,
  title: styled.strong`
    display: block;
    font-size: 14px;
    word-break: break-all;
  `,
  list: styled.ul`
    margin: 6px 0 0 -6px;
  `,
  item: styled.li`
    display: inline-block;
    margin-left: 6px;
    font-size: 12px;
    vertical-align: top;
  `
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
      <Styled.wrapper>
        <Styled.title className="title">{name}</Styled.title>
        <Styled.list className="description">
          <Styled.item>공격력 {power}</Styled.item>
          <Styled.item>치명타 {critical}</Styled.item>
          <Styled.item>명중률 {hit}%</Styled.item>
          <Styled.item>탄착률 {shoot}%</Styled.item>
          <Styled.item>속도 {speed}발/1분</Styled.item>
        </Styled.list>
      </Styled.wrapper>
    </>
  )
}

const defaultProps = {
  attributes: {}
}

export default Result
