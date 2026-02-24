import React from "react";

const User = ({ user }) => {
  console.log(user);
  const { name, email, username, phone, website } = user;
  return (
    <div className="card">
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <p>Username: {username}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
    </div>
  );
};

export default User;
