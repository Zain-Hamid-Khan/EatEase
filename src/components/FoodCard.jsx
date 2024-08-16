import React from 'react'
import { FaStar } from "react-icons/fa"
import { FaStarHalf } from 'react-icons/fa'
import { addToCart } from '../Redux/slices/CartSlice'
import { useDispatch } from 'react-redux'

const FoodCard = ({id , name , price , desc , rating , img, handleToast}) => {
  
  const dispatch = useDispatch()
  
  return (
    
    <div className='font-bold w-[260px] bg-white flex flex-col rounded-2xl p-5 cursor-grabbing mx-3 my-3 justify-between border border-green-500'>
        <div>
      <img src={img} alt=""
      className="h-[170px] w-screen hover:scale-110 transition-all duration-500 ease-out"/>
      </div>
    
    <div className='h-7 flex justify-between text-sm  mt-3'>
        <h2>{name}</h2>
        <span className='text-green-500'>Rs.{price}</span>
    </div>
    <p className='font-normal text-sm py-4'>{desc.slice(0,70)}
    </p>
    <div className='flex  py-3  items-center align-ba'>
        <span className='flex text-yellow-500'>
        <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf />
        </span>
        {rating}
        <button onClick ={() => {
          dispatch(addToCart({id , name , price , desc , rating , qty: 1 , img}))
          handleToast(name);
        }}
            className='bg-green-500 rounded text-sm p-1 ml-[1.2rem] hover:bg-gray-500 text-white'>Add to cart</button>

    </div>
    </div>
  )
}

export default FoodCard
