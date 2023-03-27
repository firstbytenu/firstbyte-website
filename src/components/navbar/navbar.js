import React from "react";
//import { AppBar, Container, Toolbar, Box } from "@mui/material";
import "./navbar.css";
//import "../../public/Bit.png";
import { Button } from "@mui/material";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light" width={"100%"}>
      <a class="navbar-brand" href="/">
        <img
          src="Bit.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt="logo"
        />
        <span class="text-logo">FIRSTBYTE</span>
      </a>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link text-logo" href="/">
              HOME
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-logo" href="/team">
              MEET THE TEAM
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-logo" href="/curricula">
              CURRICULA
            </a>
          </li>
        </ul>
        <div>
          <Button
            variant="text"
            className="btn-secondary"
            style={{ marginRight: "1rem" }}
          >
            Log In
          </Button>
          <Button
            variant="text"
            className="btn-primary"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfgdHqfrIbdoDwoKo06yk677UNw07TpHJFL-hvNZ62cjojCpw/viewform"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );

  //   return (
  //     <AppBar position="static" className="nav">
  //       <Container maxWidth="xl">
  //         <Toolbar disableGutters>
  //           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
  //             <div className="navbar-logo">
  //               <img
  //                 src="https://cdn1.iconfinder.com/data/icons/interface-59/24/check-box-empty-square--unchecked-512.png"
  //                 alt="logo"
  //                 width="30"
  //                 height="30"
  //                 class="d-inline-block align-top"
  //               />
  //               <span className="text-logo">FIRSTBYTE</span>
  //             </div>
  //           </Box>
  //           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
  //             <div className="navbar-links">
  //               <a className="nav-link text-logo" href="/">
  //                 HOME
  //               </a>
  //               <a className="nav-link text-logo" href="/team">
  //                 MEET THE TEAM
  //               </a>
  //               <a className="nav-link text-logo" href="/curricula">
  //                 CURRICULA
  //               </a>
  //             </div>
  //           </Box>
  //           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
  //             <div className="navbar-buttons">
  //               <button type="button" className="btn btn-secondary mx-1">
  //                 Log In
  //               </button>
  //               <button type="button" className="btn btn-primary">
  //                 Sign Up
  //               </button>
  //             </div>
  //           </Box>
  //         </Toolbar>
  //       </Container>
  //     </AppBar>
  //  );
}

export default Navbar;
