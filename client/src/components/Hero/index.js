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
  <Banner title="Basic Rooms" subtitle="Basic rooms starting at $99!"/>
                
    <Carousel/>
      </>     
)


};

