import React from 'react';
import styled from "styled-components";
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
function Home() {
  return (
    <Container>
        <ImgSlider />
        <Viewers/>
    </Container>

  )
}

export default Home

const Container = styled.main`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
// width: calc(100vh - 10vw);

position: fixed;

&:before {
  background: url("../src/assets/Images/home-background.png") center center / cover no-repeat fixed;
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}


`