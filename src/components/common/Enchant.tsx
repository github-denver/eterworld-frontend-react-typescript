import React, { useMemo } from 'react'
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
  list2: styled.ul``,
  item2: styled.li``
}

const normal = [
  { sequence: 1, text: '+0', rate: 0, checked: true },
  { sequence: 2, text: '+1', rate: 1, checked: false },
  { sequence: 3, text: '+2', rate: 2, checked: false },
  { sequence: 4, text: '+3', rate: 3, checked: false },
  { sequence: 5, text: '+4', rate: 4, checked: false },
  { sequence: 6, text: '+5', rate: 5, checked: false },
  { sequence: 7, text: '+6', rate: 6, checked: false },
  { sequence: 8, text: '+7', rate: 7, checked: false },
  { sequence: 9, text: '+8', rate: 8, checked: false },
  { sequence: 10, text: '+9', rate: 9, checked: false }
]
const max = [
  { sequence: 11, text: 'MAX +0', rate: 0, checked: false },
  { sequence: 12, text: 'MAX +1', rate: 1, checked: false },
  { sequence: 13, text: 'MAX +2', rate: 1, checked: false },
  { sequence: 14, text: 'MAX +3', rate: 3, checked: false },
  { sequence: 15, text: 'MAX +4', rate: 3, checked: false },
  { sequence: 16, text: 'MAX +5', rate: 3, checked: false },
  { sequence: 17, text: 'MAX +6', rate: 6, checked: false },
  { sequence: 18, text: 'MAX +7', rate: 6, checked: false },
  { sequence: 19, text: 'MAX +8', rate: 6, checked: false },
  { sequence: 20, text: 'MAX +9', rate: 10, checked: false }
]

const Item = React.memo(function Item({ attributes }: any) {
  const { onChange } = attributes

  return (
    <>
      <Styled.item>
        <Styled.title>
          <div className="outer_cell">
            <div className="inner_cell">일반</div>
          </div>
        </Styled.title>

        <Styled.content>
          <Choice attributes={{ label: 'normal', name: 'enchant', data: normal, onChange: onChange['body'], sequence: true }} />
        </Styled.content>
      </Styled.item>

      <Styled.item>
        <Styled.title>
          <div className="outer_cell">
            <div className="inner_cell">MAX</div>
          </div>
        </Styled.title>

        <Styled.content>
          <Choice attributes={{ label: 'max', name: 'enchant', data: max, increment: 1, onChange: onChange['body'], sequence: true }} />
        </Styled.content>
      </Styled.item>
    </>
  )
})

function Result({ attributes, styles, children }: Attributes) {
  const assignment = useMemo(() => {
    return Object.assign({}, defaultProps.attributes, attributes)
  }, [attributes])

  const { onChange } = useMemo(() => {
    return assignment
  }, [assignment])

  return (
    <Styled.list style={styles}>
      <Item attributes={{ onChange }} />
    </Styled.list>
  )
}

const defaultProps = {
  attributes: {}
}

export default React.memo(Result)
