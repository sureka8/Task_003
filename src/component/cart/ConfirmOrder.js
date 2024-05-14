import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../slice/cartSlice'
import { useNavigate } from 'react-router-dom'

const ConfirmOrder = () => {
    const {items:cartItems} = useSelector((state) => state.cartState)
    const dispatch =useDispatch()
    const navigate = useNavigate()

    const handleConfirm = () =>{
        dispatch(clearCart())
        navigate('/')
    }
  return (
    <div className='container mx-auto h-screen mt-5'>
        <div className='flex flex-row px-5 py-5 mt-10'>
        
        <div className='bg-white shadow-xl md:w-1/2  w-full px-10 py-5'>
            <h3 className='text-xl font-bold md:text-start text-center'>Order Information</h3>
                <hr />
                {cartItems.map((item) =>(

  <div className='mt-5 flex flex-row space-x-5'>
  <img src={item.image} alt='product' className=' h-24 w-24 ' />

  <div >
  <p > Product Name: {item.name}</p>

  <p> Quantity: {item.qty}</p>
  <p>Price: {item.price}</p>
  </div>

</div>
                ))}


              
            </div>
            <div className='w-1/2 flex flex-col items-center justify-center '>
            <p className='text-4xl text-primary font-bold'>Thank you for Your Order</p>
            <button className='text-white bg-primary px-10 py-2 mt-5 font-bold rounded-md' onClick={() => handleConfirm()}>Confirm</button>
        </div>
            
</div>
    </div>
  )
}

export default ConfirmOrder
