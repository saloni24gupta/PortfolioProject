import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
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
        <Wrap>
            <img src="../src/assets/Images/slider-badging.jpg" alt="" />
        </Wrap>

        <Wrap>
            <img src="../src/assets/Images/slider-badging.jpg" alt="" />
        </Wrap>

        <Wrap>
            <img src="../src/assets/Images/slider-badging.jpg" alt="" />
        </Wrap>
        <Wrap>
            <img src="../src/assets/Images/slider-badging.jpg" alt="" />
        </Wrap>
        <Wrap>
            <img src="../src/assets/Images/slider-badging.jpg" alt="" />
        </Wrap>
        <Wrap>
            <img src="../src/assets/Images/slider-badging.jpg" alt="" />
        </Wrap>

     </Carousel>
  )
}

export default ImgSlider

const Carousel = styled.div`
display: flex;
flex-direction: row;
;`

const Wrap = styled.div`
// background-position: center center cover`