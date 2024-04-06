import React from 'react'
import {Link} from 'react-router-dom'
import './css/login.css'
import Header from './Header'

const Login = () => {
  return (
  <>
  <Header/>
    <div className='py-5 login' style={{minHeight:"100vh"}}>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
  <div className='login-form'>
    <div className='login-box my-5 w-25 rounded-3 mx-auto p-3'>
      <Link style={{ textDecoration: 'none', color: 'black'}} to='/' className='d-flex justify-content-center'><h1>CAR SHOWROOM</h1></Link>
      <p className='text-center'>Login to your account to continue!</p>
      <form>
      <div class="form-floating mb-3">
<input type='email' class='form-control email' id='email' placeholder='Email Address'/>
<label htmlFor='Email Address'>Email Address</label>
</div>
<div class="form-floating mb-3">
<input type='password' class='form-control password' id='password' placeholder='Password'/>
<label htmlFor='Password'>Password</label>
</div>
<div className='d-flex align-items-center justify-content-between'>
<div className='mb-3 text-start'>
        <Link style={{ textDecoration: 'none', cursor: 'pointer'}} to='/sign-up' >Create an account</Link>
      </div>
      <div className='mb-3 text-end'>
        <Link style={{ textDecoration: 'none', cursor: 'pointer'}} to='/forgot-password' >Forgot Password?</Link>
      </div>
</div>

      <Link to='/' className='border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5' style={{background: '#9047cc' }} type='submit'>Login</Link>
      </form>
       {/* Render the ErrorModal component when showErrorModal is true */}
    </div>
  </div>
  </div>
  </>
  )
}

export default Login