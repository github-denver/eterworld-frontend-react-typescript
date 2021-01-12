import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import Frame from '@/components/common/frame/Frame'
import Information from '@/components/common/information/Information'
import Hgroup from '@/components/common/Hgroup'
import Information2 from '@/components/common/Information'

// import { Attributes } from '@/interfaces/padding.interfaces'

interface Attributes {
  attributes: {
    loading: any
    error: any
    service: any
    category: any
    list: any
    pagination: any
    grade: any
    padding: boolean
  }
}

interface State {
  horizontal: any
}

interface Props {
  padding: boolean
}

const Styled: State = {
  horizontal: styled.div`
    .list_horizontal > li + li {
      margin-top: 12px;
    }

    .list_horizontal .link_horizontal {
      display: block;
    }

    .list_horizontal .link_horizontal:after {
      display: block;
      clear: both;
      content: '';
    }

    .list_horizontal .frame_horizontal {
      float: left;
    }

    /* .list_horizontal .thumbnail_horizontal {
      display: block;
      width: 100%;
      height: 100%;
      background-position: 50% 50%;
      background-repeat: no-repeat;
    } */

    .list_horizontal .thumbnail_horizontal {
      max-width: 100%;
    }

    .list_horizontal .frame_horizontal + .information_horizontal {
      padding-left: 12px;
    }

    .list_horizontal .information_horizontal {
      overflow: hidden;
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

function Result({ attributes }: Attributes) {
  const assignment = useMemo(() => {
    return Object.assign({}, defaultProps.attributes, attributes)
  }, [attributes])

  const { loading, error, service, category, list, pagination, grade, padding } = useMemo(() => {
    return assignment
  }, [assignment])

  if (error) {
    if (error.response && error.response.status === 404) {
      console.log('존재하지 않는 데이터입니다.')

      return <p>존재하지 않는 데이터입니다.</p>
    }

    console.log('에러가 발생했어요!')

    return <p>에러가 발생했어요!</p>
  }

  if (loading || !list) {
    console.log('읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.')

    return <p>읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.</p>
  }

  if (!list) {
    console.log('목록이 존재하지 않습니다.')

    return <p>목록이 존재하지 않습니다.</p>
  }

  return (
    <Styled.horizontal padding={padding}>
      <Frame attributes={{ thumbnail: list[0].thumbnail, service: service, category: category, name: list[0].name }} />

      <Information
        attributes={{
          name: list[0].name,
          power: list[0].power,
          critical: list[0].critical,
          hit: list[0].hit,
          shoot: list[0].shoot,
          speed: list[0].speed
        }}
      />

      <Hgroup attributes={{ level: 4, title: '[CL] Gaia Rifle 정보를 확인할 수 있습니다.', invisible: false }} />
      <Information2 attributes={{ data: list }} />
    </Styled.horizontal>
  )
}

const defaultProps = {
  attributes: {
    padding: false
  }
}

export default Result
