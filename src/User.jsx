import React from "react";

const User = ({ user }) => {
  console.log(user);

  const { name, company, address } = user;
  return (
    <div className="card">
      <h3>Name: {name}</h3>
      <p>Company: {company.name}</p>
      <p>City: {address.city}</p>
    </div>
  );
};

export default User;
