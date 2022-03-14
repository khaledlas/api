import React from "react";
import User from "./User";
import "./UserList.css";

const UserList = ({ users }) => {
  return (
    <div className="list">
      {users.map((el) => (
        <User user={el} />
      ))}
    </div>
  );
};

export default UserList;
