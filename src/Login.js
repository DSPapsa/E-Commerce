import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './Login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <div className='login'>
            <Link to='/'>
            <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=""/>
            </Link>
            <div className='login_container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={ e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={ e => setPassword(e.target.value)}/>

                    <Link to='/home'><button type='submit'  className='login_signInButton'>Sign-in</button></Link>
                </form>
                <p>Digikull's group project E-Commerce website . Please
             see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                <Link to='/register'>
                 <button  className='login_registerButton' type='button'>Create your Amazon Account</button>
                 </Link>  
                    
            </div>
        </div>
    )
}

export default Login
