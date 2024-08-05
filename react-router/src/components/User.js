import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function User() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const { userId } = useParams(); // Parametre adını userId olarak aldık

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => setUser(res.data))
      .finally(() => setIsLoading(false));
  }, [userId]);

  return (
    <div>
      <h1>User Detail</h1>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <code>{JSON.stringify(user)}</code>
      )}
      <br />
      <Link to={`/users/${parseInt(userId) + 1}`}>
        Next User ({parseInt(userId) + 1})
      </Link>
    </div>
  );
}

export default User;
