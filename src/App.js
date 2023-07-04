import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import "./App.css";
import arrowIcon from "./assets/Icons/arrowIcon.png";
import { ReactComponent as ArrowIcon } from "./assets/Icons/arrowIcon.svg";
import userMapping from "./userdata";

function App() {
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
    setCurrentPage((prevPage) => (prevPage % 2) + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % 2 || 2);
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = users.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className="App">
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
        <div className="PageButtons">
          <ArrowIcon onClick={prevPage}></ArrowIcon>
          <ArrowIcon onClick={prevPage}></ArrowIcon>
        </div>
      </div>
    </div>
  );
}

export default App;
