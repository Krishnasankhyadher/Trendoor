import React, { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import Title from './Title'

const Carttotal = () => {
    const {currency, delivery_charge, getCartAmount}=useContext(Shopcontext)
  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title text1={'CART'} text2={'TOTAL'}/>

        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Sub Total</p>
                <p>{currency}{getCartAmount()}.00</p>

            </div>
            <hr />
              <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{currency}{delivery_charge}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
            <b>Total</b>
            <b>{currency}{getCartAmount() === 0? 0 : getCartAmount() + delivery_charge }.00</b>

        </div>

      
    </div>
    </div>          
  )
}

export default Carttotal
