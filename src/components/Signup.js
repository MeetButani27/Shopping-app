import React from 'react'
import { MDBCol, MDBRow, MDBCard, MDBCardBody} from 'mdb-react-ui-kit';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <>
        <div className='px-5 pt-3'>

        <MDBRow>
            <MDBCol md='7' className='text-center text-md-start d-flex flex-column justify-content-center'>
                <h1 className="my-5 display-3 fw-bold ls-tight px-3">
                    The best offers just <br />
                    <span className="text-primary">for you !!</span>
                </h1>
                <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                    quibusdam tempora at cupiditate quis eum maiores libero
                    veritatis? Dicta facilis sint aliquid ipsum atque?
                </p>
            </MDBCol>

            <MDBCol md='5'>

                <MDBCard className='mt-3 mx-2' style={{ 'backgroundColor': '#faebf0' }}>
                <MDBCardBody className='px-5 mt-4'>

                    <h3 className='pb-2'>Sign Up to get started</h3>

                    <div className='pt-2' style={{ 'display': 'flex', 'justifyContent': 'space-between'}}>
                        <TextField id="outlined-required" label="First name" style={{ 'width': '48%' }} />
                        <TextField id="outlined-required" label="Last name" style={{ 'width': '48%' }} />
                    </div>  
                    <div className='pt-3' style={{ 'display': 'flex', 'justifyContent': 'space-between'}}>
                        <TextField id="outlined-required" label="Email address" style={{ 'width': '100%' }} />
                    </div>  
                    <div className='pt-3' style={{ 'display': 'flex', 'justifyContent': 'space-between'}}>
                        <TextField id="outlined-required" label="Password" style={{ 'width': '100%' }} />
                    </div>
                    <div className='pt-3' style={{ 'display': 'flex', 'justifyContent': 'space-between'}}>
                        <TextField id="outlined-required" label="Confirm Password" style={{ 'width': '100%' }} />
                    </div>

                    <Button variant="contained" className="my-3 px-5 py-2" type="submit" style={{ 'width': '100%' }} endIcon={<SendIcon />}> Sign Up </Button>
        
                    <div className="text-center">
                        <h6 className='py-2'>or Sign up with:</h6>

                        <GoogleIcon size="large" className='mx-4' style={{ 'color': 'red', 'fontSize': '30px' }} />
                        <TwitterIcon size="large" className='mx-4' style={{ 'color': '#03c2fc', 'fontSize': '30px' }} />
                        <GitHubIcon size="large" className='mx-4' style={{ 'color': 'black', 'fontSize': '30px' }} />
                        <FacebookIcon size="large" className='mx-4' style={{ 'color': 'blue', 'fontSize': '30px' }} />
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