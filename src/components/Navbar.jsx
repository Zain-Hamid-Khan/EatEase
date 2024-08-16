import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../Redux/slices/SearchSlice'

const Navbar = () => {
   const dispatch = useDispatch()
  return (
    
   
    <nav className='flex flex-col lg:flex-row justify-between mx-6 mb-10'>
      <div>
      <h3 className='text-xl font-bold text-gray-500'
      >{new Date().toUTCString().slice(0,16)}</h3>
      <h1 className='text-5xl font-bold text-green-500'>
        EatEase</h1>
      </div>

      <div className='my-3 '>
      <input type="text"
       name='Search'
       id='Search'
       placeholder='Search Here'
       autoComplete='off'
       onChange={(e) => dispatch(setSearch(e.target.value))}
       className='p-3 border border-green-400 rounded-full outline-none w-full lg:w-[30vw]'>
        </input>
      </div>

    </nav>
    
  )
}

export default Navbar
