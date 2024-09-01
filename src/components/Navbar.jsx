import React from 'react'
import { FaCartPlus } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='bg-black shadow-lg sticky top-0'>
      <div className='w-[80%] mx-auto py-[1.8rem] flex justify-between items-center text-white text-2xl'>
        <div>
            E-commerce
        </div>
        <div>
            <FaCartPlus/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
