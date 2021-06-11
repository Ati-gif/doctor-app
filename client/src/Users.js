import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [toggleThing, setToggleThing] = useState(false);

  useEffect(() => {
    console.log("use Effect called");
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      let res = await axios.get("/api/users");
      setUsers(res.data);
      console.log("setUsers");
    } catch (err) {
      alert("error occured look at console users");
    }
  };

  const renderUsers = () => {
    return users.map((user) => {
      return (
        <Link to={`/users/${user.id}`}>
          <div>Patient: {user.first_name}, {user.last_name}</div>
        </Link>
      );
    });
  };
  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Users</span>
        <Link to="/users/new">
          <Button>New User</Button>
        </Link>
        <Button onClick={() => setToggleThing(!toggleThing)}>
          toggleThing
        </Button>
        {toggleThing && <p>Appointment</p>}
      </h1>
      {renderUsers()}
    </>
  );
};

export default Users;