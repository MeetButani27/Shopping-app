import React from 'react'
import Item from "./Item";
import { useState, useEffect } from 'react';
import axios from 'axios';


function Electronics() {
  
  const url = "http://localhost:9000/mobiles";
  const [items, setItems] = useState([]);

  const fetchData = () => {
    return axios
      .get(url)
      .then((res) => {
        setItems(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  
  return (
    <>
      {/* <div style={{ 'backgroundColor': '#e9ebf0' , 'margin': '0px' }} className="mb-4">
        <div className="container-fluid px-4 pt-3 pb-4">
          <h5 className="pb-4">Choose from a wide range of categories:</h5>
            <div style={{ 'display':'flex' , 'justifyContent': 'space-evenly'}}>
            <Button variant="outlined" size="medium" color="error">Mobiles</Button>
            <Button variant="outlined" size="medium" color="success">Electronics</Button>
            <Button variant="outlined" size="medium" color="error">Fashion</Button>
            <Button variant="outlined" size="medium" color="success">Grocery</Button>            
            <Button variant="outlined" size="medium" color="error">Furniture</Button>
            <Button variant="outlined" size="medium" color="success">Tools</Button>
            <Button variant="outlined" size="medium" color="error">Appliances</Button>
            <Button variant="outlined" size="medium" color="success">Sports</Button>
            </div>
        </div>
      </div> */}

      <div className='pt-4 pb-5 text-center' style={{ 'background-image': 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)' }}>
        <h2 className='text-white'>Shop for latest Smart Phones</h2>
      </div>

      <div className="px-4 py-3 row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4" style={{ 'backgroundColor': '#f5ecd3' }}>
        {items.map((item,idx) => { 
          return(<Item
            item_name = {item.item_name}
            item_image = {item.item_url}
            price = {item.price}
            rating = {item.rating}
            key = {idx}
          />)
        })}
      </div>
    </>
  )
}

export default Electronics