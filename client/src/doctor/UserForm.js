import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const UserForm = ({ history, match, location }) => {
  const [first_name, setFirst_name] = useState(
    location.state && location.state.first_name ? location.state.first_name : ""
  );
  const [last_name, setLast_name] = useState(
    location.state && location.state.last_name ? location.state.last_name : ""
  );
  const [appointment, setAppointment] = useState(
    location.state && location.state.appointment ? location.state.appointment : 0
  );

  async function addUser() {
    try {
      const { doctor_id } = match.params;
      let res = await axios.post(`/api/doctors/${doctor_id}/users`, {
        first_name,
        last_name,
        appointment,
      });
      history.push(`/doctors/${doctor_id}`);
    } catch (err) {
      console.log(err);
    }
  }

  function editUser() {
    const { doctor_id, id } = match.params;
    axios
      .put(`/api/doctors/${doctor_id}/users/${id}`, { first_name, last_name, appointment })
      .then((res) => {
        history.push(`/doctors/${doctor_id}`);
      })
      .catch((err) => {
        alert("error in update");
      });
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (match.params.id) {
      editUser();
    } else {
      addUser();
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Label as="h1">
          {match.params.id ? "Edit User" : "New user to Add"}
        </Form.Label>
        <Form.Group widths="equals">
          <Form.Control
            label="first_name"
            placeholder="new user"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
            required
          />
          <Form.Control
            label="last_name"
            placeholder="new user"
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
            required
          />
          <Form.Control
            label="Appointment"
            placeholder="enter the appointment"
            value={appointment}
            type="date"
            pattern="^\d*(\.\d{0,2})?$"
            onChange={(e) => setAppointment(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
        <Button variant="dark" onClick={history.goBack}>
          Back
        </Button>
      </Form>
    </>
  );
};


export default UserForm;
