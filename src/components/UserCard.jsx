import React from "react";
import "./userCard.css";
import { LinkedinIcon, EmailIcon, GithubIcon } from "../assets/Icons";

function UserCard({ user, background, title, personalText }) {
  console.log(background);
  const handleEmailClick = () => {
    window.location.href = `mailto:${user.email}`;
  };

  const handleGithubClick = () => {
    window.open(`https://github.com/${user.first_name}Example404`, "_blank");
  };

  const handleLinkedinClick = () => {
    window.open(
      `https://linkedin.com/in/${user.first_name}-${user.last_name}Example404`,
      "_blank"
    );
  };

  return (
    <div className="cardContainer">
      <div className="imgFrame">
        <img src={user.avatar} alt={user.first_name} />
      </div>
      <div
        className="CardHead"
        style={{ backgroundColor: `${background}` }}
      ></div>
      <div className="CardBodyWrapper">
        <div className="CardBodyContainer">
          <div className="descriptionHead">
            <h3>{`${user.first_name} ${user.last_name}`}</h3>
            <h4>{title}</h4>
          </div>
          <p>{personalText}</p>
          <div className="IconContainer">
            <EmailIcon onClick={handleEmailClick} />
            <GithubIcon onClick={handleGithubClick} />
            <LinkedinIcon onClick={handleLinkedinClick} />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default UserCard;
