import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'

// import { Attributes } from '@/interfaces/padding.interfaces'

interface Attributes {
  [key: string]: any
}

interface State {
  list: any
  item: any
  box: any
}

interface Props {
  length: number
}

const Styled: State = {
  list: styled.ul`
    margin: -10px 0 0 -10px;
    font-size: 0;
  `,
  item: styled.li`
    display: inline-block;
    width: 25%;
    padding: 10px 0 0 10px;
    box-sizing: border-box;
    vertical-align: top;

    ${(props: Props) => {
      return (
        props.length === 3 &&
        css`
          width: 33.33%;
        `
      )
    }}
  `,
  box: styled.span`
    display: block;
    position: relative;

    input {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      visibility: hidden;
    }

    label {
      display: block;
      padding: 6px 0;
      border: 1px solid #e9e9e9;
      border-radius: 6px;
      box-sizing: border-box;
      font-weight: bold;
      font-size: 12px;
      line-height: 1.4;
      background-color: #fff;
      text-align: center;
      cursor: pointer;
      webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    input:checked + label {
      background-color: #f1f1f1;
      outline: 1px dotted #000;
      outline: -webkit-focus-ring-color auto 5px;
    }
  `
}

function Custom({ attributes }: any) {
  const { currentValue, index, label, length, event } = attributes

  return (
    <Styled.item length={length}>
      <Styled.box>
        <input type="radio" name={label} id={`${label}${index}`} onChange={event} />
        <label htmlFor={`${label}${index}`}>{currentValue}</label>
      </Styled.box>
    </Styled.item>
  )
}

function Auto({ attributes }: any) {
  const { label, prefix, grade, suffix, index, length, event } = attributes
  console.log('components → common → Choice.tsx → grade: ', grade)

  return (
    <Styled.item length={length}>
      <Styled.box>
        {/* <input type="radio" name={label} id={`${label}${index}`} value={index} checked={grade == index} onChange={event} /> */}
        <input type="radio" name={label} id={`${label}${index}`} value={index} onChange={event} />
        <label htmlFor={`${label}${index}`}>
          {prefix}
          {index}
          {suffix}
        </label>
      </Styled.box>
    </Styled.item>
  )
}

function Grade({ attributes }: Attributes) {
  const { label, prefix, grade, suffix, custom, length, event } = attributes

  const result: any = []

  if (!!custom) {
    if (typeof custom !== 'object') {
      for (let i = 1; i <= custom.length; i++) {
        result.push(
          <Styled.item length={length}>
            <Styled.box>
              <input type="radio" name={label} id={`${label}${i}`} />
              <label htmlFor={`${label}${i}`}>if</label>
            </Styled.box>
          </Styled.item>
        )
      }
    } else {
      return custom.map((currentValue: string, index: number) => {
        return <Custom attributes={{ currentValue: currentValue, index: index, length: length }} key={index} />
      })
    }
  } else {
    for (let i = 1; i <= 12; i++) {
      ;(function (index) {
        result.push(<Auto attributes={{ prefix: prefix, grade: grade, suffix: suffix, index: index, length: length, event: event }} key={index} />)
      })(i)
    }
  }

  return result
}

function Result({ attributes, style }: Attributes) {
  const assignment = useMemo(() => {
    return Object.assign({}, defaultProps.attributes, attributes)
  }, [attributes])

  const { label, prefix, grade, suffix, custom, length, event } = useMemo(() => {
    return assignment
  }, [assignment])

  return (
    <Styled.list style={style}>
      <Grade
        attributes={{
          label: label,
          prefix: prefix,
          grade: grade,
          suffix: suffix,
          custom: custom,
          length: length,
          event: event
        }}
      />
    </Styled.list>
  )
}

const defaultProps = {
  attributes: {}
}

export default Result
