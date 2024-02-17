import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light" width={'100%'}>
            <a class="navbar-brand" href="/">
                <img src="https://cdn1.iconfinder.com/data/icons/interface-59/24/check-box-empty-square--unchecked-512.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
                <span class="text-logo">FIRSTBYTE</span>
            </a>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class="nav-link text-logo" to="/">HOME</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-logo" to="/team">MEET THE TEAM</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-logo" to="/curricula">CURRICULA</Link>
                    </li>
                </ul>
                <div>
                    <button type="button" class="btn btn-secondary mx-1">Log In</button>
                    &nbsp;&nbsp;
                    <button type="button" class="btn btn-primary">Sign Up</button>
                </div>
            </div>
        </nav>
  )
}

export default Navbar;
