import Axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const DoctorForm = ({ history }) => {
  const [last_name, setLast_name] = useState("");
  const [specialty, setSpecialty] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    Axios.post("/api/doctors", { last_name, specialty })
      .then((res) => {
        history.push("/doctors");
      })
      .catch((err) => {
        alert("Error: Create did not work");
      });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label as="h1">New Doctor</Form.Label>
      <br />
      <Form.Group widths="equals">
        <Form.Control
          label="Name"
          placeholder="enter new doctor"
          value={last_name}
          onChange={(e) => setLast_name(e.target.value)}
          required
        />
        <Form.Control
          label="Specialty"
          placeholder="enter specialty"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          required
        />
      </Form.Group>
      <Button type="submit">Submit</Button>
      <br />
      <br />
      <Button variant="dark" onClick={history.goBack}>
        Back
      </Button>
    </Form>
  );
};

export default DoctorForm;
