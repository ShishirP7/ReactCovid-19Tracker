import LandingPage from "./Assets/Pages/LandingPage";

import { Routes, Route } from "react-router-dom";
import Axios from "axios";
import { useState, useEffect } from "react";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
