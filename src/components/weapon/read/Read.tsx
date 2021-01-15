import React, { useMemo } from 'react'
// import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import Frame from '@/components/common/frame/Frame'
import Quick from '@/components/common/information/Information'
import Hgroup from '@/components/common/Hgroup'
import Information from '@/components/common/Information'
// import Tax from '@/containers/common/Tax'
// import Tax from '@/components/common/Tax'
// import Smelt from '@/components/common/Smelt'
// import Enchant from '@/components/common/Enchant'

// import { Attributes } from '@/interfaces/padding.interfaces'

interface Attributes {
  [key: string]: any
}

interface State {
  wrapper: any
  group: any
}

interface Props {
  padding: boolean
}

const Styled: State = {
  wrapper: styled.div`
    .list_horizontal > li + li {
      margin-top: 12px;
    }

    .list_horizontal .link_horizontal {
      display: block;
    }

    /* ${(props: Props) => {
      return (
        props.padding &&
        css`
          padding: 12px;
        `
      )
    }} */
  `,
  group: styled.div`
    &:after {
      display: block;
      clear: both;
      content: '';
    }
  `
}

function Result({ location, attributes, style }: Attributes) {
  const assignment = useMemo(() => {
    return Object.assign({}, defaultProps.attributes, attributes)
  }, [attributes])

  // const { loading, error, service, category, list, pagination, grade, padding } = useMemo(() => {
  const { loading, error, service, category, list } = useMemo(() => {
    return assignment
  }, [assignment])

  if (error) {
    if (error.response && error.response.status === 404) {
      console.log('components → weapon → read → Read.tsx → 존재하지 않는 데이터입니다.')

      return <p>components → weapon → read → Read.tsx → 존재하지 않는 데이터입니다.</p>
    }

    console.log('components → weapon → read → Read.tsx → 에러가 발생했어요!')

    return <p>components → weapon → read → Read.tsx → 에러가 발생했어요!</p>
  }

  if (loading || !list) {
    console.log('components → weapon → read → Read.tsx → 읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.')

    return <p>components → weapon → read → Read.tsx → 읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.</p>
  }

  if (!list) {
    console.log('components → weapon → read → Read.tsx → 목록이 존재하지 않습니다.')

    return <p>components → weapon → read → Read.tsx → 목록이 존재하지 않습니다.</p>
  }

  return (
    <Styled.wrapper style={style}>
      <Styled.group>
        <Frame attributes={{ thumbnail: list[0].thumbnail, service: service, category: category, name: list[0].name }} />

        <Quick
          attributes={{
            name: list[0].name,
            power: list[0].power,
            critical: list[0].critical,
            hit: list[0].hit,
            shoot: list[0].shoot,
            speed: list[0].speed
          }}
        />
      </Styled.group>

      <Hgroup attributes={{ level: 4, title: '[CL] Gaia Rifle 정보를 확인할 수 있습니다.', invisible: false }} style={{ padding: '24px 0 0' }} />
      <Information
        location={location}
        attributes={{
          data: list[0]
        }}
        style={{ padding: '12px 0 0' }}
      />
    </Styled.wrapper>
  )
}

const defaultProps = {
  attributes: {}
}

export default React.memo(Result)
