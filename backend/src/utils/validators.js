const validateUser = (userData) => {
    const errors = {}

    if(!userData.name?.trim()){
        errors.name = "Name is required"
    }
    if(!userData.email?.trim()){
        errors.email = "Email is required"
    }
    else if (!/\S+@\S+\.\S+/.test(userData.email)) {
        errors.email = 'Invalid email format';
    }
    if(!userData.password?.trim()){
        errors.password = "Password is required"
    }
    else if(userData.password.length < 6){
        errors.password = "Password must be at least 6 characters"
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    }
}

export default { validateUser }