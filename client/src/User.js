import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ErrorMessage from './components/ErrorMessage'
import List from './components/List'
import Spinner from './components/Spinner'
import useAxiosOnMount from './customHooks/useAxiosOnMount'


const User = () => {
  const {id} = useParams()
  const {data, loading, error} = useAxiosOnMount(`/api/users/${id}`)
  const [doctors, setDoctors] = useState([])

  useEffect(()=>{
    getDoctors()
  }, [])

  
    const getDoctors = async () => {
      let res = await axios.get(`/api/doctors`)
      setDoctors(res.data)
    }

       
    if(loading) return <Spinner />
    if(error) return <ErrorMessage error={error}/>
    return(
    <div>
      <List 
        last_name={`Appointments for ${data.user}`}
        data={data.appointment}
        renderData = {(a)=> {
          return (
            <div key={a.id} style={{marginBottom: '15px'}}>
              <h2>{a.doctor}</h2>
              <h4>{a.appDate}</h4>
           </div>
          )
        }}
      />
    </div>
  )
}

export default User