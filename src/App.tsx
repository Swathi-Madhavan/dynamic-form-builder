import React from "react";
import "./App.css";
import CustomAppBar from "./components/CustomAppBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <CustomAppBar />
      <Outlet />
    </div>
  );
}

export default App;
