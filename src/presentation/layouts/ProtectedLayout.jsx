import React from 'react'

const ProtectedLayout = ({children, ...props}) => {
  return (
    <div {...props} >
        {children}
    </div>
  )
}

export default ProtectedLayout