import React, { useState } from 'react'   
import FormSuccess from './formSuccess'
import Signup from './signup/Signup'

const Form = () => {
    const [formSubmit,setFormSubmit] = useState(false)
    const submitForm = () =>{
        setFormSubmit(true)
    }
  return (
    <div>
       {!formSubmit ? <Signup submitForm={submitForm}/> :  <FormSuccess/>}
    </div>
  )
}

export default Form
