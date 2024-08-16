import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromCart, incrementQty, decrementQty } from '../Redux/slices/CartSlice';
import toast from 'react-hot-toast';

const ItemCard = ({id, name, price, qty, img}) => {
  
  const dispatch = useDispatch();

  return (
    <div className='flex gap-2 shadow-md shadow-green-400 rounded-md p-2 mb-3'>
      <MdDelete onClick ={() => {dispatch(removeFromCart({id, name, img, price, qty}))
      toast(`${name} removed from cart!` ,{icon: " 👏"})
      }} className='absolute right-7 text-gray-600 cursor-pointer hover:text-red-600'/>

      <img src={img} alt="" className='w-[75px] h-[75px]' />

      <div className='leading-5'> 
        <h2 className='font-bold text-gray-800 mr-5 '>{name}</h2>
        <div className=''>
          <span className='text-green-500'>Rs.{price}</span>
          <div className='flex gap-2 justify-center items-center absolute right-7'>
            <AiOutlineMinus onClick={() => qty >1 ? dispatch(decrementQty({ id })): (qty=0) | qty < 1 ? dispatch(removeFromCart({id, name, img, price, qty})) : (qty= 0 )}className='border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:text-white rounded-md text-xl hover:border-none transition-all ease-linear cursor-pointer'/>
            <span>{qty}</span>
            <AiOutlinePlus onClick={() => dispatch(incrementQty({id}))} className='border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:text-white rounded-md text-xl hover:border-none transition-all ease-linear cursor-pointer' />
          </div>
        </div>
      </div>
    </div>

  )
}

export default ItemCard
