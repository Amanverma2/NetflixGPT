import React, { useState } from 'react'
import Header from './Header'

function Login () {
  const [isSignIn, setIsSignIn] = useState(true)

  const toggelSignInForm = () => {
    setIsSignIn(!isSignIn)
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_small.jpg' />
      </div>
      <form className='absolute  w-3/12 bg-black my-36 mx-auto p-10 right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4 '>
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignIn && (
          <input
            type='text'
            placeholder='Full Name'
            className=' px-2 py-2 my-2 w-full rounded bg-gray-700'
          />
        )}
        <input
          type='text'
          placeholder='Email Addresss'
          className=' px-2 py-2 my-2 w-full rounded bg-gray-700'
        />
        <input
          type='password'
          placeholder='Enter Password'
          className='px-2 py-2 my-2  w-full rounded bg-gray-700'
        />
        <button
          type='submit'
          className='py-3 my-3 text-white bg-red-700 w-full rounded'
        >
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </button>
        <p className='font-bold my-4 cursor-pointer' onClick={toggelSignInForm}>
          {isSignIn
            ? 'New to Netflix?Sign up now'
            : 'Already a member? Sign in'}
        </p>
      </form>
    </div>
  )
}

export default Login
