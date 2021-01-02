import React from 'react'
import { Link } from 'react-router-dom'

// import styled from 'styled-components'

// const Pagination = styled.div``

function Result() {
  return (
    <>
      <ul className="list_pagination">
        <li>
          <Link to="/beluga/notice/list/1" className="link_pagination current">
            1
          </Link>
        </li>
        <li>
          <Link to="/beluga/notice/list/2" className="link_pagination">
            2
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Result
