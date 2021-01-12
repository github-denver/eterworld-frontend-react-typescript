import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'

import { Attributes, hn } from '@/interfaces/hgroup.interfaces'

interface State {
  heading: any
}

interface Props {
  invisible: boolean
}

const Styled: State = {
  heading: styled.div`
    ${(props: Props) => {
      return props.invisible && css``
    }}
  `
}

const Heading = React.memo(function Heading({ attributes, children }: Attributes) {
  const { level, title } = attributes

  const Tag = `h${level}` as hn

  return <Tag>{title}</Tag>
})

function Hgroup({ attributes, stlyes }: Attributes) {
  const assignment = useMemo(() => {
    return Object.assign({}, defaultProps.attributes, attributes)
  }, [attributes])

  const { level, title, invisible } = useMemo(() => {
    return assignment
  }, [assignment])

  return (
    <Styled.heading className={!!invisible && 'invisible'} style={stlyes}>
      <Heading attributes={{ level: level, title: title }} />
    </Styled.heading>
  )
}

const defaultProps = {
  attributes: {
    level: 2,
    invisible: true
  }
}

export default React.memo(Hgroup)
