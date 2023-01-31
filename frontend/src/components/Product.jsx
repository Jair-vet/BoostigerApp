import React from 'react'

export const Product = ({ product }) => {
  return (
    <>
        <div /* className='my-3 p-3 rounded' */>
            <a href={`/product/${product._id}`}>
                <img 
                    src={product.image} 
                    variant="top" 
                    // className='object-cover rounded-md w-[100]'
                    className='object-cover rounded-md w-full h-[200px] transition duration-500 hover:-translate-y-3'
                />
            </a>
        </div>
    </>
  )
}
