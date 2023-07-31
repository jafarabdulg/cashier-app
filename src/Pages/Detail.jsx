import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './detail.css';
import axios from 'axios';

function Detail(props) {
    const backtoCashier = useNavigate();
    const { id } = useParams();

    const [product, setProduct] = useState();

    // const getProductDetail = async() => {
        // try {
            // const res = await axios.get(`https://dummyjson.com/products/${id}`)
            // const response = await res.data
            // setProduct(response)
            // console.log(product)
        // } catch (error) {
            // throw error;
        // }
    // }
    useEffect(() => {
        // getProductDetail()
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(res => {
                const response = res.data   
                setProduct(response)
                console.log(response)
            })
            .catch(err => console.log(err))
    }, []);
   
       return (
        <div className='container'>
            <div className="container-detail">
                <header>
                    <h2>Details Product</h2>
                    <button onClick={()=>backtoCashier('/cashier')}>back to cashier</button>
                </header>
                <div className="body">
                    <div className="img">
                        <img src='' alt='img' />
                    </div>
                    <table className='table-detail'>
                        <tbody>
                            <tr>
                                <td className='trhead'>Title</td>
                                <td className='sp'>:</td>
                                <td>Nama {id}</td>
                            </tr>
                            <tr>
                                <td className='trhead'>Brand</td>
                                <td className='sp'>:</td>
                                <td>Brand</td>
                            </tr>
                            <tr>
                                <td className='trhead'>Category</td>
                                <td className='sp'>:</td>
                                <td>Category</td>
                            </tr>
                            <tr>
                                <td className='trhead'>Description</td>
                                <td className='sp'>:</td>
                                <td>Description</td>
                            </tr>
                            <tr>
                                <td className='trhead'>Stocks</td>
                                <td className='sp'>:</td>
                                <td>Stock</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Detail;