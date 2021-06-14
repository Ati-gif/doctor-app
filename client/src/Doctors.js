import React from 'react'
import { Link } from 'react-router-dom'
import ErrorMessage from './components/ErrorMessage'
import List from './components/List'
import Spinner from './components/Spinner'
import useAxiosOnMount from './customHooks/useAxiosOnMount'

const Doctors = () => {
  const {data, loading, error} = useAxiosOnMount('/api/doctors')

  if(loading) return <Spinner />
  if(error) return <ErrorMessage error={error}/>

  return(
    <div>
      <List 
      renderData={(doctor)=>{
        return(
          <Link key={doctor.id} to={`/doctors/${doctor.id}`}>
            <h1>{doctor.last_name}, {doctor.specialty}</h1>
          </Link>
        )
      }}
      data={data}
      name='Doctors'/>
    </div>
  )
}

export default Doctors