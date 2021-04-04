import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import Services from '../components/Services'
import { Link } from 'react-router-dom';
import './style.css';
import styled from 'styled-components';
const Img = styled.img`
width: 100%;
height: 60%;
`;



export default function Home() {
    return (
        <>
        <Hero hero="defaultHero">
            <Banner title="Basic Rooms" subtitle="Basic rooms starting at $99!">
                <Link to="/rooms" className="btn-primary">Rooms</Link>
                <Img src={"https://imgur.com/AhxPlW9"} alt="room with two queen beds"/>
            </Banner>
        </Hero>
        <Services/>
        </>
    )
}

