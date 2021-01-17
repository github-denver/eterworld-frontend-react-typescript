// import React from 'react'
import React, { useState, useCallback, useMemo } from 'react'
import styled, { css } from 'styled-components'

import Choice from '@/components/common/Choice'

interface Attributes {
  [key: string]: any
}

interface State {
  list: any
  item: any
  title: any
  content: any
  list2: any
  item2: any
}

interface Props {
  styles: boolean
}

const Styled: State = {
  list: styled.ul`
    font-size: 0;

    .outer_cell {
      width: 100%;
      height: 100%;
    }

    .inner_half {
      position: relative;
      background-color: #fff;
    }

    .inner_half:before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 60%;
      border-radius: 12px;
      background-color: #f1f1f1;
      content: '';
    }

    .inner_half .title {
      width: 60%;
    }

    .inner_half .content {
      width: 40%;
    }

    .emphasis_price {
      font-style: normal;
    }

    /* ${(props: Props) => {
      return props.styles && css``
    }} */
  `,
  item: styled.li`
    position: relative;

    &:before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 30%;
      border-radius: 12px;
      background-color: #f1f1f1;
      content: '';
    }

    & + & {
      margin-top: 12px;
    }
  `,
  title: styled.title`
    display: inline-block;
    position: relative;
    z-index: 1;
    width: 30%;
    padding: 12px;
    box-sizing: border-box;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;

    ul {
      margin: 0;
      padding: 12px 0;
      border: 0 none;
    }

    li + li {
      margin-top: 12px;
    }
  `,
  content: styled.div`
    display: inline-block;
    width: 70%;
    padding: 12px;
    box-sizing: border-box;
    font-size: 12px;
    vertical-align: middle;
    word-break: keep-all;
  `,
  list2: styled.ul`
    margin-top: 6px;
    padding-top: 6px;
    border-top: 1px solid #e9e9e9;
    box-sizing: border-box;
  `,
  item2: styled.li``
}

const Item = React.memo(function Item({ attributes }: Attributes) {
  const { price } = attributes

  const [price123, setPrice] = useState(price)

  const currency = useCallback((value: any) => {
    return value.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')
  }, [])

  const calculation = useCallback(
    (event: any) => {
      let value = event.target.value !== 'undefined' ? event.target.value : 0

      let result = price * (1 + value / 100)

      setPrice(() => {
        return result
      })
    },
    [price]
  )

  const tax = [
    { id: 'negative', text: '-5%', rate: -5, checked: false },
    { id: 'default', text: '0%', rate: 0, checked: true },
    { id: 'positive', text: '+5%', rate: 5, checked: false }
  ]

  return (
    <>
      <Styled.item>
        <Styled.title>
          <div className="outer_cell">
            <div className="inner_cell">세금</div>
          </div>
        </Styled.title>

        <Styled.content>
          <div className="outer_cell">
            <div className="inner_cell">
              <Choice attributes={{ label: 'tax', data: tax, onChange: calculation }} />
            </div>
          </div>
        </Styled.content>
      </Styled.item>
      <Styled.item>
        <Styled.title>
          <div className="outer_cell">
            <div className="inner_cell">초보</div>
          </div>
        </Styled.title>

        <Styled.content>
          <em className="emphasis_price">{currency(Math.round(price123 * 0.1))}</em>원
          <Styled.list2>
            <Styled.item2>앱솔루트 업그레이드 비용 {currency(Math.round(price123 * 0.3))}원</Styled.item2>
          </Styled.list2>
        </Styled.content>
      </Styled.item>
      <Styled.item>
        <Styled.title>
          <div className="outer_cell">
            <div className="inner_cell">숙련</div>
          </div>
        </Styled.title>

        <Styled.content>
          <em className="emphasis_price">{currency(Math.round(price123 * 0.3))}</em>원
          <Styled.list2>
            <Styled.item2>앱솔루트 업그레이드 비용 {currency(Math.round(price123 * 0.8))}원</Styled.item2>
          </Styled.list2>
        </Styled.content>
      </Styled.item>
      <Styled.item>
        <Styled.title>
          <div className="outer_cell">
            <div className="inner_cell">전문</div>
          </div>
        </Styled.title>

        <Styled.content>
          <em className="emphasis_price">{currency(Math.round(price123 * 0.5))}</em>원
          <Styled.list2>
            <Styled.item2>앱솔루트 업그레이드 비용 {currency(Math.round(price123 * 2.4))}원</Styled.item2>
          </Styled.list2>
        </Styled.content>
      </Styled.item>
      <Styled.item>
        <Styled.title>
          <div className="outer_cell">
            <div className="inner_cell">
              <Styled.list2>
                <Styled.item2>장인</Styled.item2>
                <Styled.item2>명인</Styled.item2>
                <Styled.item2>O.T.</Styled.item2>
              </Styled.list2>
            </div>
          </div>
        </Styled.title>

        <Styled.content>
          <em className="emphasis_price">{currency(Math.round(price123 * 0.1))}</em>원
          <Styled.list2>
            <Styled.item2>앱솔루트 업그레이드 불가능</Styled.item2>
          </Styled.list2>
        </Styled.content>
      </Styled.item>
    </>
  )
})

function Result({ location, attributes, style }: Attributes) {
  const assignment = useMemo(() => {
    return Object.assign({}, defaultProps.attributes, attributes)
  }, [attributes])

  const { price } = useMemo(() => {
    return assignment
  }, [assignment])

  return (
    <Styled.list style={style}>
      <Item attributes={{ price }} />
    </Styled.list>
  )
}

const defaultProps = {
  attributes: {}
}

export default React.memo(Result)
