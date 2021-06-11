import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const Doctors =() => {
  const [doctors,setDoctors] = useState([])
  const [toggleThing, setToggleThing] = useState(false)
    
  useEffect(()=>{
    console.log('use Effect called')
      getDoctors()
    },[])


    const getDoctors = async () =>{
       try{
         let res = await axios.get('/api/doctors')
         setDoctors(res.data)
       } catch(err){
         alert('error occured look at console')
       }
    }

    const renderDoctors =()=>{
      return doctors.map( doctor => {
        return(
          <Link to={`/doctors/${doctor.id}`}>
            <div>
              {doctor.name}
            </div>
          </Link>
        )
      })
    }

    return (
        <>
          <h1 style={{display:'flex', justifyContent:'space-between'}}>
            <span>Doctors</span>
            <Link to='/doctors/new'>
              <Button>New Doctor</Button>
            </Link>
            <Button onClick={()=>setToggleThing(!toggleThing)}>toggleThing</Button>
            {toggleThing && <p>Appointment</p>}
          </h1>
          {renderDoctors()}
        </>
    )
}

export default Doctors
