import React, { useMemo } from 'react'

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

    ${(props: Props) => {
      return (
        props.padding &&
        css`
          padding: 12px;
        `
      )
    }}
  `
}

function Item({ location, attributes }: Attributes) {
  const { grade } = attributes

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
              <Choice location={location} attributes={{ grade123: grade, custom: ['-5%', '0%', '+5%'] }} stlyes={{ padding: '12px' }} />
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
          <em className="emphasis_price">87,120,000</em>원
          <ul className="list_local">
            <li>앱솔루트 업그레이드 비용 261,360,000원</li>
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
          <em className="emphasis_price">87,120,000</em>원
          <ul className="list_local">
            <li>앱솔루트 업그레이드 비용 261,360,000원</li>
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
          <em className="emphasis_price">87,120,000</em>원
          <ul className="list_local">
            <li>앱솔루트 업그레이드 비용 261,360,000원</li>
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
          <em className="emphasis_price">87,120,000</em>원
          <ul className="list_local">
            <li>앱솔루트 업그레이드 불가능</li>
          </ul>
        </div>
      </li>
    </>
  )
}

function Result({ location, attributes }: Attributes) {
  const prefixed = qs.parse(location.search, {
    ignoreQueryPrefix: true
  })
  console.log('prefixed.grade: ', prefixed.grade)
  console.log('!prefixed.grade: ', !prefixed.grade)
  console.log('!!prefixed.grade: ', !!prefixed.grade)

  const grade = !!prefixed.grade ? prefixed.grade : 1
  console.log('grade: ', grade)

  const assignment = useMemo(() => {
    return Object.assign({}, defaultProps.attributes, attributes)
  }, [attributes])

  const { padding } = useMemo(() => {
    return assignment
  }, [assignment])

  return (
    <Styled.tax padding={padding}>
      <Item location={location} attributes={{ grade: grade }} />
    </Styled.tax>
  )
}

const defaultProps = {
  attributes: {}
}

export default Result
