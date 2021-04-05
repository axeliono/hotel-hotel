import React from 'react'
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div>
            <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
          <li>
            <Link to="/error">Error</Link>
          </li>
        </ul>
      </nav>
        </div>
    )
}

export default Nav;
