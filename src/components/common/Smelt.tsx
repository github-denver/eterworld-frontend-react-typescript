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

const Item = React.memo(function Item({ attributes }: Attributes) {
  const { onChange } = attributes

  const upgrade = [
    { text: '기본', rate: 0, checked: true },
    { text: '초보', rate: 0.1, checked: false },
    { text: '숙련', rate: 0.3, checked: false },
    { text: '전문', rate: 0.5, checked: false },
    { text: '장인', rate: 1, checked: false },
    { text: '명인', rate: 2, checked: false },
    { text: 'O.T.', rate: 3, checked: false }
  ]

  return (
    <>
      <Styled.item>
        <Styled.title>
          <div className="outer_cell">
            <div className="inner_cell">몸체</div>
          </div>
        </Styled.title>

        <Styled.content>
          <Choice attributes={{ label: 'body', data: upgrade, onChange: onChange['body'] }} />
        </Styled.content>
      </Styled.item>

      <Styled.item>
        <Styled.title>
          <div className="outer_cell">
            <div className="inner_cell">총열</div>
          </div>
        </Styled.title>

        <Styled.content>
          <Choice attributes={{ label: 'barrel', data: upgrade, onChange: onChange['barrel'] }} />
        </Styled.content>
      </Styled.item>

      <Styled.item>
        <Styled.title>
          <div className="outer_cell">
            <div className="inner_cell">조준경</div>
          </div>
        </Styled.title>

        <Styled.content>
          <Choice attributes={{ label: 'sight', data: upgrade, onChange: onChange['sight'] }} />
        </Styled.content>
      </Styled.item>

      <Styled.item>
        <Styled.title>
          <div className="outer_cell">
            <div className="inner_cell">손잡이</div>
          </div>
        </Styled.title>

        <Styled.content>
          <Choice attributes={{ label: 'handle', data: upgrade, onChange: onChange['handle'] }} />
        </Styled.content>
      </Styled.item>
    </>
  )
})

function Result({ attributes, style }: Attributes) {
  const assignment = useMemo(() => {
    return Object.assign({}, defaultProps.attributes, attributes)
  }, [attributes])

  const { onChange } = useMemo(() => {
    return assignment
  }, [assignment])

  return (
    <Styled.list style={style}>
      <Item attributes={{ onChange: onChange }} />
    </Styled.list>
  )
}

const defaultProps = {
  attributes: {}
}

export default React.memo(Result)
