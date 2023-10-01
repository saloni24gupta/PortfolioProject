import React from 'react'
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

// import Buttons from './Buttons';
function ImgSlider() {
    // let settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true
    // };
    return (
        <Carousel>
            <Container>
            <Wrap >
                <img src="../src/assets/Images/slider-badag.jpg" alt="hjgjghjg" />
            </Wrap>
            
          
        </Container>
        </Carousel>
    )
}

export default ImgSlider

const Container = styled.div`

margin: auto;
`

const Carousel = styled.div`
display: flex;
flex-direction: row;
overflow: visible;
// background-Image: url("../src/assets/Images/slider-scales.jpg");
background-position: center center; 
background-size: cover;
background-repeat: no-repeat;
position: relative;

width: 100vw;
height: 250px;


&:before {
    content: "";
    cursor: pointer;
    z-index: 1;
    top: 45%;
    background-color: transparent;
    opacity: 0.5;
    color: black;
    position: absolute;
    left: 38px;
    background-Image: url("./src/assets/Images/right-arrow.png");
    transform: rotate(180deg);
    background-position: center center;
    background-size: cover;
    height: 30px;
    width: 30px;
    border-radius: 50%;
}

&:after {
    content: "";
    z-index: 1;
    right: 38px;
    top: 45%;
    opacity: 0.5;
    background-color: none;
    color: blue;
    position: absolute;
    background-Image: url("./src/assets/Images/right-arrow.png");
    background-position: center center;
    background-size: cover;
    height: 30px;
    width: 30px;
    cursor: pointer;
    border-radius: 50%;
}
`

const Wrap = styled.div
`
cursor: pointer;
width: calc(100vw - 10vw);
background-position: center center 
background-size: cover;
background-repeat: no-repeat;
img {
    width: 89vw;
    height: 36vh;
    border-radius: 5px;
    border: 4px solid transparent;
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
}

&:hover {
    border: 4px solid rgba(249, 249, 249, 0.8)
}


`


