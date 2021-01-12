import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'

// import { Attributes } from '@/interfaces/padding.interfaces'

interface Attributes {
  [key: string]: any
}

interface State {
  choice: any
}

interface Props {
  padding: boolean
}

const Styled: State = {
  choice: styled.ul`
    margin: -10px 0 0 -10px;
    font-size: 0;

    li {
      display: inline-block;
      width: 25%;
      padding: 10px 0 0 10px;
      box-sizing: border-box;
      vertical-align: top;
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

function Custom({ attributes }: any) {
  const { currentValue, index, event } = attributes

  return (
    <li>
      <span className="box_choice">
        <input type="radio" name="grade" id={`grade${index}`} className="input_choice" onChange={event} />
        <label htmlFor={`grade${index}`} className="label_choice">
          {currentValue}
        </label>
      </span>
    </li>
  )
}

function Auto({ attributes }: any) {
  const { prefix, grade, suffix, index, event } = attributes

  return (
    <li>
      <span className="box_choice">
        <input type="radio" name="grade" id={`grade${index}`} className="input_choice" value={index} checked={grade == index} onChange={event} />
        <label htmlFor={`grade${index}`} className="label_choice">
          {prefix}
          {index}
          {suffix}
        </label>
      </span>
    </li>
  )
}

function Grade({ attributes }: Attributes) {
  const { prefix, grade, suffix, custom, event } = attributes

  const result: any = []

  if (!!custom) {
    if (typeof custom !== 'object') {
      for (let i = 1; i <= custom.length; i++) {
        result.push(
          <li>
            <span className="box_choice">
              <input type="radio" name="grade" id={`grade${i}`} className="input_choice" />
              <label htmlFor={`grade${i}`} className="label_choice">
                if
              </label>
            </span>
          </li>
        )
      }
    } else {
      return custom.map((currentValue: string, index: number) => {
        return <Custom attributes={{ currentValue: currentValue, index: index }} key={index} />
      })
    }
  } else {
    for (let i = 1; i <= 12; i++) {
      ;(function (index) {
        result.push(<Auto attributes={{ prefix: prefix, grade: grade, suffix: suffix, index: index, event: event }} key={index} />)
      })(i)
    }
  }

  return result
}

function Result({ attributes, stlyes }: Attributes) {
  const assignment = useMemo(() => {
    return Object.assign({}, defaultProps.attributes, attributes)
  }, [attributes])

  const { prefix, grade, suffix, custom, event } = useMemo(() => {
    return assignment
  }, [assignment])

  return (
    <Styled.choice style={stlyes}>
      <Grade
        attributes={{
          prefix: prefix,
          grade: grade,
          suffix: suffix,
          custom: custom,
          event: event
        }}
      />
    </Styled.choice>
  )
}

const defaultProps = {
  attributes: {}
}

export default Result
