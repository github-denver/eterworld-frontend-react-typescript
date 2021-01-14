import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import Hgroup from '@/components/common/Hgroup'

// import { Attributes } from '@/interfaces/padding.interfaces'

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
    background-color: #fff;
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
      padding-left: 12px;
    }
  `,
  link: styled(Link)`
    display: block;
    border-radius: 12px;
    padding: 6px 12px;
    font-size: 14px;
    font-weight: bold;
    color: gray;
    background-color: #f1f1f1;

    ${(props: Props) => {
      return (
        props.current &&
        css`
          color: #fff;
          background-color: #000;
        `
      )
    }}
  `
}

function Item({ attributes }: Attributes) {
  const { query, text, service, category, current } = attributes

  let queryString = query.map((currentValue: object, index: number) => {
    for (const property in currentValue) {
      if (property !== 'key') {
        queryString += '='
      }

      queryString += `${query[index][property]}`
    }

    return queryString
  })

  return (
    <Styled.item>
      <Styled.link to={`/eternalcity/${service}/${category}/list?${queryString}`} current={category === current ? 1 : 0}>
        {text}
      </Styled.link>
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
              current: category
            }}
          />
        )
      })}
    </Styled.list>
  )
}

function Result({ location, attributes, style }: Attributes) {
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
    <Styled.category style={style}>
      <Hgroup attributes={{ level: 3, title: '전체 서비스' }} />

      <List attributes={{ data: data, query: query, category: category }} />
    </Styled.category>
  )
}

const defaultProps = {
  attributes: {}
}

export default React.memo(Result)
