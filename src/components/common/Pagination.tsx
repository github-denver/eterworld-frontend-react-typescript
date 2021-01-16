import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface State {
  pagination: Function
}

const Styled: State = {
  pagination: styled.ul`
    font-size: 0;
    text-align: center;

    li {
      display: inline-block;
    }

    li + li {
      margin-left: 12px;
    }

    .link_pagination {
      display: block;
      position: relative;
      min-width: 32px;
      padding: 8px 4px;
      border-radius: 6px;
      box-sizing: border-box;
      font-size: 14px;
      line-height: 1;
    }

    .link_pagination:before {
      display: none;
      position: absolute;
      right: 4px;
      bottom: 0;
      left: 4px;
      z-index: -1;
      height: 4px;
      background-color: #d9b9a7;
      content: '';
    }

    .link_pagination.current {
      font-weight: bold;
    }

    .link_pagination.current:before {
      display: block;
    }

    /* .link_pagination.current {
      font-weight: bold;
      color: #fff;
      border: 1px solid #4f5952;
      background-color: #4f5952;
    } */
  `
}

function Result() {
  return (
    <Styled.pagination>
      <li>
        <Link to="/" className="link_pagination current">
          1
        </Link>
      </li>
      <li>
        <Link to="/" className="link_pagination">
          2
        </Link>
      </li>
    </Styled.pagination>
  )
}

export default Result
