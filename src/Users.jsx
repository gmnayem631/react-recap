import React, { use } from "react";

const Users = ({ fetchUsers }) => {
  const users = use(fetchUsers);
  console.log(users);
  return (
    <div className="card">
      <h1>Users: {users.length}</h1>
    </div>
  );
};

export default Users;
