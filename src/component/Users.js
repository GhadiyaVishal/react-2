import React from "react";
import UserDetail from "./UserDetail";

const Users = ({ users, ...props }) => {
  return (
    <>
      {users.map((userData, index) => (
        <UserDetail
          key={userData.id}
          user={userData}
          index={index}
          {...props}
        />
      ))}
    </>
  );
};

export default Users;
