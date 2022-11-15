import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { withAuth } from '../../higher-order-components/withAuth'

const AuthLayout = ({isLogged, ...props}) => <WithAuthOrNot to="/" replace isLogged={!isLogged} {...props} />
export default AuthLayout

const WithAuthOrNot = withAuth(Outlet, Navigate)