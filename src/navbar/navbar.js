import React from 'react'
import './navbar.css';

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
                        <a class="nav-link text-logo" href="/">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-logo" href="/meetTeam">MEET THE TEAM</a>
                    </li>
                   
                    <div class="dropdown">
                    <li class="nav-item">
                        <a class="nav-link text-logo" href="/curricula">CURRICULA</a>
                        <div class="dropdown-content">
                        <a href="/curricula">Northeastern Team</a>
                         <a href="/curricula">Camp Harbor View Team</a>
                         <a href="/curricula">St. Stephens Team</a>
                         </div>
                         </li>
                         </div>
                </ul>
                <div>
                <form action="https://docs.google.com/forms/d/e/1FAIpQLSfgdHqfrIbdoDwoKo06yk677UNw07TpHJFL-hvNZ62cjojCpw/viewform"> 
        <button class = "btn btn-primary" type="submit">Interest Form! </button> 
    </form> 
                </div>
            </div>
        </nav>
  )
}

export default Navbar;