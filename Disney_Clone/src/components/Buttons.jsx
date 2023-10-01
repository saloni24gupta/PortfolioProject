import React from 'react'
import styled from 'styled-components'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Buttons() {
    return (
        <Button>
            <ButtonGp>
                <ArrowBackIosIcon />
            </ButtonGp>

            <ButtonGp>
                <ArrowForwardIosIcon />
            </ButtonGp>
        </Button>
    )
}

export default Buttons

const Button = styled.div`
           background: transparent;
           border: none; 
           cursor: pointer;
           justify-content: space-between; 
           position: relative;
           &:before {
            position: absolute;
            t
           }
            `

const ButtonGp = styled.button`
            display: flex;
            position: absolute;
            top: 50%;
            left: 0px;
            background: #fff;
            opacity: 0.5;
            height: 30px;
            width: 30px;
            border-radius: 50px;
            justify-content: space-between;
            `

