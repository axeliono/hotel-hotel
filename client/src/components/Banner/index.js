import React from 'react';
import styled from 'styled-components';
import './style.css'
const Wrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
border-image: (https://i.imgur.com/dREL3hO.png);
`;

export default function Banner({title, subtitle}) {
    return (
        <Wrapper>
        <div className="banner">
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
        </Wrapper>
    )
};