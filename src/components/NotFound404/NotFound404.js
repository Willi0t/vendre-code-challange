import React from "react";
import "./notFound404.css";
import { Link, useNavigate } from "react-router-dom";
import Image404 from "../../assets/images/404Image-transp.png";

function NotFound404() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/anställda");
  };

  return (
    <div className="Container404">
      <div className="ContentContainer404">
        <img src={Image404} alt="404 Image" />
        <div className="Textbox404">
          <h3>404</h3>
          <h4>
            Looks like this page is missing. Don't worry though, our best man is
            on the case.
          </h4>
          <p>
            But I doubt he can find them since they are gone for a reason. you
            can read more about it on my{" "}
            <a
              href="https://github.com/Willi0t/vendre-code-challange"
              target="_blank"
            >
              Github
            </a>{" "}
            repo or go back
          </p>
          <button onClick={handleClick}>go back</button>
        </div>
      </div>
    </div>
  );
}

export default NotFound404;
