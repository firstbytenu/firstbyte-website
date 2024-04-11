/** @format */

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "../../styles/css/Main/main.css";
import Home from "../Home/Home";
import Navbar from "../../slices/Navbar/Navbar";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/team" Component={Home} />
          <Route path="/curricula" Component={Home} />
          <Route path="/contact" Component={Home} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
