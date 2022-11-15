import React from 'react'

const ErrorHandler = ({ error, ...props }) => {
    return (
        <div {...props} >
            <p>An error occurred:</p>
            <pre>{error?.message}</pre>
        </div>
    )
}

export default ErrorHandler