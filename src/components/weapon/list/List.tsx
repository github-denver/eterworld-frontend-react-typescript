import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import Frame from '@/components/common/frame/Frame'
import Detail from '@/components/common/detail/Detail'

// import { Attributes } from '@/interfaces/padding.interfaces'

interface Attributes {
  [key: string]: any
}

interface State {
  wrapper: any
  list: any
  item: any
  link: any
}

interface Props {
  padding: boolean
}

const Styled: State = {
  wrapper: styled.div`
    /* ${(props: Props) => {
      return (
        props.padding &&
        css`
          padding: 12px;
        `
      )
    }} */
  `,
  list: styled.ul``,
  item: styled.li`
    & + & {
      margin-top: 12px;
    }
  `,
  link: styled(Link)`
    display: block;

    &:after {
      display: block;
      clear: both;
      content: '';
    }
  `
}

function Result({ attributes, style }: Attributes) {
  const assignment = useMemo(() => {
    return Object.assign({}, defaultProps.attributes, attributes)
  }, [attributes])

  // const { loading, error, service, category, list, pagination, grade, padding } = useMemo(() => {
  const { loading, error, service, category, list, grade } = useMemo(() => {
    return assignment
  }, [assignment])

  if (error) {
    if (error.response && error.response.status === 404) {
      console.log('components → weapon → list → List.tsx → 존재하지 않는 데이터입니다.')

      return <p>components → weapon → list → List.tsx → 존재하지 않는 데이터입니다.</p>
    }

    console.log('components → weapon → list → List.tsx → 에러가 발생했어요!')

    return <p>components → weapon → list → List.tsx → 에러가 발생했어요!</p>
  }

  if (loading || !list) {
    console.log('components → weapon → list → List.tsx → 읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.')

    return <p>components → weapon → list → List.tsx → 읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.</p>
  }

  if (!list) {
    console.log('components → weapon → list → List.tsx → 목록이 존재하지 않습니다.')

    return <p>components → weapon → list → List.tsx → 목록이 존재하지 않습니다.</p>
  }

  return (
    <Styled.wrapper style={style}>
      <Styled.list>
        {list.map((currentValue: any, index: number) => {
          return (
            <Styled.item key={currentValue.number}>
              <Styled.link to={`/eternalcity/${service}/${category}/read/${currentValue.number}?grade=${grade}`}>
                <Frame attributes={{ thumbnail: currentValue.thumbnail, service: service, category: category, name: currentValue.name }} />

                <Detail
                  attributes={{
                    name: currentValue.name,
                    power: currentValue.power,
                    critical: currentValue.critical,
                    hit: currentValue.hit,
                    shoot: currentValue.shoot,
                    speed: currentValue.speed
                  }}
                />
              </Styled.link>
            </Styled.item>
          )
        })}
      </Styled.list>
    </Styled.wrapper>
  )
}

const defaultProps = {
  attributes: {
    padding: false
  }
}

export default Result
