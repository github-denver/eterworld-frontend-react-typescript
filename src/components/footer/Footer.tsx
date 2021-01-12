import React from 'react'
import styled from 'styled-components'

interface State {
  footer: Function
}

const Styled: State = {
  footer: styled.footer``
}

function Footer() {
  return <Styled.footer></Styled.footer>
}

export default React.memo(Footer)
