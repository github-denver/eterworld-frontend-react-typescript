import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'

import Choice from '@/components/common/Choice'

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

const reinforce = [
  { text: '+0', rate: 0, checked: true },
  { text: '+1', rate: 1, checked: false },
  { text: '+2', rate: 2, checked: false },
  { text: '+3', rate: 3, checked: false },
  { text: '+4', rate: 4, checked: false },
  { text: '+5', rate: 5, checked: false },
  { text: '+6', rate: 6, checked: false },
  { text: '+7', rate: 7, checked: false },
  { text: '+8', rate: 8, checked: false },
  { text: '+9', rate: 9, checked: false },
  { text: 'MAX +0', rate: 0, checked: false },
  { text: 'MAX +1', rate: 1, checked: false },
  { text: 'MAX +2', rate: 1, checked: false },
  { text: 'MAX +3', rate: 3, checked: false },
  { text: 'MAX +4', rate: 3, checked: false },
  { text: 'MAX +5', rate: 3, checked: false },
  { text: 'MAX +6', rate: 6, checked: false },
  { text: 'MAX +7', rate: 6, checked: false },
  { text: 'MAX +8', rate: 6, checked: false },
  { text: 'MAX +9', rate: 10, checked: false }
]

const Item = React.memo(function Item({ attributes }: any) {
  const { power, normal, handler } = attributes

  return (
    <>
      <li>
        <strong className="title_attribute">
          <div className="outer_cell">
            <div className="inner_cell">일반</div>
          </div>
        </strong>

        <div className="contents_attribute">
          <ul className="list_choice type_enchant">
            <Choice attributes={{ type: 'enchant', label: 'enchant', data: reinforce, normal, event: handler['body'] }} />
          </ul>
        </div>
      </li>
    </>
  )
})

function Result({ attributes, style, children }: Attributes) {
  const assignment = useMemo(() => {
    return Object.assign({}, defaultProps.attributes, attributes)
  }, [attributes])

  const { power, normal, handler } = useMemo(() => {
    return assignment
  }, [assignment])

  return (
    <Styled.enchant style={style}>
      <Item attributes={{ power, normal, handler }} />
    </Styled.enchant>
  )
}

const defaultProps = {
  attributes: {}
}

export default React.memo(Result)
