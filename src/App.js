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

        // Modify the users' data with titles
        const modifiedUsers = data.data.map((user) => {
          const title = titleMapping[user.id];
          return { ...user, title };
        });

        // Fetch additional users from page 2
        const responsePage2 = await fetch("https://reqres.in/api/users?page=2");
        const dataPage2 = await responsePage2.json();
        const modifiedUsersPage2 = dataPage2.data.map((user) => {
          const title = titleMapping[user.id];
          return { ...user, title };
        });

        // Combine the existing users with the new page of users
        const allUsers = [...modifiedUsers, ...modifiedUsersPage2];
        console.log(allUsers);
        setUsers(allUsers);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="App">
      <div className="AppContainer">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            background={`headBackground${(user.id % 7) + 1}`}
            title={user.title}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
