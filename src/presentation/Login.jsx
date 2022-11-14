import React from 'react'
import { NavLink } from 'react-router-dom'
import CustomButton from '../common/CustomButton'
import CustomForm from '../common/CustomForm'
import CustomInput from '../common/CustomInput'
import useLogin from '../components/login'

const Login = () => {
    const { initialFormData, buttonData, handleSubmit } = useLogin()
    return (
        <div className='login-component d-flex justify-content-center align-items-center'>
            <CustomForm className="w-25" onSubmit={handleSubmit} >
                {
                    initialFormData.map(({id, ...val}) => <CustomInput className="mb-3" key={id}  {...val} />)
                }
                <NavLink to="/forgot-password" >Forgot Password?</NavLink>
                <CustomButton className="btn-primary w-100" {...buttonData}  />
            </CustomForm>
        </div>
    )
}

export default Login