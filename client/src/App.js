import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Doctorform from "./doctor/Doctorform";
import Doctors from "./doctor/Doctors";
import DoctorView from "./doctor/DoctorView";
import UserForm from "./doctor/UserForm";

function App() {
  return (
    <>
      <NavBar />
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/doctors" component={Doctors} />
          <Route exact path="/doctors/new" component={Doctorform} />
          <Route
            exact
            path="/doctors/:doctor_id/users/:id/edit"
            component={UserForm}
          />
          <Route exact path="/doctors/:id" component={DoctorView} />
          <Route
            exact
            path="/doctors/:doctor_id/new"
            component={UserForm}
          />
        </Switch>
      </>
    </>
  );
}

export default App;
