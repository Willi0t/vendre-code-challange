import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import EmployeesPage from "./Pages/EmployeesPage";
import Page404 from "./Pages/Page404";
import Footer from "./components/footer/Footer";

function App() {
  useEffect(() => {
    document.title = "Vendre | Anställda";
  }, []);

  return (
    <div className="App">
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
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
