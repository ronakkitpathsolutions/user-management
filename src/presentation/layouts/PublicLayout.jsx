import React from 'react'
import { Outlet } from 'react-router-dom'

const PublicLayout = ({defaultAccess, ...props}) => {
  return (
    <div {...props} >{defaultAccess ? <Outlet/> : <p>Not found</p>}</div>
  )
}

export default PublicLayout