import React from 'react'
import { Button } from 'react-bootstrap'

const CustomButton = ({label, key, initialData, handleClick, ...props}) => {
  switch (key) {
    case 'multiple':
        if(Array.isArray(initialData)) return initialData.map(({id, lebel, ...otherData}) => <Button key={id} {...props} {...otherData} >{label}</Button>)
        break;
        default: return <Button {...props} onClick={() => handleClick && handleClick()} >{label}</Button>
  }
}

export default CustomButton