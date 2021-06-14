import React, { useState } from 'react'
import ErrorMessage from './components/ErrorMessage'
import List from './components/List'
import Spinner from './components/Spinner'
import useAxiosOnMount from './customHooks/useAxiosOnMount'
import AppointmentForm from './AppointmentForm'
import useAxios from 'axios-hooks'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BUTTON } from './styles/styles'
import { Card, Button } from 'semantic-ui-react'

const Appointments = () => {
  const {data, loading, error, setData} = useAxiosOnMount('/api/appointments')
  const [showAppForm, setShowAppForm] = useState(false)

  const [
    { data: usersData},
    getUsersData
  ] = useAxios(
    {
      url: "/api/users",
      method: "get"
    },
    { manual: true }
  );

  const [
    { data: doctorsData},
    getDoctorsData
  ] = useAxios(
    {
      url: "/api/doctors",
      method: "get"
    },
    { manual: true }
  );

  const formatUsersData = () => {
    if(!usersData) return []
    return usersData.map (u => {
      return {key: u.id, text:u.last_name, value: u.id}
    })
  }
  
  const formatDoctorsData = () => {
    if(!doctorsData) return []
    return doctorsData.map (d => {
      return {key: d.id, text:d.last_name, value: d.id}
    })
  }

  const showAppUI = async () => {
    setShowAppForm(!showAppForm)
    getUsersData()
    getDoctorsData()
  }

  const addApp = (app) => {
    setData([app, ...data])
  }

  const deleteApp = async(id) => {
    let res = await axios.delete(`/api/appointments/${id}`)
    setData(data.filter(a => a.id !== res.data.id))
  }

  if(loading) return <Spinner />
  if(error) return <ErrorMessage error={error}/>

  return(
    <div>
      <Button onClick={showAppUI} basic color='violet'>Add Appointment</Button>
      {showAppForm && <AppointmentForm
        usersData={formatUsersData()}
        doctorsData={formatDoctorsData()}
        addApp={addApp}
      />}
      <List
        renderData={(app)=>{
          return(
            <Card>
            <div key={app.id} style={{padding: '10px'}}>
              <h4>ID: {app.id}. User {app.userlast_name} has an appointment with Dr.{app.doctorlast_name} on {app.date}.</h4>
              <Button onClick={()=>deleteApp(app.id)} basic color='red'>Delete</Button>
              <Link style={{textDecoration: 'none'}} to={`/appointments/${app.id}`}>Edit</Link>
            </div>
            </Card>
          )
        }}
        data={data}
        name='Appointments'
      />
      
    </div>
  )
}

export default Appointments