import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const AuthLayout = ({isLogged, ...props}) => {
  return !isLogged ? <Outlet {...props} /> : <Navigate to="/" replace />
}

export default AuthLayout