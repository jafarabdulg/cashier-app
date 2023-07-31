import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signin.css'

function Signin() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate();

    const onSubmit = () => {
        if ((username === 'admin') && (password === 'admin') ) {
            navigate('/cashier')
        } else {
            alert('Login failed!')
        }
    }

    return (
        <>
            <div className="container-signin">
                <div className="block">
                    <div className="block-content">
                        <h2>Sign in</h2>
                        <div className="input">
                            <div>
                                <input onChange={(val)=>setUsername(val.target.value)} placeholder='Username' type="text" />
                                <br />
                                <input onChange={(val)=>setPassword(val.target.value)} placeholder='Password' type="password" />
                                <br />
                                <button onClick={()=> onSubmit()}>Log in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signin;