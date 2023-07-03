import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import "./App.css";

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
        const usersWithTitles = allUsers.map((user, index) => ({
          ...user,
          title: titleMapping[(index % 12) + 1],
        }));
        setUsers(usersWithTitles);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    // Define the title mapping
    const titleMapping = {
      1: "UX-Designer",
      2: "Human resources",
      3: "CEO",
      4: "Fullstack Developer",
      5: "Product owner",
      6: "Backend developer",
      7: "Project Manager",
      8: "Copy writer",
      9: "Frontend developer",
      10: "Project Manager",
      11: "UX-Designer",
      12: "Frontend developer",
    };

    fetchUsers();
  }, []);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
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
            background={`headBackground${(user.id % 7) + 1}`}
            title={user.title}
          />
        ))}
      </div>
      <div className="CarouselControls">
        <button disabled={currentPage === 1} onClick={prevPage}>
          Previous
        </button>
        <button disabled={indexOfLastCard >= users.length} onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
