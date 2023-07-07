import React, { useEffect } from "react";
import Employees from "../components/employees/Employees";

function EmployeesPage() {
  useEffect(() => {
    document.title = "Vendre | Anställda";
  }, []);

  return (
    <>
      <Employees />
    </>
  );
}

export default EmployeesPage;
