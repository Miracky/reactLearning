import React, { useEffect, useState } from "react";
import { Link, Routes, Route, useMatch } from "react-router-dom";
import axios from "axios";
import User from "./User";

function Users() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const match = useMatch("/users/*"); // Tüm /users/ altında olan rotaları al

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {isLoading && <div>Loading...</div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path="/" element={<h3>Please select a user.</h3>} />
        <Route path=":userId" element={<User />} />
      </Routes>
    </div>
  );
}

export default Users;
