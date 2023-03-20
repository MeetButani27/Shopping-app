import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

export default function AddItem() {
  return (
    <div className="my-5">
      <Box component="form" noValidate autoComplete="off" style={{'display':"flex",'justifyContent':"center", 'alignItems':"center"}}
        sx={{
          '& .MuiTextField-root': { m: 2, width: '45ch', display: 'flex' },
        }}
      >
        <div style={{'textAlign': 'center'}}>
          <h3 className="mb-4">Add a new product</h3>
          <TextField
            id="outlined-required"
            label="Item ID"
          />
          <TextField
            id="outlined-required"
            label="Item name"
          />
          <TextField
            id="outlined-required"
            label="Price"
          />
          <TextField
            id="outlined-required"
            label="Rating"
          />
          <TextField
            id="outlined-required"
            label="Category"
          />
          <TextField
            id="outlined-required"
            label="Item URL"
          />

          <Button variant="contained" className="my-4 px-5" endIcon={<SendIcon />}> Add product </Button>
        </div>
      </Box>
    </div>
  );
}