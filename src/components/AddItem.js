import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import axios from 'axios';

export default function AddItem() {
  const [items, setItems] = useState({
    item_id: "",
    item_name: "",
    price: "",
    rating: "",
    category: "",
    item_url: ""
  });


  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setItems({...items, [name]:value});
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(items);

    axios.post('http://localhost:9000/additem', items)
    .then((res) => alert('New item added successfully !!'))
    .catch((err) => console.log(err))
  };

  return (
    <div className="my-5">
      <Box component="" noValidate autoComplete="off" style={{'display':"flex",'justifyContent':"center", 'alignItems':"center"}}
        sx={{
          '& .MuiTextField-root': { m: 2, width: '45ch', display: 'flex' },
        }}
      >
        <form style={{'textAlign': 'center'}}>
          <h3 className="mb-4">Add a new product</h3>
          <TextField
            id="outlined-required"
            name="item_id"
            label="Item ID"
            value={items.item_id}
            onChange={(e) => handleChange(e) }
          />
          <TextField
            id="outlined-required"
            name="item_name"
            label="Item name"
            value={items.item_name}
            onChange={(e) => handleChange(e) }
          />
          <TextField
            id="outlined-required"
            name="price"
            label="Price"
            value={items.price}
            onChange={(e) => handleChange(e) }
          />
          <TextField
            id="outlined-required"
            name="rating"
            label="Rating"
            value={items.rating}
            onChange={(e) => handleChange(e) }
          />
          <TextField
            id="outlined-required"
            name="category"
            label="Category"
            value={items.category}
            onChange={(e) => handleChange(e) }
          />
          <TextField
            id="outlined-required"
            name="item_url"
            label="Item URL"
            value={items.item_url}
            onChange={(e) => handleChange(e) }
          />

          <Button variant="contained" className="my-4 px-5" type="submit" onClick={(e) => handleSubmit(e)} endIcon={<SendIcon />}> Add product </Button>
        </form>
      </Box>
    </div>
  );
}