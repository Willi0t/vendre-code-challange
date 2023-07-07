import React, { useEffect } from "react";
import NotFound404 from "../components/NotFound404/NotFound404";

function Page404() {
  useEffect(() => {
    document.title = "Vendre | 404";
  }, []);

  return (
    <>
      <NotFound404 />
    </>
  );
}

export default Page404;
