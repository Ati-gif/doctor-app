import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={styles.navbar}>
      <Link to="/">Home</Link>
      <span style={{ marginRight: "10px" }}></span>
      <Link to="/doctors">Doctors</Link>
      <span style={{ marginRight: "10px" }}></span>
     
    </div>
  );
};

const styles = {
  navbar: {
    background: "black",
    padding: "10px",
  },
};

export default NavBar;