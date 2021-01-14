import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import Frame from '@/components/common/frame/Frame'
import Information from '@/components/common/information/Information'

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

    .list_horizontal .frame {
      float: left;
    }

    /* .list_horizontal .thumbnail {
      display: block;
      width: 100%;
      height: 100%;
      background-position: 50% 50%;
      background-repeat: no-repeat;
    } */

    .list_horizontal .thumbnail {
      max-width: 100%;
    }

    .list_horizontal .frame + .information_horizontal {
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
      <ul className="list_horizontal">
        {list.map((currentValue: any, index: number) => {
          return (
            <li key={currentValue.number}>
              <Link to={`/eternalcity/weapon/melee/read/${currentValue.number}?grade=${grade}`} className="link_horizontal">
                <Frame attributes={{ thumbnail: currentValue.thumbnail, service: service, category: category, name: currentValue.name }} />

                <Information
                  attributes={{
                    name: currentValue.name,
                    power: currentValue.power,
                    critical: currentValue.critical,
                    hit: currentValue.hit,
                    shoot: currentValue.shoot,
                    speed: currentValue.speed
                  }}
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </Styled.horizontal>
  )
}

const defaultProps = {
  attributes: {
    padding: false
  }
}

export default Result
