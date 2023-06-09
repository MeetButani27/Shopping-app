import React from 'react'
import { MDBCol, MDBRow, MDBCard, MDBCardBody} from 'mdb-react-ui-kit';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { IconButton, InputAdornment } from '@mui/material';

function Signup() {
    
    const [eye1, setEye1] = useState(false);
    const handleEye1 = () => {
        setEye1(!eye1);
    };

    const [eye2, setEye2] = useState(false);
    const handleEye2 = () => {
        setEye2(!eye2);
    };

    const [users, setUsers] = useState({
        f_name: "",
        l_name: "",
        email_id:"",
        mobile_no: "",
        password: "",
        re_password: ""
      });

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUsers({...users, [name]:value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(users);
    
        axios.post('http://localhost:9000/adduser', users)
        .then((res) => alert('Account created successfully !!'))
        .catch((err) => console.log(err))
    };


    return (
    <>
        <div className='px-5 pt-3' style={{ 'backgroundImage': 'linear-gradient(to left bottom, #d6a933, #deb93b, #e5c945, #ebda4f, #f0eb5b)' }}>
            <MDBRow>
                <MDBCol md='7' className='text-center text-md-start d-flex flex-column justify-content-center'>
                    <h1 className="mt-1 mb-5 display-3 fw-bold ls-tight px-3">
                        The best offers just <br />
                        <span className="text-danger">for you !!</span>
                    </h1>
                    <p className='px-3' style={{color: 'white', 'fontSize': '20px' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                        quibusdam tempora at cupiditate quis eum maiores libero
                        veritatis? Dicta facilis sint aliquid ipsum atque?
                    </p>
                </MDBCol>

                <MDBCol md='5'>

                    <MDBCard className='mt-3 mx-2 mb-4' style={{ 'backgroundColor': '#faebf0' }}>
                    <MDBCardBody className='px-5 mt-3'>

                        <h3 className='pb-2'>Sign Up to get started</h3>

                        <div className='pt-2' style={{ 'display': 'flex', 'justifyContent': 'space-between'}}>
                            <TextField id="outlined-required" 
                                label="First name" 
                                name="f_name"
                                value={users.f_name}
                                onChange={(e) => handleChange(e) }
                                style={{ 'width': '48%' }} 
                                required />
                                
                            <TextField id="outlined-required" 
                                label="Last name"
                                name="l_name"
                                value={users.l_name}
                                onChange={(e) => handleChange(e) }
                                style={{ 'width': '48%' }}
                                required />
                        </div>  

                        <div className='pt-3' style={{ 'display': 'flex', 'justifyContent': 'space-between'}}>
                            <TextField id="outlined-required" 
                                label="Email address"
                                name="email_id"
                                value={users.email_id}
                                onChange={(e) => handleChange(e) }
                                style={{ 'width': '100%' }}
                                required />
                        </div>

                        <div className='pt-3' style={{ 'display': 'flex', 'justifyContent': 'space-between'}}>
                            <TextField id="outlined-required" 
                                label="Mobile no."
                                name="mobile_no"
                                value={users.mobile_no}
                                onChange={(e) => handleChange(e) }
                                style={{ 'width': '100%' }}
                                // inputProps={{
                                //     maxLength: 10,
                                //     pattern: '[0-9]*',
                                // }}
                                required />
                        </div>  

                        <div className='pt-3' style={{ 'display': 'flex', 'justifyContent': 'space-between'}}>
                            <TextField id="outlined-required" 
                                label="Password"
                                name="password"
                                type= { eye1 ?  "text":"password"}
                                value={users.password}
                                onChange={(e) => handleChange(e) }
                                style={{ 'width': '100%' }}
                                InputProps={{
                                    endAdornment: <InputAdornment position='end'>
                                        <IconButton onClick={ handleEye1 }>
                                            { eye1 ? <VisibilityIcon /> : <VisibilityOffIcon /> }
                                        </IconButton>
                                    </InputAdornment>
                                }}
                                required />
                        </div>

                        <div className='pt-3' style={{ 'display': 'flex', 'justifyContent': 'space-between'}}>
                            <TextField id="outlined-required" 
                                label="Confirm Password"
                                name="re_password"
                                type= { eye2 ?  "text":"password"}
                                value={users.re_password}
                                onChange={(e) => handleChange(e) }
                                style={{ 'width': '100%' }}
                                InputProps={{
                                    endAdornment: <InputAdornment position='end'>
                                        <IconButton onClick={ handleEye2 }>
                                            { eye2 ? <VisibilityIcon /> : <VisibilityOffIcon /> }
                                        </IconButton>
                                    </InputAdornment>
                                }}
                                required />
                        </div>

                        <Button variant="contained" className="my-3 px-5 py-2" type="submit" onClick={(e) => handleSubmit(e)} style={{ 'width': '100%' }} endIcon={<SendIcon />}> Sign Up </Button>
            

                        <div className="text-center">
                            <h6 className='py-2'>or Sign up with:</h6>
                            <IconButton>    
                                <GoogleIcon size="large" className='mx-4' style={{ 'color': 'red', 'fontSize': '30px' }} />
                            </IconButton>
                            <IconButton>
                                <TwitterIcon size="large" className='mx-4' style={{ 'color': '#03c2fc', 'fontSize': '30px' }} />
                            </IconButton>
                            <IconButton>
                                <GitHubIcon size="large" className='mx-4' style={{ 'color': 'black', 'fontSize': '30px' }} />
                            </IconButton>
                            <IconButton>
                                <FacebookIcon size="large" className='mx-4' style={{ 'color': 'blue', 'fontSize': '34px' }} />
                            </IconButton>
                        </div>


                        <div style={{ 'margin': '0px', 'padding': '0px' }} className='text-center pt-2'>
                            <hr />
                            <p>Already have an account? <Link to="/login">Login here </Link></p>
                        </div>

                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </div>
    </>
  )
}

export default Signup;