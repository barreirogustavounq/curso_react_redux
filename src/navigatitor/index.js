import React from 'react'
import {withRouter} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import './navigation.css'
import { connect } from 'react-redux'

 const Navigator = ({history, user}) => (
    <Navbar className="navigation__container" collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand > 
        <Nav className="ml-auto">
            <Nav.Link  onClick={()=> history.push("/")}>
                    ReactPuppies
            </Nav.Link>
        </Nav>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
            {!user.authUser ? 
                (<Nav.Link onClick={()=> history.push('/login')}>Login</Nav.Link>)
                :
            (<span>{user.authUser.fullName}</span>)
            }
        </Nav>
    </Navbar.Collapse>
</Navbar>
)

const mapStateToProps = ({user})=> ({
    user
})

export default withRouter(connect(mapStateToProps, null)(Navigator));