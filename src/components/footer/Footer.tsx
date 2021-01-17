import React from 'react'
import styled from 'styled-components'

interface State {
  footer: Function
}

const Styled: State = {
  footer: styled.footer`
    border-top: 1px solid #e9e9e9;
    padding: 24px 0;
    font-size: 11px;
    text-align: center;
  `
}

function Footer() {
  return (
    <Styled.footer>
      <p>
        이 사이트는 개인 포트폴리오 사이트입니다.
        <br />
        이터널시티 게임사와 사이트 개발자는 어떠한 관계도 없습니다.
      </p>
    </Styled.footer>
  )
}

export default React.memo(Footer)
