import React from 'react';
import '../App.css';


function Monitor(props) {

    return (
        <>
            <div className='monitor-container'>
                <div className='monitor'>
                    <h2>Total Harga: Rp {props.totalPrice} </h2>
                </div>
            </div>
        </>
    );
}

export default Monitor;