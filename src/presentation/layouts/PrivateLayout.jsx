import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateLayout = ({isLogged, ...props}) => {
  return isLogged ? <Outlet {...props} /> : <Navigate to='/login' replace />
}

export default PrivateLayout