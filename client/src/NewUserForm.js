import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'

const NewFormUser = () => {
    const [last_name, setName] = useState('')
    const history = useHistory()

    const handleSubmit = async()=>{
        try{
          axios.post(`/api/users`,{last_name})
          history.push('/users')
        }catch(err){
          alert('error')
        }
    }
    return(
        <div>
            <h1>NewFormUser</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Name</label>
                    <input 
                     value={last_name}
                     onChange={(e)=> setName(e.target.value)}
                     defaultValue={last_name} 
                     placeholder='Name' />
                </Form.Field>

                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default NewFormUser
