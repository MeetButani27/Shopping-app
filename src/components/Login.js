import React from 'react'
import { MDBCol, MDBRow, MDBCard, MDBCardBody} from 'mdb-react-ui-kit';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
        <div className='px-5 pt-3' style={{ 'background-image': 'linear-gradient(to right, #574280, #0064ae, #0083b1, #00997e, #18a724)' }}>

        <MDBRow>
            <MDBCol md='7' className='text-center text-md-start d-flex flex-column justify-content-center'>
                <h1 className="my-5 display-3 fw-bold ls-tight px-3">
                    The best offers just <br />
                    <span className="text-primary">for you !!</span>
                </h1>
                <p className='px-3' style={{color: 'wheat'}}>
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
                        <TextField id="outlined-required" label="Email address" style={{ 'width': '100%' }} />
                    </div>  
                    <div className='pt-1 pb-4' style={{ 'display': 'flex', 'justifyContent': 'space-between'}}>
                        <TextField id="outlined-required" label="Password" style={{ 'width': '100%' }} />
                    </div>

                    <Button variant="contained" className="my-4 px-5 py-2" type="submit" style={{ 'width': '100%' }} endIcon={<SendIcon />}> Log In </Button>
                    
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