import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import Carousel from '../components/Carousel';


const Img = styled.img
`
height: 30%;
width: 90%;
`;
const Wrapper = styled.section
`
display: flex;
justify-content: center;
align-items: center;
height: 100%
width: 100%
`;
export default function Hero() {

return (
    <>
  <Banner title="Basic Rooms" subtitle="Basic rooms starting at $99!"/>
                
                <Wrapper>
            <Carousel/>
                </Wrapper>
      </>     
)

};

