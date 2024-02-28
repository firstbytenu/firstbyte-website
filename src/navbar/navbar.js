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
                        {/* <a class="nav-link text-logo" href="/">HOME</a> */}
                        <Link class="nav-link text-logo" to="/">HOME</Link>

                    </li>
                    <li class="nav-item">
                        {/* <a class="nav-link text-logo" href="/meetTeam">MEET THE TEAM</a> */}
                        <Link class="nav-link text-logo" to="/meetTeam">MEET THE TEAM</Link>

                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link text-logo dropdown-toggle" to="/meetTeam" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            CURRICULA
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/curricula#neu">Northeastern Team</Link>
                            <Link className="dropdown-item" to="/curricula#camp">Camp Harbor View Team</Link>
                            <Link className="dropdown-item" to="/curricula#st">St. Stephens Team</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar; 
