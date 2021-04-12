import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Auth from "../../utils/auth";

const NavBar = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  border-image: url(https://i.imgur.com/dREL3hO.png);
  width: 50%;
`;

const Nav = () => {
  return (
    <NavBar>
      <Link to="/" className="nav_link">Home</Link>
      
      <Link to="/login" className="nav_link" >Account</Link>

      <Link to="/rooms" className="nav_link">Rooms</Link>

      <Link to="/shop" className="nav_link">Shop</Link>
      {Auth.loggedIn() ? (
        <>
          <Link to="/" onClick={Auth.logout}>
            Logout
          </Link>
        </>
      ) : (
        ""
      )}
    </NavBar>
  );
};

export default Nav;
