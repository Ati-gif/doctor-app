import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import { Button, Card } from 'semantic-ui-react'
import NewAppointmentForm from './NewAppointmentForm'
import Appointment from './Appointment'


const User = () => {
  const { id } = useParams()
  let history = useHistory();

  const [user, setUser] = useState({})
  const [showNewForm, setShowNewForm] = useState(false)
  const [appointments, setAppointments] = useState([])
  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    try {
      let res = await axios.get(`/api/users/${id}`)
      setUser(res.data.user)
      setAppointments(res.data.appointments)

    } catch (err) {
      alert('error check console user.js')
    }
  }

  const deleteUser = async () => {
    let res = await axios.delete(`/api/users/${id}`)
    history.push('/')
  }

  const deleteAppointment = (idOfAppointmentThatWasDeleted) =>{
      const filterAppointments = appointments.filter(v => v.id !== idOfAppointmentThatWasDeleted)
      setAppointments(filterAppointments)
  }
  const renderAppointments = ()=>{
    return appointments.map(appointment => <Appointment deleteAppointment={deleteAppointment} key={appointment.id} userId={id} {...appointment}/>)
  }

  const addAppointment =(appointment)=>{
    const newAppointments = [appointment, ...appointments]
    setAppointments(newAppointments)
  }
  return (
    <>
     <Button onClick={() => history.goBack()}>go back</Button>
      <Card fluid color='red'>
      <Card.Content>
         <Card.Header style={{display:'flex', justifyContent:'space-between'}}>
           {user.name} 
           <div >
             <Button color='red' onClick={deleteUser}>Delete</Button>
             <Link  to={{ pathname:`/users/${id}/edit`, user: user,  x:'Appointment' }}>
                <Button>Update</Button>
             </Link>
           </div>
         </Card.Header>
         </Card.Content>
        </Card>

        <Button style={{marginBottom:'20px'}} color='green' onClick={()=> setShowNewForm(!showNewForm)} >
         {showNewForm ? 'hide form': 'New Appointment'}
        </Button>
       {showNewForm && <NewAppointmentForm setShowNewForm={setShowNewForm} addAppointment={addAppointment} userId={id} />}
      <Card.Group>
        {renderAppointments()}
      </Card.Group>
     
    </>
  )
}

export default User
