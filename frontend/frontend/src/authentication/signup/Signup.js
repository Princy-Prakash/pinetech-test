import React,{useEffect, useState} from 'react'
import { Grid } from '@mui/material'
import './Signup.css'
import { Link } from 'react-router-dom'
import useForm from '../useForm'
const Signup = ({submitForm}) => {

   const {handleChange,handleFormSubmit,values,err} = useForm(submitForm)
  return (
    <div className='formsignup'>
        <h1 className='signHead'>Signup  </h1>
       <div className='appContainer'>
     
      <Grid container>
       
        <Grid item xs={6}>
          <img className='signImage' src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=740&t=st=1665374454~exp=1665375054~hmac=365cbf7eedeffdba69924b61920d7b28583208e22573db77e5d7f2bf1f57026e" alt="" />
        </Grid>

        <Grid item xs={6}>
        <form   style={{zIndex:"1000"}}>
        <input type="text" id="username" name="username" placeholder='Username' value={values.username} onChange={handleChange}  />  
        {err.username && <p style={{color:'red'}} className='error'>{err.username}</p>}
        <input type="email" id="email"  name="email" placeholder='Email'  value={values.email} onChange={handleChange} /> 
        {err.email && <p className='error' style={{color:'red'}} >{err.email}</p>}
        <input type="password" id="password"  name="password" placeholder='Password' value={values.password} onChange={handleChange} />   
        {err.password && <p className='error' style={{color:'red'}} >{err.password}</p>}
        <Link to='/login'> <button className='submit'  >Submit</button></Link> 
        <span className='form-input-label'>Already have an account?? Login <Link to='/login'> here...  </Link> </span>
        </form>
        </Grid>
       
        </Grid>
      
     
      </div>
    </div>
  )
}

export default Signup
