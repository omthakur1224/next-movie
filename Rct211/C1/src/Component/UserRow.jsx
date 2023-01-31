import React from "react";

const UserRow = ({ name, gender, role, maritalStatus, id }) => {
  let marital = maritalStatus ? "married" : "unmarried";
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{gender}</td>
        <td>{role}</td>
        <td>{marital}</td>
      </tr>
    </>
  );
};
export { UserRow };
