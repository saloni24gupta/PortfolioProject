import React from 'react'
import styled from "styled-components"
function Header() {
  return (
    < Nav>
        <Logo src="../src/assets/Images/logo.svg"/>
        <NavMenu>
           <a>
            <img src="../src/assets/Images/home-icon.svg" alt="home-icon" />
            <span>HOME</span>
           </a>
           <a>
            <img src="../src/assets/Images/search-icon.svg" alt="home-icon" />
            <span>SEARCH</span>
           </a>
           <a>
            <img src="../src/assets/Images/watchlist-icon.svg" alt="home-icon" />
            <span>WATCHLIST</span>
           </a>
           <a>
            <img src="../src/assets/Images/original-icon.svg" alt="home-icon" />
            <span>ORIGINALS</span>
           </a>
           <a>
            <img src="../src/assets/Images/movie-icon.svg" alt="home-icon" />
            <span>MOVIES</span>
           </a>
           <a>
            <img src="../src/assets/Images/series-icon.svg" alt="home-icon" />
            <span>SERIES</span>
           </a>
        </NavMenu>

        <UserImg src="../src/assets/Images/Img.jpg"/>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
height: 70px;
background: #090b13;
display: flex;
align-items: center;
padding: 0 30px;
justify-content: space-between;
`
const Logo = styled.img`
width: 80px;
`
const NavMenu = styled.div`
display: flex;
flex: 1;
margin-left: 25px;
align-items: center;
a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
        height: 20px;
    }

    span {
        font-size: 13px;
        letter-spacing: 1.42px;
    }
}
`
const UserImg = styled.img`
height: 50px;
width: 50px;
border-radius: 50%; 
`
