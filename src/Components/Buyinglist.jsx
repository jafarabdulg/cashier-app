import React from 'react';
import '../App.css';


function Buyinglist(props) {
    const listItem = props.cart;

    return (
        <>
            <div className='buyedItem-container'>
                <div className='buyedItem'>
                    <table>
                        <thead>
                            <tr>
                                <th>Qty</th>
                                <th>Item</th>
                                <th>Harga</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listItem.map((e, index) => (
                                <tr key={index}>
                                    <td>{e.id}</td>
                                    <td>{e.title}</td>
                                    <td>Rp{e.price}</td>
                                    <td><button onClick={()=>props.onDelete(index)}>
                                        Delete</button></td>
                                </tr>
                            ))}
                            <tr>
                                <td className='total-price' colSpan={4}>Total: Rp{props.totalPrice}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Buyinglist;