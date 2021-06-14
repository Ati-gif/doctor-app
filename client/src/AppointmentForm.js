import axios from 'axios'
import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'


const AppointmentForm = (props) => {
  const {usersData, doctorsData, addApp, editApp, id} = props

  const [date, setDate] = useState('')
  const [userID, setUserID] = useState('')
  const [doctorID, setDoctorID] = useState('')

  const handleSubmit = async () => {
    try{
      if(id){
        let res = await axios.put(`/api/appointments/${id}`, 
        {date: date, user_id: userID, doctor_id: doctorID}
      )
      editApp(res.data)
      }else {
        let res = await axios.post(`/api/appointments`, 
          {date: date, user_id: userID, doctor_id: doctorID}
        )
        addApp(res.data)
      }
    } catch(err) {
      console.log('err',err)
    }
  }

  const userChanged = (e, {value}) => {
    setUserID(value)
  }

  const doctorChanged = (e, {value}) => {
    setDoctorID(value)
  }

  return(
    <div>
     
      <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Input
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        fluid 
                        label='Date'
                        placeholder='Date'
                    />

                    <Form.Select
                        onChange={userChanged}
                        fluid
                        label='User'
                        options={usersData}
                        placeholder='User'
                    />
                    <Form.Select
                        onChange={doctorChanged}
                        fluid
                        label='Doctor'
                        options={doctorsData}
                        placeholder='Doctor'
                    />
                </Form.Group>
                <Form.Button>Submit</Form.Button>
            </Form>
            
    </div>
  )
}

export default AppointmentForm