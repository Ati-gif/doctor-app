import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import User from "./User";
import UserForm from "./UserForm";

const DoctorView = ({ history, match }) => {
  const [doctor, setDoctor] = useState({});
  const [users, setUser] = useState([]);

  useEffect(() => {
    Axios.get(`/api/doctors/${match.params.id}`)
      .then((res) => {
        setDoctor(res.data);
      })
      .catch((err) => {
        alert("Error: No doctors loaded");
      });

    Axios.get(`/api/doctors/${match.params.id}/users`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        alert("Error: Could not retrieve users");
      });
  }, []);

  function renderUsers() {
    if (!doctor.users) {
      return;
    }
    if (doctor.users.length === 0) {
      return <p>No user</p>;
    }
    return doctor.users.map((r) => {
      return <User key={r.id} {...r} doctorId={doctor.id} />;
    });
  }

  return (
    <div>
      <Card.Header as="h1">{doctor.name}</Card.Header>
      <Button as={Link} to={`/doctors/${doctor.id}/new`}>
        New User
      </Button>
      <Card>{renderUsers()}</Card>
      <Button variant="dark" onClick={history.goBack}>
        Back
      </Button>
    </div>
  );
};

export default DoctorView;
