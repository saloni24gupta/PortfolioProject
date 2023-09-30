import React from 'react'
import styled from "styled-components"
import  Fade  from 'react-reveal/Fade'
function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
    // function Section(props) {

    return (
        <Wrap bgimage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>

                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>

                    {rightBtnText &&
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }

                </ButtonGroup>
                <DownArrow src="../src/assets/down-arrow.svg"></DownArrow>
                </Fade>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
z-index: 10;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100vw;
height: 100vh;
background: orange;

background-size:  cover;
background-position: center;
background-repeat: no-repeat;
background-image: ${props => `url("../src/assets/${props.bgimage}")`}
`
// // background-imae: surl("../src/assets/model-s.jpgs");
const ItemText = styled.div`
padding-top: 15vh;
text-align: center;

`

const ButtonGroup = styled.div
    `
   margin-bottom: 30px;
   display: flex;
   @media (max-width: 768px) {
      flex-direction:column;
}
`

const LeftButton = styled.div`
background-color: rgba(23, 36, 32, 0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin: 8px;
`

const RightButton = styled(LeftButton)`
background: white;
color: black;
opacity: 0.65;
`

const DownArrow = styled.img`
height: 40px;
overflow-x: hidden;
animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`