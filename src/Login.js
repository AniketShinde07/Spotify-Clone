import React from 'react'
import './loginstyle.css'
import { logInUrl } from './spotify';

function Login() {
  return (
    <div className='login'>
        <img src="./images/spotify-logo.png" alt='spotify-logo' style={{background:'black'}}/>
        <a href={logInUrl}>Login with the spotify</a>
    </div>
  )
}

export default Login;