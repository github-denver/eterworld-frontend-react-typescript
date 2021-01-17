import React, { useMemo } from 'react'
import styled from 'styled-components'

const Frame = styled.span`
  float: left;
  width: 100px;
  height: 100px;
  padding: 6px;
  border-radius: 12px;
  box-sizing: border-box;
  font-size: 1px;
  color: transparent;
  background-color: #5f79aa;
  /* background-color: #708c8c; */
  background-repeat: no-repeat;
  background-size: cover;

  .outer_cell {
    height: 100%;
    margin: 0 auto;
  }

  img {
    max-width: 100%;
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
      <Frame>
        <div className="outer_cell">
          <div className="inner_cell">
            <img src={`http://localhost:3000/eternalcity/images/${service}/${category}/${encodeURIComponent(thumbnail)}`} alt={`${name}`} />
          </div>
        </div>
      </Frame>
    </>
  )
}

const defaultProps = {
  attributes: {}
}

export default Result
