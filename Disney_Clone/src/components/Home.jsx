import React, { useEffect} from 'react';
import styled from "styled-components";
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import { firebaseAuth } from '../utils/firebase-config';
function Home() {

useEffect(() => {
firebaseAuth.collection("movies").onSnapshot((snapshot) => {
 console.log(snapshot)

})
}, [])

  return (
    <Container>
        <ImgSlider />
        <Viewers/>
        <Movies/>
    </Container>

  )
}

export default Home
const Container = styled.main`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vw + 5px);

// &:after {
//   background: url("../src/assets/Images/home-background.png") center center / cover
//     no-repeat fixed;
//   content: "";
//   position: absolute;
//   inset: 0px;
//   opacity: 1;
//   z-index: -1;
// }

&:before {
  background: url("../src/assets/Images/home-background.png") center center / 
  cover no-repeat fixed;
  content: "";
  position: absolute;
  inset: 0px;
  opacity: 1;
  z-index: -1;
}
}


`