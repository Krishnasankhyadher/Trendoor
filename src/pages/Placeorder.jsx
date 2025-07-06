import React, { useState } from 'react'
import Title from '../components/Title'
import Carttotal from '../components/Carttotal'
import { useNavigate } from 'react-router-dom'
import { Shopcontext } from '../context/Shopcontext'

const Placeorder = () => {
  const [method,setmethod]=useState('cod')
  const navigate =useNavigate(Shopcontext)
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className=' text-xl sm:text-2xl my-3'>
          <Title text1={'Delihvery'} text2={'Information'}/>

        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name' />

        </div>
         <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Address' />
              <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />

        </div>
          <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Pincode' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />

        </div>
              <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone no.' />
      </div>
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <Carttotal/>

        </div>
        <div className='mt-12'>
          <Title text1={'Payment'} text2={'Method'}/>
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setmethod('razorpay')} className='flex items-center gap-3 border p-1 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method=== 'razorpay'?'bg-green-400':''}`}></p>
              <img className='h-4 mx-4' src="images/Screenshot 2025-07-05 232146.png" alt="" />

            </div>
             <div onClick={()=>setmethod('cod')} className='flex items-center gap-3 border p-1 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method=== 'cod'?'bg-green-400':''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>

            </div>

          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('/order')} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>

          </div>

        </div>

      </div>
      
    </div>
  )
}

export default Placeorder
