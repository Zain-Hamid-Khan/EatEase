import React, { useState } from 'react'
import {IoMdClose} from 'react-icons/io'
import ItemCard from './ItemCard'
import { useSelector } from 'react-redux'
import { FaShoppingCart } from 'react-icons/fa'
import { Navigate, useNavigate } from 'react-router-dom'

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false)

  const cartItems = useSelector((state)=> state.Cart.cart)
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce((totalPrice, item) => totalPrice + item.qty * item.price,0)
  const Navigate = useNavigate()
  console.log(cartItems)
  return ( 
    <>
    <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-15 bg-white pl-6 ${activeCart ? "translate-x-0" : "translate-x-full" } translation-all duration-500 z-50`}>
        <div className='flex justify-between items-center my-3'>
           <span className='text-xl font-bold text-gray-800'>
           My Order
           </span>
           <IoMdClose onClick={() => setActiveCart(!activeCart)} className='mr-6 border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:border-red-600 hover:text-red-600 cursor-pointer'/>
        </div>

    
      {cartItems.length > 0 ? cartItems.map((food) => {
        return <ItemCard key={food.id} id={food.id} name={food.name} price={food.price} img={food.img} qty={food.qty} />
      }
    )
     : <h3 className='font-bold text-center text-xl'>Your Cart is Empty</h3>}
    
    

        <div className='absolute bottom-3'>
        <h3 className='font-bold '>Items: {totalQty} </h3>
        <h3 className='font-bold '>Total Amount: Rs.{totalPrice} </h3>
        <br />
        <button onClick={() => Navigate('/success')} className='p-2 bg-green-500 text-white rounded-lg hover:bg-gray-400 lg:w-[18vw] w-[90vw]'>Checkout</button>
        </div>
    </div>
    <div>
    <FaShoppingCart onClick={() => setActiveCart(!activeCart)} className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-10 right-4 cursor-pointer ${totalQty > 0 && "animate-bounce delay-500 transition-all"}`}/>
    </div>
    </>
  )
}

export default Cart
