import { useContext, useState } from 'react'
import { handleValidation } from '../utils/validation'
import userCredentials from '../db/index.json'
import { addDataFromLocal } from '../utils/storage'
import MyContext from '../context'
import useHistory from '../hooks/history'

const initialState = {
    email: "",
    password: ""
}

const useLogin = (props) => {
    const { setData } = useContext(MyContext);
    const [formData, setFormData] = useState({...initialState})
    const [error, setError] = useState({...initialState})
    const { history } = useHistory()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        setError({
            ...error, [name]: handleValidation(name, value)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errorObj = {}
        Object.keys(formData).forEach(name => {
            const message = handleValidation(name, formData[name])
            if(message){
                errorObj[name] = message
            }
        })
        if (Object.keys(errorObj).length) {
            setError({...errorObj})
            return
        }

        const credentials = userCredentials.users
        const cloneData = [...credentials].filter(({email, password}) => email === formData.email && password === formData.password)

        if(cloneData.length){
            addDataFromLocal('user', JSON.stringify({...cloneData?.[0], isLogged: true}))
            setData({...cloneData?.[0], isLogged: true})
            history('/dashboard')
        }
        
    }

    const initialFormData = [
        {
            id: "email",
            name: "email",
            label: "Email address",
            placeholder: "user@xyz.com",
            type: "email",
            value: formData?.email,
            onChange: handleChange,
            errorMessage: error?.email,
        },
        {
            id: "password",
            name: "password",
            label: "Password",
            placeholder: "*******",
            type: "password",
            value: formData?.password,
            onChange: handleChange,
            errorMessage: error?.password,
        }
    ]

    const buttonData = {
        id: "login",
        type: "submit",
        label: "Login"
    }


    return { initialFormData, buttonData, handleSubmit }
}

export default useLogin