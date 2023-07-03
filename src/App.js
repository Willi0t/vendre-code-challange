import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users");
        const data = await response.json();
        setUsers(data.data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const dummyTitleData = {
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

  return (
    <div className="App">
      <div className="AppContainer">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            background={`headBackground${(user.id % 7) + 1}`}
            title={dummyTitleData[user.id]}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
