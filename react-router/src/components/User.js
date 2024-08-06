import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function User() {
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const { id } = useParams();
  const currentId = parseInt(id, 10);
  const previousUserId = currentId - 1;
  const nextUserId = currentId + 1;

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .finally(() => setIsLoading(false));
    axios(`https://jsonplaceholder.typicode.com/users`).then((res) =>
      setTotal(res.data.length)
    );
  }, [id]);

  return (
    <div>
      <h1>User Detail</h1>
      {isLoading && <div>Loading...</div>}
      {!isLoading && <code>{JSON.stringify(user)}</code>}
      <br /> <br />
      {previousUserId >= 1 && (
        <Link
          style={{ marginRight: "100px" }}
          to={`/users/${parseInt(id) - 1}`}
        >
          &larr;  Previous User ({parseInt(id) - 1})
        </Link>
      )}
      {nextUserId <= total && (
        <Link to={`/users/${parseInt(id) + 1}`}>
          Next User ({parseInt(id) + 1}) &rarr; 
        </Link>
      )}
    </div>
  );
}

export default User;
