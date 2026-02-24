import React, { use } from "react";
import User from "./User";

const Users = ({ fetchUsers }) => {
  const users = use(fetchUsers);
  // console.log(users);
  return (
    <div className="card">
      <h1>Users: {users.length}</h1>
      {users.map((user) => {
        return <User key={user.id} user={user}></User>;
      })}
    </div>
  );
};

export default Users;
