import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'

import Frame from '@/components/common/frame/Frame'
import Detail from '@/components/common/detail/Detail'
import Hgroup from '@/components/common/Hgroup'
import Information from '@/components/common/Information'

interface Attributes {
  [key: string]: any
}

interface State {
  wrapper: any
  group: any
}

interface Props {
  styles: boolean
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
      return props.styles && css``
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

  // const { loading, error, service, category, read, grade } = useMemo(() => {
  const { loading, error, service, category, read } = useMemo(() => {
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

  if (loading || !read) {
    console.log('components → weapon → read → Read.tsx → 읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.')

    return <p>components → weapon → read → Read.tsx → 읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.</p>
  }

  if (!read) {
    console.log('components → weapon → read → Read.tsx → 목록이 존재하지 않습니다.')

    return <p>components → weapon → read → Read.tsx → 목록이 존재하지 않습니다.</p>
  }

  return (
    <Styled.wrapper style={style}>
      <Styled.group>
        <Frame attributes={{ thumbnail: read.thumbnail, service: service, category: category, name: read.name }} />

        <Detail
          attributes={{
            name: read.name,
            power: read.power,
            critical: read.critical,
            hit: read.hit,
            shoot: read.shoot,
            speed: read.speed
          }}
        />
      </Styled.group>

      <Hgroup attributes={{ level: 4, title: '[CL] Gaia Rifle 정보를 확인할 수 있습니다.', invisible: false }} style={{ padding: '24px 0 0' }} />
      <Information
        location={location}
        attributes={{
          data: read
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
