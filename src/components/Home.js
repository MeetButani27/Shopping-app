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
