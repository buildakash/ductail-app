import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbarlanding from "../components/Navbarlanding";
import Homepage from "../views/Homepage";
import Footerlanding from "../components/Footerlanding";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbarlanding />
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
          <Footerlanding />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
