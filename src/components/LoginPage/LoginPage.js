import React, { useState } from 'react'
import './LoginPage.css'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  return (
    <>
      <div className='container'>
        <div className='form-content'>
          <form className='form' noValidate>
            <h1>Altery Admin Portal</h1>
            <div className='form-inputs-fields'>
              <label className='form-label'>Email</label>
              <input
                className='form-input'
                type='text'
                name='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='form-inputs-fields'>
              <label className='form-label'>Password</label>
              <input
                className='form-input'
                type='text'
                name='password'
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className='form-input-button'
              type='submit'
              onClick={() => {
                if (
                  email === 'hectacloudadmin@gmail.com' &&
                  password === 'admin123'
                ) {
                  navigate('/request-listing')
                }
              }}
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginPage
