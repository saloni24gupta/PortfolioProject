import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
function Header() {
  return (
    <Container>
      <a>
        <img src="../src/assets/logo.svg" alt="logosd" />
      </a>

      <Meenu>
        <a href='#'>Model S</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model X</a>
        <a href='#'>Model Y</a>
      </Meenu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu />
      </RightMenu>

      <BurgetNav>
        <CloseWrapper>
          <CustomClose />
        </CloseWrapper>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cyberruck</a></li>
        <li><a href="#">Roadaster</a></li>
        <li><a href="#">Semi</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
      </BurgetNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
z-index: 1;
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
padding: 0 20px;
justify-content: space-between;
top: 0;
left: 0;
right: 0;
`

const Meenu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;


a {
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: no-wrap;
}

@media(max-width: 760px) {
  display: none;
}
`

const RightMenu = styled.div`
display: flex;
align-items: center;
a{
  font-weight: 600;
  text-transform: uppercase;
  flex-wrap: no-warp;
  margin-right: 10px;
}
`

const CustomMenu = styled(MenuIcon)`
cursor: pointer;
 `

const BurgetNav = styled.div`
 position: fixed;
 top: 0;
 bottom: 0;
 right: 0;
 background: white;
 width: 300px;
 z-index: 16;
 list-style: none;
 padding: 20px;
 display: flex;
 flex-direction: column;
 text-align: start;
// align-items: flex-start;
// justify-content: space-between;

li {
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, .2)
}

a {
  font-weight: 600;
}
 `

const CustomClose = styled(CloseIcon)`
 cursor: pointer;
 `

 const CloseWrapper = styled.div`
 display: flex;
 justify-content: flex-end;

 `