import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import './css/login.css'
const ResetPassword = () => {
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
      <Link style={{ textDecoration: 'none', color: 'black'}} to='/login' className='d-flex justify-content-center'><h1>CAR SHOWROOM</h1></Link>
        <p className='text-center'>Please Enter your new password.</p>
        <form>
        <div class="form-floating mb-3">
<input type='password' class='form-control new-password' id='new-password' placeholder='New Password'/>
<label htmlFor='New Password'>New Password</label>
</div>
<div class="form-floating mb-3">
<input type='password' class='form-control confirm-password' placeholder='Confirm Password'/>
<label htmlFor='Confirm Password'>Confirm Password</label>
</div>
        <Link to='/login' className='border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5' style={{background: '#9047cc' }} type='submit'>Reset Password</Link>
        </form>
      </div>
    </div>
    </div>
    </>
  )
}

export default ResetPassword