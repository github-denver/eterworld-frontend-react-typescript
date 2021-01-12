import React, { useMemo } from 'react'
import styled from 'styled-components'

const Frame = styled.span`
  display: inline-block;
  width: 100px;
  height: 100px;
  padding: 6px;
  border-radius: 12px;
  box-sizing: border-box;
  font-size: 1px;
  color: transparent;
  background-color: #5f79aa;
  background-repeat: no-repeat;
  background-size: cover;

  .outer_cell {
    height: 100%;
    margin: 0 auto;
  }

  & + .information_horizontal {
    padding-left: 12px;
  }
`

interface Attributes {
  attributes: {
    thumbnail: any
    service: any
    category: any
    name: any
  }
}

function Result({ attributes }: Attributes) {
  const assignment = useMemo(() => {
    return Object.assign({}, defaultProps.attributes, attributes)
  }, [attributes])

  const { thumbnail, service, category, name } = useMemo(() => {
    return assignment
  }, [assignment])

  return (
    <>
      <Frame className="frame_horizontal">
        <div className="outer_cell">
          <div className="inner_cell">
            <img
              src={`http://localhost:3000/eternalcity/images/${service}/${category}/${encodeURIComponent(thumbnail)}`}
              alt={`${name}`}
              className="thumbnail_horizontal"
            />
          </div>
        </div>
      </Frame>
    </>
  )
}

const defaultProps = {
  attributes: {
    thumbnail: ''
  }
}

export default Result
