import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import './css/login.css'
const ForgotPassword = () => {
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
      <div class-name='login-form'>
      <div className='login-box my-5 w-25 rounded-3 mx-auto p-3'>
      <Link style={{ textDecoration: 'none', color: 'black'}} to='/' className='d-flex justify-content-center'><h1>CAR SHOWROOM</h1></Link>
        <p className='text-center'>Please Enter your register email to get reset password mail.</p>
        <form action=''>
        <div class="form-floating mb-3">
<input type='email' class='form-control email'  id='email' placeholder='Email Address'/>
<label htmlFor='Email Address'>Email Address</label>
</div>
        <Link to='/reset-password' className='border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5' style={{background: '#9047cc' }} type='submit'>Send Link</Link>
        </form>
      </div>
    </div>
    </div>
    </>
  )
}

export default ForgotPassword;