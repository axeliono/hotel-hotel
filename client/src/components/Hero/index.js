import React from 'react';
import styled from 'styled-components';
import Banner from '../Banner/index';
import Carousel from '../Carousel';


const Wrapper = styled.section
`
display: flex;
justify-content: center;
align-items: center;
height: 100%
width: 100%
overflow: hidden'
`;



export default function Hero() {

return (
    <>
    <Carousel style={{borderBottom:"2rem"}}/>


  <Banner title="Basic Rooms" subtitle="Starting @ $99!"/>     
      </>     
)
};

