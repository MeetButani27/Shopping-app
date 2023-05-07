import React from "react";
import Carousel from "./Carousel";
import Item from "./Item";
import Button from '@mui/material/Button';
// import Router from "../images/router.webp";
import { useState, useEffect } from 'react';
import axios from 'axios';


function Home() {
  const url = "http://localhost:9000/allItems";
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
      <Carousel />


      <div style={{ 'backgroundColor': '#e9ebf0' , 'margin': '0px'}}>
        <div className="container-fluid px-4 py-3">
          <h5 className="pb-4">Choose from a wide range of categories:</h5>
            <div style={{ 'display':'flex' , 'justifyContent': 'space-evenly'}}>
            <Button variant="outlined" size="medium" color="error">Mobiles</Button>
            <Button variant="outlined" size="medium" color="success">Electronics</Button>
            <Button variant="outlined" size="medium" color="error">Fashion</Button>
            <Button variant="outlined" size="medium" color="success">Grocery</Button>            
            <Button variant="outlined" size="medium" color="error">Furniture</Button>
            <Button variant="outlined" size="medium" color="success">Tools</Button>
            <Button variant="outlined" size="medium" color="error">Appliances</Button>
            </div>
        </div>
      </div>


      <div className="mx-2 my-5 row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4">
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
  );
}

export default Home;
