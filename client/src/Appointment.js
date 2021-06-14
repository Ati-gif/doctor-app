import React, { useState } from 'react'
import { useParams } from 'react-router'
import useAxios from 'axios-hooks'
import useAxiosOnMount from './customHooks/useAxiosOnMount'
import { BUTTON } from './styles/styles'
import AppointmentForm from './AppointmentForm'

const Appointment = (props) => {
  const {data, setData} = useAxiosOnMount('/api/appointments')
  const [showAppForm, setShowAppForm] = useState(false)
  const {id} = useParams()

  
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

  const showAppUI = async () => {
    setShowAppForm(!showAppForm)
    getUsersData()
    getDoctorsData()
  }

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

  const editApp = (app) => {
    setData(data.map(a=> a.id === app.id ? app : a))
  }
  
  return(
    <div>
      <h1>Edit Appointment</h1>
      <BUTTON onClick={showAppUI}>Edit</BUTTON>
      {showAppForm && <AppointmentForm 
        id={id}
        usersData={formatUsersData()}
        doctorsData={formatDoctorsData()}
        editApp={editApp}
      />}
    </div>
  )
}
export default Appointment