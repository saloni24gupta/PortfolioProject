import React from 'react'
import styled from 'styled-components';

const Login = () => {

    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="../src/assets/Images/cta-logo-one.svg" />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.

                    </Description>
                    <CTALogoTwo src="../src/assets/Images/cta-logo-two.png" />


                </CTA>

            </Content>
        </Container>
    )
}
const Container = styled.section`
position: relative;
height: calc(100vh);
display: flex;
align-items: top;
justify-content: center;

&:before {
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background: url("../src/assets/Images/login-background.jpg");
  content: "";
   position: absolute;
   inset: 0;
   opacity: 0.8;
   z-index: -1;
} 
`;
const Content = styled.div`
  
`;

const CTA = styled.div`
    max-width:650px;
    padding: 80px 40px;
    width: 70vw;
    display: flex;
    flex-direction: column;
   margin-top: 100px;
   align-items: center;
  
`
const CTALogoOne = styled.img`

`

const SignUp = styled.a`
width: 100%;
background-color: #0063e5;
font-weight: bold;
padding: 17px 0;
color :#f9f9f9;
border-radius: 4px;
text-align: center;
font-size: 18px;
cursor: pointer;
transition: all 250ms;
letter-spacing: 1.5px;
margin-top: 8px;
margin-bottom: 12px;
&:hover {
    background: #0483ee;
}

`
const Description = styled.p
    `font-size: 13px;
letter-spacing: 1.5px;
text-align: center;
line-height: 1.5;
`

const CTALogoTwo = styled.img`
width: 90%;
`
export default Login;