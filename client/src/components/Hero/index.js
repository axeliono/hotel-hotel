import React from 'react';
import styled from 'styled-components';
import Banner from '../Banner/index';



const Wrapper = styled.section
`
display: flex;
justify-content: center;
align-items: center;
height: 100%
width: 100%
`;
const Img = styled.img`
width: 80%;
height: 30%;

`
export default function Hero() {

return (
    <>
  <Banner title="Basic Rooms" subtitle="Basic rooms starting at $99!"/>
                
    <Wrapper>
        <Img src="https://i.imgur.com/us6gMou.jpg"/>
    </Wrapper>
      </>     
)

};

