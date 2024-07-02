/** @format */

import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "../../styles/css/Main/main.css";
import Navbar from "../../slices/Navbar/Navbar";
import useIsAnimateNavbar from "../../hooks/useIsAnimateNavbar";
import Loader from "../../components/Loader/Loader";

const Home = React.lazy(() => import("../Home/Home"));
const Team = React.lazy(() => import("../Team/Team"));
const Curricula = React.lazy(() => import("../Curricula/Curricula"));
const Join = React.lazy(() => import("../Join/Join"));

const Router = () => {
  const [isAnimateNavbar, toggleIsAnimateNavbar] = useIsAnimateNavbar();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader text={"Home Page"} />}>
                <Home
                  isAnimateNavbar={isAnimateNavbar}
                  toggleIsAnimateNavbar={toggleIsAnimateNavbar}
                />
              </Suspense>
            }
          />
          <Route
            path="/team"
            element={
              <Suspense fallback={<Loader text={"Team Page"} />}>
                <Team
                  isAnimateNavbar={isAnimateNavbar}
                  toggleIsAnimateNavbar={toggleIsAnimateNavbar}
                />
              </Suspense>
            }
          />
          <Route
            path="/curricula"
            element={
              <Suspense fallback={<Loader text={"Curricula Page"} />}>
                <Curricula
                  isAnimateNavbar={isAnimateNavbar}
                  toggleIsAnimateNavbar={toggleIsAnimateNavbar}
                />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<Loader text={"Contact Page"} />}>
                <Join />
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
