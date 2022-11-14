const requiredErrors = {
    email: "Email is required.",
    password: "Password is required.",
}

const invalidErrors = {
    email: "Invalid email address.",
    password: "Invalid password.",
}

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export const handleValidation = (name, value) => {
    switch (name) {
        case 'email':
            if(!value || value.trim() === ""){
                return requiredErrors[name]
            }else if(!emailRegex.test(value)){
                return invalidErrors[name]
            }else return null
        case 'password':
            if(!value || value.trim() === ""){
                return requiredErrors[name]
            }else if(value.length > 8 || value.length < 6){
                return "password length should be between 6-8 characters."
            }else return null
        default: return null
    }
}