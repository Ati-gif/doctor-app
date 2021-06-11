import { useParams, useLocation, useHistory } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { Button, Form } from 'semantic-ui-react'

const UpdateFormDoctor = (props) => {
    const history = useHistory()
    let { doctor, x } = useLocation(); 
    const { id } = useParams()
    const [name, setName] = useState(doctor.name)
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let res = await axios.put(`/api/doctors/${id}`, { name: name })
            history.goBack()
        } catch (error) {
            alert('err')
        }
        console.log({ name: name })
    }
    
    return (
        <div>
            <h1>UpdateFormDoctor {x}</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Name</label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
 

}

export default UpdateFormDoctor
