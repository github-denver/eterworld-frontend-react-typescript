import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import Hgroup from '@/components/common/Hgroup'

interface Attributes {
  [key: string]: any
}

interface State {
  category: Function
  list: Function
  item: Function
  link?: any
}

interface Props {
  current: any
}

const Styled: State = {
  category: styled.div`
    padding: 12px 0;
  `,
  list: styled.ul`
    overflow: auto;
    font-size: 0;
    white-space: nowrap;
  `,
  item: styled.li`
    display: inline-block;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    vertical-align: top;

    & + & {
      margin-left: 12px;
      /* margin-left: 24px; */
    }
  `,
  link: styled(Link)`
    display: block;
    position: relative;
    padding: 6px 12px;
    /* padding: 6px 0; */
    border-radius: 12px;
    font-size: 14px;
    font-weight: bold;
    color: gray;
    background-color: #f1f1f1;

    /* &:before {
      display: none;
      position: absolute;
      right: 0;
      bottom: 6px;
      left: 0;
      z-index: -1;
      height: 6px;
      background-color: #ffcd00;
      content: '';
    } */

    ${(props: Props) => {
      return (
        props.current &&
        css`
          color: #fff;
          background-color: #000;

          /* color: #000;

          &:before {
            display: block;
          } */
        `
      )
    }}
  `
}

function Item({ attributes }: Attributes) {
  const { query, text, service, category, custom, current } = attributes

  const queryString = query.map((currentValue: object, index: number) => {
    let result: string = ''

    for (const property in currentValue) {
      if (property !== 'key') {
        result += '='
      }

      result += `${query[index][property]}`
    }

    return result
  })

  return (
    <Styled.item>
      {!!custom ? (
        <Styled.link to={`/`} current={category === current ? 1 : 0}>
          {text}
        </Styled.link>
      ) : (
        <Styled.link to={`/eternalcity/${service}/${category}/list?${queryString}`} current={category === current ? 1 : 0}>
          {text}
        </Styled.link>
      )}
    </Styled.item>
  )
}

function List({ attributes }: Attributes) {
  const { query, data, category } = attributes

  return (
    <Styled.list>
      {data.map((currentValue: any, index: number) => {
        return (
          <Item
            key={index}
            attributes={{
              query: query,
              text: currentValue.text,
              service: currentValue.service,
              category: currentValue.category,
              custom: currentValue.custom,
              current: category
            }}
          />
        )
      })}
    </Styled.list>
  )
}

function Result({ location, attributes, styles }: Attributes) {
  const pathname = location.pathname.split('/').filter((element: string) => {
    return element !== null && element !== undefined && element !== ''
  })

  const category = pathname[2]

  const assignment = useMemo(() => {
    return Object.assign({}, defaultProps.attributes, attributes)
  }, [attributes])

  const { data, query } = useMemo(() => {
    return assignment
  }, [assignment])

  return (
    <Styled.category style={styles}>
      <Hgroup attributes={{ level: 3, title: '전체 서비스' }} />

      <List attributes={{ data: data, query: query, category: category }} />
    </Styled.category>
  )
}

const defaultProps = {
  attributes: {}
}

export default React.memo(Result)
