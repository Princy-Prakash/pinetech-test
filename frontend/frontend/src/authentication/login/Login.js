import React from 'react'
import { Grid } from '@mui/material'
import './Login.css'
const Login = () => {
  return (
    <div className='formsignup'>
    <h1 className='signHead'>Login  </h1>
   <div className='appContainer'>
 
  <Grid container>
   
    <Grid item xs={6}>
      <img className='signImage' src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?size=338&ext=jpg&ga=GA1.2.531248554.1663503756&semt=sph" alt="" />
    </Grid>

    <Grid item xs={6}>
    <form   style={{zIndex:"1000"}}>
    <input type="text" id="username" name="username" placeholder='Username'   />   
    <input type="password" id="password"  name="password" placeholder='Password'  />   
    <button className='submit'>Submit</button> 
    </form>
    </Grid>
   
    </Grid>
  
 
  </div>
</div>
  )
}

export default Login
