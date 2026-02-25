import React, { use } from "react";
import User from "./User";

const Users = ({ fetchUsers }) => {
  const users = use(fetchUsers);

  return (
    <div>
      <h2>Users:</h2>
      {users.map((user) => {
        return <User key={user.id} user={user}></User>;
      })}
    </div>
  );
};

export default Users;
