import React, { useEffect, useState } from "react";
import NavBar from "./components/navBar/NavBar";
import Employees from "./components/employees/Employees.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Employees />
    </>
  );
}

export default App;
