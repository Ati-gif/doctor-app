import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    Axios.get("/api/doctors")
      .then((res) => {
        setDoctors(res.data);
      })
      .catch((err) => {
        alert("Error: Could not find doctors");
      });
  }, []);

  const renderDoctors = () => {
    return doctors.map((doctor) => (
      <Card key={doctor.id}>
        <Card.Body>
          <Card.Title>{doctor.name}</Card.Title>
          <Card.Text>{doctor.specialty}</Card.Text>
          <Button
            variant="primary"
            as={Link}
            to={`/doctors/${doctor.id}`}
          >
            users
          </Button>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <div>
      <Card.Header as="h1">Doctors Appointments</Card.Header>
      <Button as={Link} to="/appointments/new">
        New
      </Button>
      <Card>{renderDoctors()}</Card>
    </div>
  );
};

export default Doctors;
