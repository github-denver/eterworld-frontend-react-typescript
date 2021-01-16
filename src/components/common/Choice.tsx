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
  size: number
}

const Styled: State = {
  list: styled.ul`
    margin: -10px 0 0 -10px;
    font-size: 0;
  `,
  item: styled.li`
    display: inline-block;
    width: ${(props: Props) => (props.size ? 100 / props.size + '%' : '33.33%')};
    padding: 10px 0 0 10px;
    box-sizing: border-box;
    vertical-align: top;

    /* ${(props: Props) => {
      return props.size && css``
    }} */
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

const Manual = React.memo(function Tax({ attributes }: any) {
  const { currentValue, index, label, name, onChange, sequence } = attributes

  return (
    <Styled.item>
      <Styled.box>
        <input
          type="radio"
          name={!!name ? name : label}
          id={`${label}${index}`}
          defaultValue={!!sequence ? currentValue.sequence : currentValue.rate}
          defaultChecked={currentValue.checked}
          onChange={onChange}
        />
        <label htmlFor={`${label}${index}`}>{currentValue.text}</label>
      </Styled.box>
    </Styled.item>
  )
})

const Auto = React.memo(function Auto({ attributes }: any) {
  const { label, name, prefix, grade, suffix, size, checked, onChange, index } = attributes

  return (
    <Styled.item size={size}>
      <Styled.box>
        <input
          type="radio"
          name={!!name ? name : label}
          id={`${label}${index}`}
          defaultValue={index}
          defaultChecked={!!checked && grade === index}
          onChange={onChange}
        />
        <label htmlFor={`${label}${index}`}>
          {prefix}
          {index}
          {suffix}
        </label>
      </Styled.box>
    </Styled.item>
  )
})

const Item = React.memo(function Item({ attributes }: Attributes) {
  const { data, label, name, prefix, grade, suffix, start, end, size, checked, onChange, sequence } = attributes

  const result: any = []

  if (!!data) {
    return data.map((currentValue: string, index: number) => {
      return <Manual attributes={{ currentValue, index, label, name, onChange, sequence }} key={index} />
    })
  } else {
    for (let i = start; i <= end; i++) {
      ;(function (index) {
        result.push(
          <Auto
            attributes={{
              label,
              name,
              prefix,
              grade,
              suffix,
              size,
              checked,
              onChange,
              index
            }}
            key={index}
          />
        )
      })(i)
    }
  }

  return result
})

function Result({ attributes, style }: Attributes) {
  const assignment = useMemo(() => {
    return Object.assign({}, defaultProps.attributes, attributes)
  }, [attributes])

  const { data, label, name, prefix, grade, suffix, start, end, size, checked, onChange, sequence } = useMemo(() => {
    return assignment
  }, [assignment])

  return (
    <Styled.list style={style}>
      <Item
        attributes={{
          data,
          label,
          name,
          prefix,
          grade,
          suffix,
          start,
          end,
          size,
          checked,
          onChange,
          sequence
        }}
      />
    </Styled.list>
  )
}

const defaultProps = {
  attributes: {
    sequence: false
  }
}

export default React.memo(Result)
