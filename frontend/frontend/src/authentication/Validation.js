 

const validation = (values) => {
    let err = {}
    if(!values.username){
        err.username = "Username is required"
    }
    if(!values.email){
        err.email = "Email is required"
    }
    else if(!/\S+@\S+\.\S+/.test(values.email)){
        err.email = "Email is invalid"
    }
    if(!values.password){
        err.password = "Password is required"
    }else if(values.password.length < 5){
        err.password = "Password must be more than 5 characters"
    }
  return  err
}

export default validation
