/** @format */

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "../../styles/css/Main/main.css";
import Home from "../Home/Home";
import Navbar from "../../slices/Navbar/Navbar";
import Team from "../Team/Team";
import useIsAnimateNavbar from "../../hooks/useIsAnimateNavbar";
import Join from "../Join/Join";
import Curricula from "../Curricula/Curricula";

const Router = () => {
  const [isAnimateNavbar, toggleIsAnimateNavbar] = useIsAnimateNavbar();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isAnimateNavbar={isAnimateNavbar}
                toggleIsAnimateNavbar={toggleIsAnimateNavbar}
              />
            }
          />
          <Route
            path="/team"
            element={
              <Team
                isAnimateNavbar={isAnimateNavbar}
                toggleIsAnimateNavbar={toggleIsAnimateNavbar}
              />
            }
          />
          <Route
            path="/curricula"
            element={
              <Curricula
                isAnimateNavbar={isAnimateNavbar}
                toggleIsAnimateNavbar={toggleIsAnimateNavbar}
              />
            }
          />
          <Route path="/contact" element={<Join />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
