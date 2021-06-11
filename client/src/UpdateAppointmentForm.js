import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'

const UpdateAppointmentForm = () => {
    const { doctorId, id } = useParams()
    const [ doctor, setDoctor ] = useState(null)
    const [ name, setName] = useState('')
    const [ date, setDate] = useState('')
    const [ user, setUser] = useState('')
    const history = useHistory()
    
    useEffect(() => {
        getAppointment()
    }, [])

    const getAppointment = async () => {
        try {
            let res = await axios.get(`/api/doctors/${doctorId}/appointments/${id}`)
            setDoctor(res.data)
            setName(res.data.name)
            setDate(res.data.date)
            setUser(res.data.user)
        } catch (err) {
            alert(err)
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault() 
        console.log({user, name, date})
        try{
            axios.put(`/api/doctors/${doctorId}/appointments/${id}`,{user, name, date})
            
            history.goBack()
           
        }catch(err){
           alert(err)
        }
    }
    
    if (!doctor) {
        return <p>getting Doctor</p>
    }
    
    return (
        <div>
            <h1>UpdateAppointmentForm</h1>
            <p>doctor id: {doctorId} </p>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Name</label>
                    <input 
                     value={name}
                     onChange={(e)=> setName(e.target.value)}
                     defaultValue={name} 
                     placeholder='Name' />
                </Form.Field>
                <Form.Field>
                    <label>Date</label>
                    <input 
                     value={date}
                     onChange={(e)=> setDate(e.target.value)}
                     defaultValue={date} 
                     placeholder='Date' />
                </Form.Field>
                <Form.Field>
                    <label>User</label>
                    <input  
                     value={user}
                     onChange={(e)=> setUser(e.target.value)}
                    defaultValue={user} 
                    placeholder='User' />
                </Form.Field>

                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default UpdateAppointmentForm
