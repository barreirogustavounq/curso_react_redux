import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import userAction from '../../actions/user'
import {Form, Button, Alert} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'
import './login.css'

const Login = ({user, login, history}) => {
    const [userName, setUserName] = useState('')
    const [userPassword, setPassword] = useState('')

    useEffect(()=> {
        if(user.authUser){
            history.push('/')
        }
    },[history, user])
    
    return(
        <div className='login__container'>
            <div className='col-sm-12- col-md-6 login__card-form'>
                <h3>
                    Bienvenidos ReduxPuppies!
                </h3>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={userPassword} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={()=> login(userName, userPassword)} variant="primary">
                        Submit
                    </Button>
                    {
                        user.error && (
                            <Alert  variant={"danger"}>
                                {user.error}
                            </Alert>
                        )
                    }
                    </Form>
            </div>
        </div> 
    )
}

const mapStateToProps = ({user})=> ({
    user
})

const mapDispatchToProps = () => ({
    ...userAction
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps())(Login));