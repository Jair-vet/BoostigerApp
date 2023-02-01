import React from 'react'
import { ProductName } from './ProductName'
import { Rating } from './Rating'

export const Product = ({ product }) => {
  return (
    <>
        <div className='transition duration-500 hover:-translate-y-3'>
            <a href={`/product/${product._id}`}>
                <img 
                    src={product.image} 
                    variant="top" 
                    className='object-cover rounded-md w-full h-[200px]'
                />
                <div>
                    <ProductName
                        name={product.name}
                    />
                    
                </div>
                <div>
                    <Rating 
                        value={product.rating}
                    />
                </div>
            </a>
        </div>
    </>
  )
}
