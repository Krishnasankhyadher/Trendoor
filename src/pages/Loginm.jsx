import React, { useState } from 'react'

const Login = () => {
  const [currentstate, setcurrentstate]=useState('Login')
  const onsubmithandler=async(event)=>{
    event.preventDefault()
  }
  return (
    <form onSubmit={onsubmithandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='text-4xl  font-serif'>{currentstate}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />

      </div>
     {currentstate === 'Login'?'': <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name'/>} 
      <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email'/>
      <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Paswword'/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot Your Password ?</p>
        {
          currentstate === 'Login'
          ?  <p className='cursor-pointer' onClick={()=>setcurrentstate('Sign up')}>Create Account</p>
          :  <p className='cursor-pointer' onClick={()=>setcurrentstate('Login')}>Login Here</p>
        }

      </div>
      <button className='bg-black text-white px-8 py-2 mt-4'>{currentstate === 'Login' ? 'Sign In':'Sign Up'}</button>
      
    </form>
  )
}

export default Login
