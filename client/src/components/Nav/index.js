import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.ul`
display: flex;
justify-content: space-around;
flex-direction: row;

`
const Nav = () => {
    return (
        <NavBar>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>

            <Link to="/rooms">Rooms</Link>
          
            <Link to="/error">Error</Link>
        </NavBar>
    )
}

export default Nav;
