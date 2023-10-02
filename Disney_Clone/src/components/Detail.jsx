import React from 'react'
import styled from 'styled-components'
function Detail() {
  return (
    <Container>
      <Background>
        <img src="../src/assets/Images/bao-1.jpg" alt="" />
      </Background>
      <ImageTitle>
        <img src="../src/assets/Images/bao-title.png" alt="" />
      </ImageTitle>

    </Container>
  )
}

export default Detail

const Container = styled.div`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;

`

const Background = styled.div`
positin: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: -1;
opacity: 0.8;
img {
  height: 100vh;
  width: 100vw;
  object-fit: cover;
}
`


const ImageTitle = styled.div`
height: 30vh;
img {
  
}
`