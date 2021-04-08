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
<<<<<<< HEAD
            <Link to="/" className="nav_link">Home</Link>
            <Link to="/login" className="nav_link">Login</Link>
            <Link to="/rooms" className="nav_link">Rooms</Link> 
            {/* <Link to="/shop" className="nav_link">Shop</Link> */}
=======
            <Link to="/">Home</Link>
            <Link to="/login">Account</Link>

            <Link to="/rooms">Rooms</Link>
          
            <Link to="/shop">Shop</Link>
            
>>>>>>> 3370822790e8b11077b3689763d2e13ebc440d85
        </NavBar>
    )
}


export default Nav;
