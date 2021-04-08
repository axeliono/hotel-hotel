import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './style.css';
const NavBar = styled.ul`
display: flex;
justify-content: space-evenly;
flex-direction: row;
border-image: url(https://i.imgur.com/dREL3hO.png);
width: 50%;
}
`;

const Nav = () => {
    return (

        <NavBar>
            <Link to="/">Home</Link>
            <Link to="/login">Account</Link>

            <Link to="/rooms">Rooms</Link>
          
            <Link to="/shop">Shop</Link>
            
        </NavBar>
    )
}


export default Nav;
