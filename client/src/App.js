import './App.css';
import {Route, Switch} from 'react-router-dom'
import Doctors from './Doctors';
import Users from './Users';
import Doctor from './Doctor';
import NavBar from './components/NavBar';
import { Container } from 'semantic-ui-react';
import UpdateDoctorForm from './UpdateDoctorForm';
import NewDoctorForm from './NewDoctorForm';
import UpdateAppointmentForm from './UpdateAppointmentForm';


function App() {
  return (
    <>
     <NavBar />
     <Container>
       <Switch>
        <Route exact path='/' component={Doctors} />
        <Route exact path='/users' component={Users} />
        <Route exact path='/doctors' component={Doctors} />
        <Route exact path='/doctors/new' component={NewDoctorForm} />
        <Route exact path='/doctors/:id' component={Doctor} />
        <Route exact path='/doctors/:id/edit' component={UpdateDoctorForm} />
        <Route exact path='/doctors/:doctorId/appointments/:id/edit' component={UpdateAppointmentForm} />
       </Switch>
      </Container>
    </>

  );
}

export default App;

