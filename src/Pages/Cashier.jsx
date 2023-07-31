import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Buyinglist from '../Components/Buyinglist';
import Items from '../Components/Items';
import Monitor from '../Components/Monitor';

function Cashier(props) {
  const [cart, setCart] = useState([]);
  const [prices, setPrices] = useState([])
  const [totalPrice, setTotalPrice] = useState('')
  

  /*For add product */
  const addProduct = (val, price) => {
    const items = cart;
    items.push(val);
    setCart([...items]);
    /* for set price */
    const cost = prices;
    cost.push(price);
    setPrices([...cost])
    const sum = prices.reduce((prev, current) => (prev + current))
    setTotalPrice(sum)
  }

  /* For delete product from list */
  const onDelete = (index) => {
    const old = cart;
    const old2 = prices;
    if (window.confirm('are you sure?')) {
      old.splice([index], 1);
      setCart([...old]);
      /* for totalPrice */
      old2.splice([index], 1);
      setPrices([...old2])
      const sum = prices.reduce((prev, current) => (prev + current))
      setTotalPrice(sum)
    }
  }

  /* for goDetail */
  const navigate = useNavigate();
  const goDetail = (id) => {
    navigate(`/detail/${id}`);
  }

  return (
    <div className="App">
      <Monitor totalPrice = {totalPrice} />
      <div className='contents'>
        <Items addProduct={addProduct} goDetail={goDetail} />
        <Buyinglist cart={cart} totalPrice = {totalPrice} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default Cashier;
