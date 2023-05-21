import React from 'react'
import { MDBCol, MDBRow, MDBCard, MDBCardBody} from 'mdb-react-ui-kit';
import { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment } from '@mui/material';
import axios from 'axios';

function Login(props) {
    
    const [eye, setEye1] = useState(false);
    const handleEye = () => {
        setEye1(!eye);
    };

    const [user, setUser] = useState({
        email_id: "",
        password: ""
    });

    const navigate = useNavigate ();

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({...user, [name]:value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        
        if(user.email_id && user.password) {
            axios.post('http://localhost:9000/userlogin', user)
            .then((res) => {
                console.log(res.data);
                if(res.data.token){
                    localStorage.setItem("accessToken", res.data.token);
                    navigate('/home');
                    props.setUserLoggedIn(true);
                }
            })
            .catch((err) => {
                console.log(err);
            });
        }
        else {
            alert('All the fields are mandatory to be filled!');
        }
    };


    return (
        <>
            <div className='px-5 pt-3' style={{ 'backgroundImage': 'linear-gradient(to right top, #7feec4, #00cdd8, #00a6fb, #0074ff, #4419d3)' }}>

            <MDBRow>
                <MDBCol md='7' className='text-center text-md-start d-flex flex-column justify-content-center'>
                    <h1 className="my-5 display-3 fw-bold ls-tight px-3">
                        The best offers just <br />
                        <span className="text-danger">for you !!</span>
                    </h1>
                    <p className='px-3' style={{color: 'black'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                        quibusdam tempora at cupiditate quis eum maiores libero
                        veritatis? Dicta facilis sint aliquid ipsum atque?
                    </p>
                </MDBCol>

                <MDBCol md='5'>

                    <MDBCard className='mx-3' style={{ 'backgroundColor': '#f1e8fa', 'marginTop': '80px', 'marginBottom': '89px' }}>
                    <MDBCardBody className='px-5 mt-4 '>

                        <h3 className='pb-4'>Log In to continue</h3>

                        <div className='py-3' style={{ 'display': 'flex', 'justifyContent': 'space-between'}}>
                            <TextField
                                label="Email address"
                                name="email_id"
                                type="email"
                                value={user.email_id}
                                onChange={(e) => handleChange(e) }
                                style={{ 'width': '100%' }}
                                required />
                        </div>

                        <div className='pt-1 pb-4' style={{ 'display': 'flex', 'justifyContent': 'space-between'}}>
                            <TextField
                                label="Password"
                                name="password"
                                type= { eye ?  "text":"password"}
                                value={user.password}
                                onChange={(e) => handleChange(e) }
                                style={{ 'width': '100%' }}
                                InputProps={{
                                    endAdornment: <InputAdornment position='end'>
                                        <IconButton onClick={ handleEye }>
                                            { eye ? <VisibilityIcon /> : <VisibilityOffIcon /> }
                                        </IconButton>
                                    </InputAdornment>
                                }}
                                required />
                        </div>

                        <Button variant="contained" className="my-4 px-5 py-2" type="submit" onClick={(e) => handleSubmit(e)} style={{ 'width': '100%' }} endIcon={<SendIcon />}> Log In </Button>
                        
                        {/* <hr />

                        <div className="text-center py-3">
                            <h6 className='pb-3'>or Login in with:</h6>

                            <GoogleIcon size="large" className='mx-4' style={{ 'color': 'red', 'fontSize': '30px' }} />
                            <TwitterIcon size="large" className='mx-4' style={{ 'color': '#03c2fc', 'fontSize': '30px' }} />
                            <GitHubIcon size="large" className='mx-4' style={{ 'color': 'black', 'fontSize': '30px' }} />
                            <FacebookIcon size="large" className='mx-4' style={{ 'color': 'blue', 'fontSize': '30px' }} />
                        </div> */}

                        
                        
                        <div style={{ 'margin': '0px', 'padding': '0px' }} className='text-center pt-4'>
                            <hr />
                            <p>Don't have an account? <Link to="/signup">Sign Up here </Link></p>
                        </div>

                    </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>
            </div>
        </>
    )
}

export default Login;