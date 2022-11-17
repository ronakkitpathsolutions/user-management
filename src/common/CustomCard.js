import React from 'react'
import { Card } from 'react-bootstrap'

const CustomCard = ({cardClassName, title, children, titleDescription, subTitleClassName, ...props }) => {
    return (
        <div {...props}>
            <Card className={cardClassName}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className={subTitleClassName}>{titleDescription}</Card.Subtitle>
                    <Card.Text>{children}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CustomCard