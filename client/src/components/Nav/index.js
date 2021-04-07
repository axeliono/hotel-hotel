import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.ul`
display: flex;
justify-content: space-evenly;
flex-direction: row;
height: 10rem;
background-size: cover;
`
const Nav = () => {
    return (
        <NavBar>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/rooms">Rooms</Link> 
        </NavBar>
    )
}


export default Nav;
