import './App.css';
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import {MAIN_CONTAINER} from './styles/styles'
import Users from './Users';
import Doctors from './Doctors';
import Appointments from './Appointments';
import User from './User';
import Doctor from './Doctor';
import Appointment from './Appointment';

function App() {
  return (
    <>
    <NavBar />
    <MAIN_CONTAINER>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/users' component={Users} />
      <Route exact path='/users/:id' component={User} />
      <Route exact path='/doctors' component={Doctors} />
      <Route exact path='/doctors/:id' component={Doctor} />
      <Route exact path='/appointments' component={Appointments} />
      <Route exact path='/appointments/:id' component={Appointment} />

    </Switch>
    </MAIN_CONTAINER>
    </>
  );
}

export default App;
