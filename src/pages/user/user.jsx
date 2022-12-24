import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './users.css'

export const User = () => {
  const params = useParams();
  const [users, setUser] = React.useState({});
  React.useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((item) => {
        setUser({ ...item.data });
      });
  });

  return (
    <div className="container">
        <h2 className="title">User Informations:</h2>
      <ul className="list users-list">
        <li className="users-item">{users.name}</li>
        <li className="users-item">{users.phone}</li>
        <li className="users-item">{users.email}</li>
      </ul>
    </div>
  );
};
