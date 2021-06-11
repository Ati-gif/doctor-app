import axios from "axios"
import { Link } from "react-router-dom"
import { Card , Button} from "semantic-ui-react"

const Appointment = (props)=>{
    const {doctorId, userid, id, name, date, deleteAppointment} = props

    const deleteAppointmentClickHandler = async ()=>{
      try{
      let res = await axios.delete(`/api/doctors/${doctorId}/appointments/${id}`)  
      console.log(res)
      deleteAppointment(id)
      } catch(err){
        alert('err')
      }
    }
    return (
        <Card>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{date} Date</Card.Meta>
          <Card.Description>
            Patient: {userid}
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
           <div >
             <Button onClick={deleteAppointmentClickHandler} color='red'>Delete</Button>
             <Link to={`/doctors/${doctorId}/appointments/${id}/edit`}>
                <Button >Update</Button>
             </Link>
           </div>
        </Card.Content>
      </Card>
    )
}
export default Appointment
