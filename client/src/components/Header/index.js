import React from 'react';
import { Link } from 'react-router-dom';
import { FaHotel } from 'react-icons/fa';
import styled from 'styled-components';
import Nav from '../Nav';
import './style.css';

const Icon = styled.span`
    color: orange;
    font-size: 3rem;
    padding-left: 3.5rem;
`

export default function Header() {
    return (
        <header>
            <div className="title">
                <Icon><FaHotel /></Icon>
                <h1>
                    <Link to="/">HOTEL</Link>
                </h1>
            </div>
            <Nav />
        </header>
    )
}