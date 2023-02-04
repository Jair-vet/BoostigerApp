import React, { useEffect, useState } from 'react'
import { Catalogo } from '../components/Catalogo'
import { Product } from '../components/Product'
import axios from 'axios'

export const HomeScreen = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
      const fetchProducts = async () => {
        const { data } = await axios.get('http://127.0.0.1:5000/api/products')

        setProducts(data)
      }

      fetchProducts()
    }, [])
    

  return (
    <div className='p-2 container'>
        <h1 className='text-center text-2xl uppercase font-mono'>Lastest <span>Products</span></h1>
        <div className='p-8 grid gap-5 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2'>
            {products.map((product) => (
                <Product
                    product={product}
                    key={product._id}
                />
            ))}
        </div>

        {/* Catalogo */}
        <Catalogo />
    </div>
  )
}
