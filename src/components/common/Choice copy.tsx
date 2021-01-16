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
    width: ${(props: Props) => (props.length ? 100 / props.length + '%' : '33.33%')};
    padding: 10px 0 0 10px;
    box-sizing: border-box;
    vertical-align: top;
    /* ${(props: Props) => {
      return props.length && css``
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

const Custom = React.memo(function Custom({ attributes }: any) {
  const { currentValue, index, label, length, value, checked, event } = attributes

  return (
    <Styled.item length={length}>
      <Styled.box>
        <input
          type="radio"
          name={label}
          id={`${label}${index}`}
          defaultValue={!!value && value.rate}
          defaultChecked={!!checked && value.checked}
          onChange={event}
        />
        <label htmlFor={`${label}${index}`}>{currentValue}?</label>
      </Styled.box>
    </Styled.item>
  )
})

const Auto = React.memo(function Auto({ attributes }: any) {
  const { label, prefix, grade, suffix, index, length, checked, event } = attributes

  return (
    <Styled.item length={length}>
      <Styled.box>
        <input type="radio" name={label} id={`${label}${index}`} value={index} defaultChecked={!!checked && grade === index} onChange={event} />
        <label htmlFor={`${label}${index}`}>
          {prefix}/{index}/{suffix}
        </label>
      </Styled.box>
    </Styled.item>
  )
})

const Upgrade = React.memo(function Upgrade({ attributes }: any) {
  const { currentValue, index, label, event } = attributes

  return (
    <Styled.item>
      <Styled.box>
        <input
          type="radio"
          name={label}
          id={`${label}${index}`}
          defaultValue={currentValue.rate}
          defaultChecked={currentValue.checked}
          // onChange={(e) => event(label, e)}
          onChange={event}
        />
        <label htmlFor={`${label}${index}`}>{currentValue.text}?</label>
      </Styled.box>
    </Styled.item>
  )
})

const Tax = React.memo(function Tax({ attributes }: any) {
  const { currentValue, index, label, event } = attributes

  return (
    <Styled.item>
      <Styled.box>
        <input type="radio" name={label} id={`${label}${index}`} defaultValue={currentValue.rate} defaultChecked={currentValue.checked} onChange={event} />
        <label htmlFor={`${label}${index}`}>{currentValue.text}?</label>
      </Styled.box>
    </Styled.item>
  )
})

const Enchant = React.memo(function Enchant({ attributes }: any) {
  const { currentValue, index, label, event, normal } = attributes

  return (
    <Styled.item>
      <Styled.box>
        <input
          type="radio"
          name={label}
          id={`${label}${index}`}
          defaultValue={index}
          onChange={(e) => {
            return event(normal, e.target.value)
          }}
        />
        <label htmlFor={`${label}${index}`}>{currentValue.text}?</label>
      </Styled.box>
    </Styled.item>
  )
})

const Grade = React.memo(function Grade({ attributes }: Attributes) {
  const { type, label, prefix, grade, suffix, custom, value, length, checked, event, data, normal } = attributes

  const result: any = []

  if (type === 'upgrade') {
    return data.map((currentValue: string, index: number) => {
      return <Upgrade attributes={{ currentValue: currentValue, index: index, label: label, data: data, event: event }} key={index} />
    })
  }

  if (type === 'tax') {
    return data.map((currentValue: string, index: number) => {
      return <Tax attributes={{ currentValue: currentValue, index: index, label: label, data: data, event: event }} key={index} />
    })
  }

  if (type === 'enchant') {
    return data.map((currentValue: string, index: number) => {
      return <Enchant attributes={{ currentValue: currentValue, index: index, label: label, event: event, normal: normal }} key={index} />
    })
  }

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
        if (!!value) {
          return (
            <Custom attributes={{ currentValue: currentValue, index: index, label: label, length: length, value: value[index], event: event }} key={index} />
          )
        } else {
          return <Custom attributes={{ currentValue: currentValue, index: index, label: label, length: length, event: event }} key={index} />
        }
      })
    }
  } else {
    for (let i = 1; i <= 12; i++) {
      ;(function (index) {
        result.push(
          <Auto
            attributes={{ label: label, prefix: prefix, grade: grade, suffix: suffix, index: index, length: length, checked: checked, event: event }}
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

  const { type, label, prefix, grade, suffix, custom, value, length, checked, data, normal, event } = useMemo(() => {
    return assignment
  }, [assignment])

  return (
    <Styled.list style={style}>
      <Grade
        attributes={{
          type: type,
          label: label,
          prefix: prefix,
          grade: grade,
          suffix: suffix,
          custom: custom,
          value: value,
          length: length,
          checked: checked,
          data: data,
          normal: normal,
          event: event
        }}
      />
    </Styled.list>
  )
}

const defaultProps = {
  attributes: {}
}

export default React.memo(Result)
