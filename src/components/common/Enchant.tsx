import React from 'react'
// import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'

import Choice from '@/components/common/Choice'

// import { Attributes } from '@/interfaces/padding.interfaces'

interface Attributes {
  [key: string]: any
}

interface State {
  enchant: any
}

interface Props {
  padding: boolean
}

const Styled: State = {
  enchant: styled.ul`
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

const grade = ['일반', 'MAX']

function Item({ grade }: any) {
  return (
    <>
      <li key={1}>
        <strong className="title_attribute">
          <div className="outer_cell">
            <div className="inner_cell">{grade[0]}</div>
          </div>
        </strong>

        <div className="contents_attribute">
          <ul className="list_choice type_enchant">
            <Choice attributes={{ label: 'normal', prefix: '+', length: 3 }} />
          </ul>
        </div>
      </li>

      <li key={2}>
        <strong className="title_attribute">
          <div className="outer_cell">
            <div className="inner_cell">{grade[1]}</div>
          </div>
        </strong>

        <div className="contents_attribute">
          <ul className="list_choice type_enchant">
            <Choice attributes={{ label: 'max', prefix: 'MAX +', length: 3 }} />
          </ul>
        </div>
      </li>
    </>
  )
}

function Result({ attributes, style, children }: Attributes) {
  // const assignment = useMemo(() => {
  //   return Object.assign({}, defaultProps.attributes, attributes)
  // }, [attributes])

  // const { styles } = useMemo(() => {
  //   return assignment
  // }, [assignment])

  return (
    <Styled.enchant style={style}>
      <Item grade={grade} />
    </Styled.enchant>
  )
}

// const defaultProps = {
//   attributes: {}
// }

export default Result
