import React, { useEffect, useState } from "react";
import { NavLink, Routes, Route} from "react-router-dom";
import axios from "axios";
import User from "./User";

function Users() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

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
            <NavLink
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#FF0000" : "inherit",
                };
              }}
              to={`/users/${user.id}`}
            >
              {user.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div style={{marginTop:"20px"}} >
        <Routes>
          <Route path={`:id`} element={<User />} />
        </Routes>
      </div>
    </div>
  );
}

export default Users;
