import React from 'react'
import styled from "styled-components"
import Section from './Section'
function Home() {
  return (
    <Container>
        <Section 
          title="Model S"
          description="Order Online For Touchless Delivery"
          backgroundImg="../assets/model-s.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventor"
   />
        <Section       
          title="Model Y"
          description="Order Online For Touchless Delivery"
          backgroundImg="../assets/model-y.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventor" 
        />
        
        <Section 
                title="Model 3"
                description="Order Online For Touchless Delivery"
                backgroundImg="../assets/model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventor"
        />
       
        <Section 
                 title="Model X"
                 description="Order Online For Touchless Delivery"
                 backgroundImg="../assets/model-x.jpg"
                 leftBtnText="Custom order"
                 rightBtnText="Existing inventor"
                 />

              <Section
               title="Lowest Cost Solar Panels in America"
                 description="Money-back guarantee"
                 backgroundImg="../assets/solar-panel.jpg"
                 leftBtnText="Order Now"
                 rightBtnText="Learn more"
              
              />

              <Section
               title="Solar for new Roofs"
                 description="Solar roof cost less than a new Roofs plus solar panels"
                 backgroundImg="../assets/solar-roof.jpg"
                 leftBtnText="Order Now"
                 rightBtnText="Learn more"
              
              />

<Section
               title="Accessories"
                 description=""
                 backgroundImg="../assets/accessories.jpg"
                 leftBtnText="shop Now"
                 
              
              />
    </Container>
  )
}

export default Home

const Container = styled.div `
height: 100vh;
`