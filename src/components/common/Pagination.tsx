import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

interface Attributes {
  [key: string]: any
}

interface State {
  wrapper: Function
  list: Function
  item: Function
  link: any
}

interface Props {
  current: any
}

const Styled: State = {
  wrapper: styled.div`
    margin-top: 24px;
    font-size: 0;
    text-align: center;
  `,
  list: styled.ul`
    display: inline-block;
    margin: 0 12px;
    vertical-align: top;
  `,
  item: styled.li`
    display: inline-block;
    vertical-align: top;

    & + & {
      margin-left: 12px;
    }
  `,
  link: styled(Link)`
    display: inline-block;
    position: relative;
    min-width: 32px;
    padding: 8px 4px;
    border: 1px solid transparent;
    border-radius: 6px;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 1;
    vertical-align: top;

    ${(props: Props) => {
      return (
        props.current &&
        css`
          font-weight: bold;
          color: #000;
          border: 1px solid #e9e9e9;
          background-color: #f1f1f1;
        `
      )
    }}
  `
}

const queryString = ({ service, category, number, grade }: Attributes) => {
  return `/eternalcity/${service}/${category}/list/${number}?grade=${grade}`
}

function Result({ attributes, style }: Attributes) {
  const assignment = useMemo(() => {
    return Object.assign({}, defaultProps.attributes, attributes)
  }, [attributes])

  const { pagination, service, category, grade } = useMemo(() => {
    return assignment
  }, [assignment])

  const list = []

  for (let i = pagination.start; i <= pagination.end; i++) {
    list.push(
      <Styled.item key={i}>
        <Styled.link to={queryString({ service, category, number: i, grade })} key={i} current={pagination.current === i ? 1 : 0}>
          {i}
        </Styled.link>
      </Styled.item>
    )
  }

  return (
    <>
      {list.length !== 0 && (
        <Styled.wrapper>
          {/* <Styled.link to="/">이전</Styled.link> */}

          <Styled.list className="list_pagination">{list}</Styled.list>

          {/* <Styled.link to="/">다음</Styled.link> */}
        </Styled.wrapper>
      )}
    </>
  )
}

const defaultProps = {
  attributes: {}
}

export default Result
