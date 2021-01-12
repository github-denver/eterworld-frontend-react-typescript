import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'

import { Attributes } from '@/interfaces/attribute.interfaces'

interface State {
  attribute: any
}

interface Props {
  padding: boolean
}

const Styled: State = {
  attribute: styled.div`
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

function Result({ attributes, children }: Attributes) {
  const assignment = useMemo(() => {
    return Object.assign({}, defaultProps.attributes, attributes)
  }, [attributes])

  const { title, padding } = useMemo(() => {
    return assignment
  }, [assignment])

  return (
    <Styled.attribute padding={padding}>
      <ul className="list_attribute">
        <li>
          <strong className="title_attribute">
            <div className="outer_cell">
              <div className="inner_cell">{title}</div>
            </div>
          </strong>

          <div className="contents_attribute">{children}</div>
        </li>
      </ul>
    </Styled.attribute>
  )
}

const defaultProps = {
  attributes: {
    padding: false
  }
}

export default Result
