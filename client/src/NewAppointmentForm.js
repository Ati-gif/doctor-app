import { Button, Form } from "semantic-ui-react"
import {useState} from 'react'
import axios from "axios"

const NewAppointmentForm = (props) => {
 
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [user, setUser] = useState('')

    const {doctorId, addAppointment, setShowNewForm} = props

    const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log({name, date, user})
        try{
          let res = await axios.post(`/api/doctors/${doctorId}/appointments`, {name, date, user})
          addAppointment(res.data)
          setShowNewForm(false)
        }
        catch(err){
            alert('err')
        }
    }
    return (
        <div>
            <h1>NewAppointmentForm</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Name</label>
                    <input 
                     value={name}
                     onChange={(e)=>setName(e.target.value)}
                     placeholder='Name'
                     />
                </Form.Field>
                <Form.Field>
                    <label>Date</label>
                    <input
                     value={date}
                     onChange={(e)=>setDate(e.target.value)}
                     placeholder='Date' />
                </Form.Field>
                <Form.Field>
                    <label>User</label>
                    <input 
                       value={user}
                       onChange={(e)=>setUser(e.target.value)}
                    placeholder='User' />
                </Form.Field>
  
                <Button type='submit'>Submit</Button>
            </Form>

        </div>
    )
}

export default NewAppointmentForm

