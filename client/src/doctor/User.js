import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const User = ({ first_name, last_name, appointment, id, doctorId }) => {
  return (
    <div>
      {first_name}
      {last_name}
      <p>{appointment}</p>
      <Button
        as={Link}
        to={{
          pathname: `/doctors/${doctorId}/users/${id}/edit`,
          state: { first_name, last_name, appointment },
        }}
      >
        edit
      </Button>
    </div>
  );
};

export default User;
