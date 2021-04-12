import React from 'react';
import { Link } from 'react-router-dom';
import { FaHotel } from 'react-icons/fa';
import styled from 'styled-components';
import Nav from '../Nav';
import './style.css';

const Icon = styled.a`
    color: #ca361a;
    font-size: 3rem;
    padding-left: 3.5rem;
    color: orange;
`

export default function Header() {
    return (
        <header>
               
            <div className="title" id="branding">
                <Icon><Link to="/"><FaHotel /></Link></Icon>
                <h1>
                    <Link to="/"> HOTEL-HOTEL </Link>
                </h1>
            </div>
            <Nav />
        </header>
    )
}