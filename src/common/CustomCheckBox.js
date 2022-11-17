import React from 'react'
import { Form } from 'react-bootstrap'

const CustomCheckBox = ({ id, label, isOptional, errorMessage, className, ...props }) => {
    return <Form.Group {...{ className }} controlId={id}>
        <Form.Check {...{label, id}} {...props} />
        {!isOptional ? <Form.Text className="text-danger">
            {errorMessage}
        </Form.Text> : null}
    </Form.Group>
}

export default CustomCheckBox