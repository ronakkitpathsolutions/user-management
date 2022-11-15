import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { authRoutes, privateRoutes, publicRoute } from '../routes/route'
import CustomButton from './CustomButton'
import useNavbar from '../components/navbar'

const CustomNavBar = ({ logo, defaultLink, ...props }) => {
    const { role, isLogged, data, buttonData } = useNavbar()

    return (
        <Navbar {...props}>
            <Container>
                <Navbar.Brand>{logo || "Logo"}</Navbar.Brand>
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0">
                        {publicRoute().map(({ id, name, path }) => <NavLink key={id} className="nav-link" to={path} >{name}</NavLink>)}
                        {isLogged ?
                            privateRoutes(data?.role).map(({ id, name, path }) => <NavLink key={id} className="nav-link" to={path} >{name}</NavLink>) :
                            authRoutes().filter(val => !val.useAsLink).map(({ id, name, path }) => <NavLink key={id} className="nav-link" to={path} >{name}</NavLink>)
                        }
                    </Nav>
                    <div className='d-flex justify-content-end align-items-center' >
                        <h6 className='mb-0 text-white' >{role}</h6>
                        {(isLogged && buttonData) ? <CustomButton className="btn-danger ms-2" {...buttonData} /> : null}
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default CustomNavBar