import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { withAuth } from '../../higher-order-components/withAuth'

const PrivateLayout = ({isLogged, ...props}) => <WithAuthOrNot to="/login" replace {...{isLogged}} {...props} />

export default PrivateLayout

const WithAuthOrNot = withAuth(Outlet, Navigate)