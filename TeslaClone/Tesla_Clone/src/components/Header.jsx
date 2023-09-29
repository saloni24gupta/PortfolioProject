import React from 'react'
import styled from 'styled-components'
function Header() {
  return (
    <Container>
      <a>
        <img src="../src/assets/logo.svg" alt="logosd" />
      </a>

      <Menu>


      </Menu>
    </Container>
  )
}

export default Header

const Container = styled.div`
min-height: 60px;
position: fixed;
`

const Menu = styled.div``