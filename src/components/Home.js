import React from "react";
import Carousel from "./Carousel";
import Item from "./Item";
import Galaxym51 from "../images/galaxym51.webp";
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
      <>
        {items.map((item,idx) => { 
          return(<Item
            item_name = {item.item_name}
            item_image = {item.item_url}
            price = {item.price}
            rating = {item.rating}
            key = {idx}
          />)
        })}
      </>
    </>
  );
}

export default Home;
