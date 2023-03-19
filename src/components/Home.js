import React from 'react'
import Carousel from './Carousel';
import Item from './Item';
import Galaxym51 from '../images/galaxym51.webp';
import Router from '../images/router.webp';

function Home() {
  return (
    <>
      <Carousel />

      <Item item_name="SAMSUNG Galaxy S23 Ultra 5G" item_image={Galaxym51} price="Rs. 1,24,999" />
      <Item item_name="D-Link DIR-819 750 Mbps Wireless Router" item_image={Router} price="Rs. 1,479" />
    </>
  )
}

export default Home