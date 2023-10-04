import React from 'react'
import styled from 'styled-components'
function Detail() {
  return (
    <Container>
      <Background>
        <img src="../src/assets/Images/bao-1.jpg" alt="" />
      </Background>
      <ImageTitle>
        <img src="../src/assets/Images/bao-title (1).png" alt="" />
      </ImageTitle>

      <Controls>
        <PlayButton>
          <img src="../src/assets/Images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="../src/assets/Images/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton >
          <span>+</span>
        </AddButton>

        <GroupWatchbutton >
          <img src="../src/assets/Images/group-icon.png" alt="" />
        </GroupWatchbutton>

      </Controls>

      <SubTitle>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia repudiandae labore officiis laudantium ullam maiores minima earum maxime commodi quaerat! 
      </SubTitle>

      <Description>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, unde! Facere labore blanditiis deleniti deserunt dolores, soluta molestiae, nulla est dolorem accusamus nemo magnam dicta enim facilis et fugiat ullam. Iusto rerum optio magni ex dolorum quibusdam tenetur dignissimos sequi!
      </Description>

    </Container>
  )
}

export default Detail

const Container = styled.div`
min-height: calc(100vh - 70px);
// padding: 0 calc(3.5vw + 5px);
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
  color: white;
}
`


const ImageTitle = styled.div`
position: absolute;
top: 12vh;
display: flex;
height: 30vh;
min-height: 170px;
width: 35vw;
min-width: 200px; 
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


`

const Controls = styled.div`
align-items: center;
position: absolute;
top: 50vh;
padding: 0 3.5vw;
display: flex;
`

const PlayButton = styled.button`
display: flex;
align-items: center;
border-radius: 4px;
font-size: 15px;
margin-right: 22px;
padding: 0 24px;
letter-spacing: 2px;
cursor: pointer;
height: 56px;
background: rgb(249, 249, 249);
border: none;

&:hover {
  background: rgb(198, 198, 198);
}
`

const TrailerButton = styled(PlayButton)`
background: rgb(0, 0, 0, 0.3);
border: 1px solid rgb(249, 249, 249);
color: rgb(249, 249, 249);
text-transform: uppercase;
`

const AddButton = styled.button`
margin-right: 16px;
width: 44px;
height: 44px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content:center;
border: white;
background: rgba(0, 0, 0, 0.6);
cursor: pointer;

span {
  font-size: 30px;
  color: white;
}
`

const GroupWatchbutton = styled(AddButton)`
background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
position: absolute;
top: 62vh;
color: rgb(249, 249, 249);
font-size: 15px;
padding: 3.5vw;
 min-height: 20px;
margin-top: 26px;
`
const Description = styled.div`
position: absolute;
top: 64vh;
padding: 0 3.5vw;
max-width: 500px;
line-height: 1.4;
// font-size: 20px;
// margin-top: 16px;
color: rgb(249, 249, 249);
`