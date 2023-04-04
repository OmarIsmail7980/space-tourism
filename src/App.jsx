import { useState } from "react";
import { Routes,Route } from "react-router-dom";

import "./App.css";
import { Navbar } from "./components";
import { Crew, Destination, Home, Technology } from "./pages";

function App() {
  return (
    <div className="background h-screen w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
