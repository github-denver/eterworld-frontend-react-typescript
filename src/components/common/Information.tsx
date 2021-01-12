import React, { ReactNode, useMemo } from 'react'
import styled, { css } from 'styled-components'

// import { Attributes } from '@/interfaces/padding.interfaces'

interface Attributes {
  attributes: {
    data: object
    padding?: boolean
  }
  children?: ReactNode
}

interface State {
  information: any
}

interface Props {
  padding: boolean
}

const Styled: State = {
  information: styled.ul`
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

const information = ['가격', '분류', '등급', '공격력', '치명타', ['명중률', '탄착률'], '무게', '속도', '크기']

function Item({ attributes }: Attributes) {
  interface tplotOptions {
    [key: string]: any
  }

  const data: tplotOptions = attributes.data

  return (
    <>
      <li>
        <strong className="title_attribute">
          <div className="outer_cell">
            <div className="inner_cell">가격</div>
          </div>
        </strong>

        <div className="contents_attribute">
          <p className="text_attribute">{data[0].price}</p>
        </div>
      </li>
      <li>
        <strong className="title_attribute">
          <div className="outer_cell">
            <div className="inner_cell">분류</div>
          </div>
        </strong>

        <div className="contents_attribute">
          <p className="text_attribute">{data[0].type}</p>
        </div>
      </li>
      <li>
        <strong className="title_attribute">
          <div className="outer_cell">
            <div className="inner_cell">등급</div>
          </div>
        </strong>

        <div className="contents_attribute">
          <p className="text_attribute">{data[0].grade}</p>
        </div>
      </li>
      <li>
        <strong className="title_attribute">
          <div className="outer_cell">
            <div className="inner_cell">공격력</div>
          </div>
        </strong>

        <div className="contents_attribute">
          <p className="text_attribute">{data[0].power}</p>
        </div>
      </li>
      <li>
        <strong className="title_attribute">
          <div className="outer_cell">
            <div className="inner_cell">치명타</div>
          </div>
        </strong>

        <div className="contents_attribute">
          <p className="text_attribute">{data[0].critical}</p>
        </div>
      </li>

      <li>
        <div className="group_half">
          <div className="inner_half">
            <strong className="title_attribute">
              <div className="outer_cell">
                <div className="inner_cell">명중률</div>
              </div>
            </strong>

            <div className="contents_attribute">
              <p className="text_attribute">{data[0].hit}%</p>
            </div>
          </div>

          <div className="inner_half">
            <strong className="title_attribute">
              <div className="outer_cell">
                <div className="inner_cell">탄착률</div>
              </div>
            </strong>

            <div className="contents_attribute">
              <p className="text_attribute">{data[0].shoot}%</p>
            </div>
          </div>
        </div>
      </li>

      <li>
        <strong className="title_attribute">
          <div className="outer_cell">
            <div className="inner_cell">무게</div>
          </div>
        </strong>

        <div className="contents_attribute">
          <p className="text_attribute">{data[0].weight}</p>
        </div>
      </li>
      <li>
        <strong className="title_attribute">
          <div className="outer_cell">
            <div className="inner_cell">속도</div>
          </div>
        </strong>

        <div className="contents_attribute">
          <p className="text_attribute">{data[0].speed}발/1분</p>
        </div>
      </li>
      <li>
        <strong className="title_attribute">
          <div className="outer_cell">
            <div className="inner_cell">크기</div>
          </div>
        </strong>

        <div className="contents_attribute">
          <p className="text_attribute">{data[0].size}</p>
        </div>
      </li>
    </>
  )
}

function Result({ attributes, children }: Attributes) {
  const assignment = useMemo(() => {
    return Object.assign({}, defaultProps.attributes, attributes)
  }, [attributes])

  const { data, padding } = useMemo(() => {
    return assignment
  }, [assignment])

  if (!data) {
    console.log('데이터가 존재하지 않습니다.')

    return <p>데이터가 존재하지 않습니다.</p>
  }

  return (
    <Styled.information padding={padding}>
      <Item attributes={{ data: data }} />
    </Styled.information>
  )
}

const defaultProps = {
  attributes: {
    padding: false
  }
}

export default Result
