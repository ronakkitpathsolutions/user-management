import React from 'react'
import { Form } from 'react-bootstrap'

const CustomInput = ({ id, label, isOptional, errorMessage, className, ...props }) => {
    return <Form.Group {...{ className }} controlId={id}>
        <Form.Label>{label}</Form.Label>
        <Form.Control {...props} />
        {!isOptional ? <Form.Text className="text-danger">
            {errorMessage}
        </Form.Text> : null}
    </Form.Group>
}

export default CustomInput