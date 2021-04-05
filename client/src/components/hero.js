import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Banner from './Banner';

const Img = styled.img`
display: block;
justify-content: center;
height: 30%;
width: 80%;

`;
export default function Hero() {
return (<>
  <Banner title="Basic Rooms" subtitle="Basic rooms starting at $99!">
            </Banner>
                <Link to="/rooms" className="btn-primary">Rooms</Link>
    <Img src={"https://i.imgur.com/AhxPlW9.jpg"} alt="room with two queen beds"/>
</>)

};