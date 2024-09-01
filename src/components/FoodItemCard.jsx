import React from 'react'
import { FaRupeeSign, FaStar } from 'react-icons/fa'

const FoodItemCard = ({ ApiData }) => {
    return (
        <div>
            <h1 className='text-center text-[2rem] my-5 font-bold'>Welcome to Sandeep Kumar</h1>
            <div className='w-[80%] h-auto mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
                {
                    ApiData.map((item) => (
                        <div key={item.id} className='card p-4 bg-white rounded-lg shadow-md'>
                            
                                <img src={item.imgdata} className='h-56 w-full rounded object-cover' alt="" />
                            
                            <div>
                                <div className='py-2 flex flex-col gap-2'>
                                    <div className='flex justify-between items-center'>
                                        <div>
                                            <p className='font-bold'>{item.dish}</p>
                                        </div>
                                        <div className='flex items-center px-1 text-white bg-green-600 rounded gap-1'>
                                            <p>{item.rating}</p>
                                            <span ><FaStar className='text-[1rem]' /></span>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div><p>{item.address}</p></div>
                                        <div className='flex items-center'>
                                            <FaRupeeSign className='font-normal' />
                                            <p>{item.price}</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className='border border-gray-300' />
                                <div className='flex justify-between items-center pt-4'>
                                    <div><img src={item.arrimg} alt="" className='h-8' /></div>
                                    <div>
                                        <button className='px-4 py-2 rounded bg-red-600 text-white '>Add to Cart</button>
                                    </div>
                                    <div><img src={item.delimg} alt="" className='h-8' /></div>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FoodItemCard
