import React from 'react'
import { Form } from 'react-bootstrap'

const CustomForm = ({children, ...props}) => <Form {...props} >{children}</Form>

export default CustomForm