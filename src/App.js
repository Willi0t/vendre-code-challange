import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import EmployeesPage from "./Pages/EmployeesPage";
import Page404 from "./Pages/Page404";

function App() {
  useEffect(() => {
    document.title = "My Page Title";
  }, []);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<EmployeesPage />} />
          <Route path="/produkt" element={<Page404 />} />
          <Route path="/partners" element={<Page404 />} />
          <Route path="/priser" element={<Page404 />} />
          <Route path="/kundcase" element={<Page404 />} />
          <Route path="/kunskap" element={<Page404 />} />
          <Route path="/anställda" element={<EmployeesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
