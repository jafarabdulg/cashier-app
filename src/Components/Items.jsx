import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';

function Items(props) {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(res => {
                const response = res.data
                setProducts(response.products)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="item-container">
            <div className="search-bar">
                <input type='text' className='searchInput' placeholder='search...'
                    onChange={(event) => {setSearchTerm(event.target.value)}}>
                </input>
            </div>
            <div className='product-container'>
                <div className='card-container'>
                    {
                        products
                        .filter((val) => {
                            if(searchTerm === ''){
                                return val;
                            } else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val;
                            }
                        })
                        .map((val, index) => (
                            <div key={index} className="card">
                                <div className="card-content">
                                    <div className="card-img" onClick={()=> {
                                        props.goDetail(val.id)
                                    }}>
                                        <img src={val.thumbnail} alt='img' ></img>
                                    </div>
                                    <div className="card-detail">
                                        <p>
                                            {val.title} <br></br>
                                            <span>Rp{val.price}</span><br></br>
                                        </p>
                                        <button onClick={()=> {
                                            props.addProduct(val, val.price);
                                        }}>
                                            Add</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Items;