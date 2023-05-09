import React from 'react'
import Item from "./Item";
import { useState, useEffect } from 'react';
import axios from 'axios';

function Fashion() {

  const url = "http://localhost:9000/fashion";
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
      <div className='pt-4 pb-5 text-center' style={{ 'background-image': 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)' }}>
        <h2 className='text-white'>Shop for latest Fashion</h2>
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

export default Fashion