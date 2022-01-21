import React, { useState } from 'react';
import './Register.css'
import {Link} from 'react-router-dom'


function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='register'>

            <img
                className="register__logo"
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='' />


            <div className='register__container'>
                <h1>Create Account</h1>

                <form>
                    <h5>Name</h5>
                    <input type='text' value={name} onChange={e => setName(e.target.value)} />
                    <h5> E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <Link to='/login'><button type='submit'  className='register_signupButton'>Sign-Up</button></Link>
                </form>
                <h3>Other Sign-up Options</h3>


                <img className='signup_logo' src="https://scontent.fudr3-1.fna.fbcdn.net/v/t39.2365-6/17639236_1785253958471956_282550797298827264_n.png?_nc_cat=105&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=Oomt0XkspmkAX8pqiIl&_nc_ht=scontent.fudr3-1.fna&oh=00_AT9b5vB1lYRO2UQjtquihqPyO4oJD2LZKFl8GX1OSv5FWw&oe=61EDFF96" alt='' />
                <div class="google-btn">
                    <div class="google-icon-wrapper">
                        <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt='' />
                    </div>
                    <p class="btn-text"><b>Sign in with google</b></p>
                </div>

                <p>
                Digikull's group project E-Commerce website . Please
             see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>


            </div>
        </div >
    )
}

export default Register
