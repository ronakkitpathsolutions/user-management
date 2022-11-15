const requiredErrors = {
    email: "Email is required.",
    password: "Password is required.",
}

const invalidErrors = {
    email: "Invalid email address.",
    password: "Invalid password.",
}

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


export const handleValidation = (name, value) => {
    switch (name) {
        case 'email':
            if(!value || value.trim() === ""){
                return requiredErrors[name]
            }else if(!value.toLowerCase().match(emailRegex)){
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