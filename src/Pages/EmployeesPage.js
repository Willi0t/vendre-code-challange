import React, { useEffect, useState } from "react";
import NavBar from "./components/navBar/NavBar";
import UserCard from "./components/userCard/UserCard";
import Footer from "./components/footer/Footer";
import "./App.css";
import { ReactComponent as ArrowIcon } from "./assets/icons/arrowIcon.svg";
import userMapping from "./userdata";

function employees() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6);

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
        });

        setUsers(usersWithTitles);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const nextPage = () => {
    setCurrentPage((nextPage) => (nextPage + 1) % 2 || 2);
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = users.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className="employeesContainer">
      <div className="Appwrapper">
        <ArrowIcon
          className="arrowIcon"
          id="leftButton"
          onClick={nextPage}
        ></ArrowIcon>
        <div className="AppContainer">
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
            <span className={currentPage === 1 ? "highlighted" : "PageNumbers"}>
              1
            </span>
            <span className={currentPage === 2 ? "highlighted" : "PageNumbers"}>
              2
            </span>
          </div>
        </div>
        <ArrowIcon className="arrowIcon" onClick={nextPage}></ArrowIcon>
      </div>
      <Footer />
    </div>
  );
}

export default employees;
