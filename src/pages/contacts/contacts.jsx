import React from "react";
import "./contacts.css";
import { Link } from "react-router-dom";
import axios from "axios";
export const Contacts = () => {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((item) => {
      setUsers([...item.data]);
    });
  }, []);
  return (
    <div className="container">
        <h2 className="title">List of Users:</h2>
      <ul className="list">
        {users.map((el) => (
          <li className="item" key={el.id}>
            <Link className="links" to={`/user/${el.id}`}>{el.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
