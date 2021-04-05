import React from 'react';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import './style.css';
import styled from 'styled-components';

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
flex-direction: column;
`;

export default function Rooms() {
    return (
        <>
            <Banner title="Rooms"/>
            <Wrapper>

            <Img src={"https://i.imgur.com/AhxPlW9.jpg"} alt="room with two queen beds"/>
            
            </Wrapper>
            <Wrapper>

                <Link to="/" className="btn-primary">
                    Go home
                </Link>
            </Wrapper>
        </>
    )
}