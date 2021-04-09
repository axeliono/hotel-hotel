import React from 'react';
import { Link } from 'react-router-dom';
import { FaHotel, FaInstagram, FaYelp, FaFacebookSquare } from 'react-icons/fa';
import styled from 'styled-components';
import './style.css';

const Icon = styled.span`
    color: orange;
    font-size: 3rem;
`

const SocialIcon = styled.span`
    color: orange;
    font-size: 1.5rem;
    
    padding-top: 0.5rem;
`

const IconGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px;
    text-align: center;
    overflow: hidden;
`

const Button = styled.button`
    display: block;
    background-color: orange;
    color: white;
    border: none;
    outline: none;
    font-size: 1.2rem;
`

export default function Footer() {
    return (
        <footer>
            <Wrapper>
                <h1>HOTEL-HOTEL</h1>
                <h2>1234 Street St.</h2>
                <h2>Austin, TX 12345</h2>
                <Button>
                    <Link to="/reservations">
                        BOOK NOW
                    </Link>
                </Button>
            </Wrapper>
            
                <Link to="/">
                    <Icon><FaHotel /></Icon>
                </Link>
            <Wrapper>
                <h1>follow us on ... </h1>
                <IconGroup>
                    <SocialIcon><FaInstagram /></SocialIcon>
                    <SocialIcon><FaInstagram /></SocialIcon>
                    <SocialIcon><FaInstagram /></SocialIcon>
                </IconGroup>
                <h1 className="m-top">512.222.1234</h1>
            </Wrapper>
        </footer>


        // <header>
        //     <div className="title">
        //         <Icon><FaHotel /></Icon>
        //         <h1>
        //             <Link to="/">HOTEL</Link>
        //         </h1>
        //     </div>
        // </header>
    )
}