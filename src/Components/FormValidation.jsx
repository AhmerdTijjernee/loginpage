
const FormValidation = (values) => {

    const ErrorMessage = {};

    if(!values.email){
        ErrorMessage.email = 'Email is required'
    }
    else if(!/\S+@\S+\.\S+/.test(values.email)){
        ErrorMessage.email = 'Email is not valid'
    }
    if(!values.password){
        ErrorMessage.password = 'password is required'
    }
    else if(values.password.length < 7){
        ErrorMessage.password = 'password should be More than 6 characters'
    }
    else if(values.password.length > 15){
        ErrorMessage.password = 'password should be less than 16 characters'
    }

  return ErrorMessage;
}

export default FormValidation;