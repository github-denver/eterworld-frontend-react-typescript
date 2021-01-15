// import React from 'react'
import React, { useState, useCallback, useMemo } from 'react'

import styled, { css } from 'styled-components'

import qs from 'qs'

import Choice from '@/components/common/Choice'

// import { Attributes } from '@/interfaces/padding.interfaces'

interface Attributes {
  [key: string]: any
}

interface State {
  tax: any
}

interface Props {
  padding: boolean
}

const Styled: State = {
  tax: styled.div`
    font-size: 0;

    .outer_cell {
      width: 100%;
      height: 100%;
    }

    & > li {
      position: relative;
    }

    & > li:before {
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

    & > li + li {
      margin-top: 12px;
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

    .inner_half .title_attribute {
      width: 60%;
    }

    .inner_half .contents_attribute {
      width: 40%;
    }

    .title_attribute,
    .contents_attribute {
      box-sizing: border-box;
      font-size: 12px;
    }

    .title_attribute {
      display: inline-block;
      position: relative;
      z-index: 1;
      width: 30%;
      padding: 12px;
      box-sizing: border-box;
      text-align: center;
      vertical-align: middle;
    }

    .title_attribute .list_local {
      padding: 12px 0;
    }

    .title_attribute .list_local li + li {
      margin-top: 12px;
    }

    .contents_attribute {
      display: inline-block;
      width: 70%;
      padding: 12px;
      vertical-align: middle;
      word-break: keep-all;
    }

    .contents_attribute .list_local {
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid #e9e9e9;
      box-sizing: border-box;
    }

    .emphasis_price {
      font-style: normal;
    }

    /* ${(props: Props) => {
      return (
        props.padding &&
        css`
          padding: 12px;
        `
      )
    }} */
  `
}

const Item = React.memo(function Item({ attributes }: Attributes) {
  const { price } = attributes

  const [price123, setPrice] = useState(price)

  const currency = useCallback((value: any) => {
    return value.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')
  }, [])

  const calculation = useCallback((event: any) => {
    let value = event.target.value !== 'undefined' ? event.target.value : 0

    let result = price * (1 + value / 100)

    setPrice(() => {
      return result
    })
  }, [])

  const tax = [
    { id: 'negative', text: '-5%', rate: -5, checked: false },
    { id: 'default', text: '0%', rate: 0, checked: true },
    { id: 'positive', text: '+5%', rate: 5, checked: false }
  ]

  return (
    <>
      <li>
        <strong className="title_attribute">
          <div className="outer_cell">
            <div className="inner_cell">세금</div>
          </div>
        </strong>

        <div className="contents_attribute">
          <div className="outer_cell">
            <div className="inner_cell">
              {/* <Choice
                location={location}
                attributes={{
                  label: 'tax',
                  grade123: grade,
                  custom: ['-5%', '0%', '+5%'],
                  value: [
                    { id: 'negative', title: '-5%', rate: -5, checked: false },
                    { id: 'default', title: '0%', rate: 0, checked: true },
                    { id: 'positive', title: '+5%', rate: 5, checked: false }
                  ],
                  event: calculation
                }}
              /> */}

              <Choice attributes={{ type: 'tax', label: 'tax', data: tax, event: calculation }} />
            </div>
          </div>
        </div>
      </li>
      <li>
        <strong className="title_attribute">
          <div className="outer_cell">
            <div className="inner_cell">초보</div>
          </div>
        </strong>

        <div className="contents_attribute">
          <em className="emphasis_price">{currency(Math.round(price123 * 0.1))}</em>원
          <ul className="list_local">
            <li>앱솔루트 업그레이드 비용 {currency(Math.round(price123 * 0.3))}원</li>
          </ul>
        </div>
      </li>
      <li>
        <strong className="title_attribute">
          <div className="outer_cell">
            <div className="inner_cell">숙련</div>
          </div>
        </strong>

        <div className="contents_attribute">
          <em className="emphasis_price">{currency(Math.round(price123 * 0.3))}</em>원
          <ul className="list_local">
            <li>앱솔루트 업그레이드 비용 {currency(Math.round(price123 * 0.8))}원</li>
          </ul>
        </div>
      </li>
      <li>
        <strong className="title_attribute">
          <div className="outer_cell">
            <div className="inner_cell">전문</div>
          </div>
        </strong>

        <div className="contents_attribute">
          <em className="emphasis_price">{currency(Math.round(price123 * 0.5))}</em>원
          <ul className="list_local">
            <li>앱솔루트 업그레이드 비용 {currency(Math.round(price123 * 2.4))}원</li>
          </ul>
        </div>
      </li>
      <li>
        <strong className="title_attribute">
          <div className="outer_cell">
            <div className="inner_cell">
              <ul className="list_local">
                <li>장인</li>
                <li>명인</li>
                <li>O.T.</li>
              </ul>
            </div>
          </div>
        </strong>

        <div className="contents_attribute">
          <em className="emphasis_price">{currency(Math.round(price123 * 0.1))}</em>원
          <ul className="list_local">
            <li>앱솔루트 업그레이드 불가능</li>
          </ul>
        </div>
      </li>
    </>
  )
})

function Result({ location, attributes, style }: Attributes) {
  // const prefixed = qs.parse(location.search, {
  //   ignoreQueryPrefix: true
  // })

  // const grade = !!prefixed.grade ? prefixed.grade : 1

  const assignment = useMemo(() => {
    return Object.assign({}, defaultProps.attributes, attributes)
  }, [attributes])

  const { price } = useMemo(() => {
    return assignment
  }, [assignment])

  return (
    <Styled.tax style={style}>
      {/* <Item location={location} attributes={{ data: data, grade: grade }} /> */}
      <Item attributes={{ price }} />
    </Styled.tax>
  )
}

const defaultProps = {
  attributes: {}
}

export default React.memo(Result)
