import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Button, Dropdown, Form } from 'semantic-ui-react'
import {  DateTimeInput, } from 'semantic-ui-calendar-react';
import {useParams, useLocation, useHistory} from 'react-router-dom'

const AppointmentForm = (props) => {
    const location = useLocation()
    const params = useParams()
    const history = useHistory()
    console.log(location)
    console.log(params)
    const [doctors, setDoctors] = useState([])
    const [users, setUsers] = useState([])
    const [date, setDate] = useState(location.date ? location.date : null )
    const [selectedUser, setSelectedUser] = useState(location.user_id ? location.user_id : null )
    const [selectedDoctor, setSelectedDoctor] = useState(location.doctor_id ? location.doctor_id : null)

    useEffect(() => {
        getDoctors()
    }, [])
    const getDoctors = async () => {
        let res = await axios.get('/api/doctors')
        let res1 = await axios.get('/api/users')
        
        let selectDoctorData = res.data.map(doctor => {
            return { key: doctor.id, value: doctor.id, text: doctor.last_name }
        })
        let selectUserData = res1.data.map(user => {
            return { key: user.id, value: user.id, text: user.last_name }
        })
        setDoctors(selectDoctorData)
        setUsers(selectUserData)
    }

    const handleSubmit = async () => {
       if(params.id){
           
        let res = await axios.put(`/api/appointments/${params.id}`, {
            doctor_id: selectedDoctor,
            user_id: selectedUser,
            date: date,
        })
       }
       else {
        
        let res = await axios.post('/api/appointments', {
            doctor_id: selectedDoctor,
            user_id: selectedUser,
            date: date,
        })
       }

       history.push('/appointments')

    }
    const handleChange = (event, {name,value}) => {
        console.log(value)
        console.log(name)
        setDate(value)
    }
    return (
        <div>
            <h1>AppointmentForm</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Field>
                        <label>Doctor</label>
                        <Dropdown
                            defaultValue ={selectedDoctor}
                            onChange={(e, { value }) => setSelectedDoctor(value)}
                            placeholder='Doctors'
                            fluid
                            search
                            selection
                            options={doctors}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Users</label>
                        <Dropdown
                            defaultValue ={selectedUser}
                            onChange={(e, { value }) => setSelectedUser(value)}
                            placeholder='Users'
                            fluid
                            search
                            selection
                            options={users}

                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Date</label>
                        <DateTimeInput 
                            name="date"
                            placeholder="Date Time"
                            value={date}
                            iconPosition="left"
                            onChange={handleChange}
                        />
                    </Form.Field>
                </Form.Group>
                <Button type='submit' basic color='green' >Submit</Button>
            </Form>
        </div>
    )
}

export default AppointmentForm
