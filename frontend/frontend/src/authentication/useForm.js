import React,{useEffect, useState} from 'react'
import validation from "./Validation"

const useForm = (submitForm) =>{

    const [values,setValues] = useState({
        username:"",
        email:"",
        password:""
    })
    
    const [err,setErrs] = useState({})
    const[dataCorrect,setDataCorrect] = useState(false)
    const handleChange =(e)=>{
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }
    const handleFormSubmit = (e) =>{
        e.preventDefault()
        setErrs(validation(values)) 
        setDataCorrect(true)
        
    }
    useEffect(()=>{
        if(Object.keys(err).length === 0 && dataCorrect){
            submitForm(true)
        }
    })
    return {handleChange,handleFormSubmit,values,err}
}

export default useForm

