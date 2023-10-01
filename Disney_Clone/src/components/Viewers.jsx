import React from 'react'
import styled from "styled-components"
function Viewers() {
  return (
    <Container>
       <Wrap>
            <img src="../src/assets/Images/viewers-disney.png" alt="" />
        </Wrap>
        <Wrap>
            <img src="../src/assets/Images/viewers-disney.png" alt="" />
        </Wrap>
        <Wrap>
            <img src="../src/assets/Images/viewers-disney.png" alt="" />
        </Wrap>
        <Wrap>
            <img src="../src/assets/Images/viewers-disney.png" alt="" />
        </Wrap>
        <Wrap>
            <img src="../src/assets/Images/viewers-disney.png" alt="" />
        </Wrap>
    </Container>
  )
}

export default Viewers

const Container = styled.div`
margin-top: 30px;
display: grid;

`

const Wrap = styled.div`


`