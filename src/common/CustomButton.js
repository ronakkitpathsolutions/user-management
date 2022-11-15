import React from 'react'
import { Button } from 'react-bootstrap'

const CustomButton = ({ label, typeKey, initialData, handleClick, ...props }) => {
    switch (typeKey) {
        case 'multiple':
            return initialData.map(({ id, lebels, ...otherData }) => <Button key={id} {...props} {...otherData} >{lebels}</Button>)
        default: return <Button {...props} onClick={() => handleClick && handleClick()} >{label}</Button>
    }
}

export default CustomButton