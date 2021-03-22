import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Login.css';

import { useHistory, useLocation } from 'react-router-dom';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Header from '../Header/Header';
import { createUserWithEmailAndPassword, handleFbSignIN, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './LoginHandler';
import { userContext } from '../../App';

const SigninSignup = () => {
    const [newUser,setNewUser] = useState(false)
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        cPassword: '',
        error: '',
        success: false
    });

        // use context api
        initializeLoginFramework();
        const [loggedInUser, setLoggedInUser] = useContext(userContext);
        // to redirect user clicked link after signin/signup complete
        const history = useHistory();
        const location = useLocation();
        const { from } = location.state || { from: { pathname: "/" } };

        const googleSignIn = () => {
            handleGoogleSignIn()
                .then(res => {
                    handleResponse(res, true)
                })
        }
        const signOut = () => {
            handleSignOut()
                .then(res => {
                    handleResponse(res, false)
                })
        }
        const facebookSignIN = () => {
            handleFbSignIN()
                .then(res => {
                    handleResponse(res, true)
                })
        }

  
        const handleRegistration = (e) => {
            //console.log(handleInput)
            
            if (newUser && user.email && user.password === user.cPassword) {
                createUserWithEmailAndPassword(user.name, user.email, user.password)
                    .then(res => {
                        handleResponse(res, true)
                    })
            }
            if (!newUser && user.email && user.password) {
                signInWithEmailAndPassword(user.email, user.password)
                    .then(res => {
                        handleResponse(res, true)
                    })
            } e.preventDefault()
        };
       
        const handleResponse = (res, redirect) =>{
            setUser(res)
            setLoggedInUser(res)
            if(redirect){
                history.replace(from)
            }
        }
  

    // }
    const handleBlur = (e) => {

        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
            console.log(isFieldValid);
        } if (e.target.name === 'password') {
            const passHasOneDigit = /^(?=.*\d)/.test(e.target.value);
            const passHasSixthValue = e.target.value.length > 6;
            isFieldValid = passHasOneDigit && passHasSixthValue;
        }
        if(e.target.name === 'cPassword'){
            const passHasOneDigit = e.target.value.length > 7;
            const passHasSixthValue =  /\d{1}/.test(e.target.value);
            isFieldValid = passHasOneDigit && passHasSixthValue;
          } if (isFieldValid) {
            // [...car, newItem]
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }



    return (
        <div className="login-body">
            <Header />

            <div className="toggle-form">
                {/* New user registration */}
                <Form onSubmit={handleRegistration}>
                    {
                        newUser ?
                            <>
                                <Form.Group>
                                    <Form.Control onBlur={handleBlur} name="name" type="text" placeholder="Last Name" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control onBlur={handleBlur} name="email" type="email" placeholder="Email" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control onBlur={handleBlur} name="password" type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control onBlur={handleBlur} name="cPassword" type="password" placeholder="Confirm password" />
                                </Form.Group>
                                
                            </> :
                            <>
                                <Form.Group>
                                    <Form.Control onBlur={handleBlur} name="email" type="email" placeholder="Email" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control onBlur={handleBlur} name="password" type="password" placeholder="Password" />
                                </Form.Group>
                                
                            </>
                    }
                                 <p>{ newUser ? 'Already have an account?' : "Don't have an account?"} <span onClick={()=> setNewUser(!newUser)}>{ newUser ? 'Login' : 'Create an account'}</span></p>
                                <Button className="w-100" variant="warning" type="submit">
                                    Login
                                </Button>
                </Form>



            </div>


            {/* //Sign in with facebook & google */}
            <div className="fb-google-body">
                <Button onClick={googleSignIn} variant="primary rounded-pill">
                    <FontAwesomeIcon icon={faGoogle} /> Continue With Google
                </Button>

                <Button onClick={facebookSignIN} color="primary" variant="primary rounded-pill">
                    <FontAwesomeIcon icon={faFacebook} /> Continue With facebook
                </Button>
            </div>


        </div>
    );
}
export default SigninSignup