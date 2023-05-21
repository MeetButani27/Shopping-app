import React from "react";
import Carousel from "./Carousel";
import Item from "./Item";
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Home(props) {
  const item_url = "http://localhost:9000/allItems";
  const user_url = "http://localhost:9000/userData";

  // const [userData, setUserData] = useState({});
  const [items, setItems] = useState([]);
  
  const fetchItemData = () => {
    return axios.get(item_url)
      .then((res) => {
        setItems(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchUserData = () => {
    const accessToken = window.localStorage.getItem("accessToken");

    return axios.post(user_url, { token: accessToken})
      .then((res) => {
        // console.log(res.data.userData);
        props.setUserData(res.data.userData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchItemData();
    fetchUserData();
  }, []);

  return (
    <>
      <Carousel />


      <div style={{ 'backgroundColor': '#e9ebf0' , 'margin': '0px' }} className="mb-4">
        <div className="container-fluid px-4 pt-3 pb-4">
          <h2>Hello, { props.userData ? (props.userData.f_name + " " + props.userData.l_name) : "user" }</h2>
          <h5 className="pb-4">Choose from a wide range of categories:</h5>
            <div style={{ 'display':'flex' , 'justifyContent': 'space-evenly'}}>
              <Button variant="outlined" size="medium" color="success">All categories</Button>
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
      </div>

      <div className="px-4 py-3 pb-4 row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4" style={{ 'backgroundColor': '#f5ecd3' }}>
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
