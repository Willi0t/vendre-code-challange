import React from "react";
import "./userCard.css";
import { ReactComponent as EmailIcon } from "../assets/Icons/email.svg";
import { ReactComponent as GithubIcon } from "../assets/Icons/github.svg";
import { ReactComponent as LinkedinIcon } from "../assets/Icons/linkedin.svg";

function UserCard({ user, background, title }) {
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
      <div className="CardHead" id={background}>
        <h3>{title}</h3>
      </div>
      <div className="CardBodyWrapper">
        <div className="CardBodyContainer">
          <h3>{`${user.first_name} ${user.last_name}`}</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
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
