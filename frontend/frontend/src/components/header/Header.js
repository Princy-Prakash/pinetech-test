import { AppBar } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <AppBar position='static' className='appbar'>
      <div class="uk-inline">
      <Link to="signup"><button className='loginButton'>Login</button></Link>
         
       </div> 
      </AppBar>
    </div>
  )
}

export default Header