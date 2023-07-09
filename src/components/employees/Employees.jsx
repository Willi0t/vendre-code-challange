import React, { useEffect, useState } from "react";
import UserCard from "../userCard/UserCard";
import "./employees.css";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrowIcon.svg";
import userMapping from "../../userdata";

function Employees() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response1 = await fetch("https://reqres.in/api/users");
        const data1 = await response1.json();

        const response2 = await fetch("https://reqres.in/api/users?page=2");
        const data2 = await response2.json();

        // Combine the users from both responses
        const allUsers = [...data1.data, ...data2.data];
        const usersWithTitles = allUsers.map((user, index) => {
          if (userMapping[user.first_name + user.last_name]) {
            return {
              ...user,
              ...userMapping[user.first_name + user.last_name],
            };
          }
          return null;
        });

        setUsers(usersWithTitles);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const nextPage = () => {
    setCurrentPage((currentPage) => (currentPage === 1 ? 2 : 1));
  };

  const handleSwipe = () => {
    const swipeDistance = touchStart - touchEnd;
    const swipeThreshold = 50; // Minimum distance required for a swipe

    if (swipeDistance > swipeThreshold) {
      // Swiped from right to left
      nextPage();
    } else if (swipeDistance < -swipeThreshold) {
      // Swiped from left to right
      nextPage();
    }
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = users.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className="employeesContainer">
      <div className="employeHeader">
        <h2>Våra Anställda</h2>
      </div>
      <div
        className="flexRow"
        onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          setTouchEnd(e.changedTouches[0].clientX);
          handleSwipe();
        }}
      >
        <ArrowIcon
          className="arrowIcon"
          id="leftButton"
          onClick={nextPage}
        ></ArrowIcon>
        <div className="employeesCardContainer">
          {currentCards.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              background={user.color}
              title={user.title}
              personalText={user.personalText}
            />
          ))}
          <div className="PageNumbersContainer">
            <ArrowIcon
              className="arrowIconMobile"
              id="leftButton"
              onClick={nextPage}
            ></ArrowIcon>
            <span className={currentPage === 1 ? "highlighted" : "PageNumbers"}>
              1
            </span>
            <span className={currentPage === 2 ? "highlighted" : "PageNumbers"}>
              2
            </span>
            <ArrowIcon
              className="arrowIconMobile"
              onClick={nextPage}
            ></ArrowIcon>
          </div>
        </div>
        <ArrowIcon className="arrowIcon" onClick={nextPage}></ArrowIcon>
      </div>
    </div>
  );
}

export default Employees;
