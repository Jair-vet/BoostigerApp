import React from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../products'
import {FontAwesomeIcon} from 'react-fontawesome'

export const ProductScreen = () => {
    const params = useParams()
    const product = products.find((p) => p._id === params.id )

  return (
    <>
        {/* Boton Regresar */}
        <Link to='/' 
            className='absolute md:right-20 right-32 align-center bottom-32 bg-secondaryColor w-[150px] rounded-md py-3 
            text-center shadow-xl transition duration-500 hover:-translate-y-3 hover:bg-primaryColor'>
            <span className='font-mono uppercase'>Regresar </span>
            <i className="fa-solid fa-arrow-right">  
            </i>
        </Link>
        {/* Producto */}
        {/* <!-- Global Container --> */}
        <div class="flex items-center justify-center mt-12">
            {/* <!-- Card Container --> */}
            <div class="flex flex-col p-6 m-3 space-y-10 border-2 border-dashed rounded-2xl shadow-2xl 
                        md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16"
            >
                {/* <!-- Image Div --> */}
                <div>
                    <img src={`${product.image}`}
                        alt="Image-product"
                        class="mx-auto duration-200 w-60 hover:scale-105 md:hover:scale-110 hover:-translate-y-4 
                                md:hover:-translate-y-6 rounded-md"
                    />
                </div>

                {/* <!-- Content --> */}
                <div class="flex flex-col space-y-6">
                    {/* <!-- Label & Descripcion Container --> */}
                    <div class="flex flex-col mb-4 space-y-3 text-center md:text-left">

                        {/* <!-- Title --> */}
                        <div class="max-w-sm text-2xl font-mono">
                            {product.name}
                        </div>

                        {/* <!-- Price Container --> */}
                        <div class="flex flex-col mb-4 space-y-3 text-center md:text-left">
                            <p class="line-through text-red-500">{product.price}</p>
                            <p class="text-5xl font-bold ">{product.offert}</p>
                            <p class="text-sm font-light text-gray-400 w-[350px]">
                                {product.description}
                            </p>
                        </div>

                        {/* <!-- Button Group --> */}
                        <div class="group">
                            <button class="w-full transition-all duration-150 bg-blue-700 text-white border-b-8 border-b-blue-700
                                            rounded-lg group-hover:border-t-8 
                                            group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700
                                            group-hover:shadow-lg"
                            >
                                <div class="px-8 py-4 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-700">
                                    Add to cart
                                </div>
                            </button>
                        </div>

                        {/* <!-- Stock --> */}
                        <div class="flex items-center space-x-3 group">
                            <div class="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"></div>
                            <div class="text-sm">50+ pcs. in stock</div>
                        </div>

                        {/* <!-- Buttoms Containers --> */}
                        <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                            <button 
                                class="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300
                                        rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all 
                                        duration-150"
                            >
                                <img src="https://raw.githubusercontent.com/Jair-vet/Producto-model-Card/main/images/weight.png" alt="" class="w-8"/>
                                <span>Add to Cart</span>
                            </button>
                            <button 
                                class="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300
                                        rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all 
                                        duration-150"
                            >
                                <img src="https://raw.githubusercontent.com/Jair-vet/Producto-model-Card/main/images/heart.png" alt="" class="w-8"/>
                                <span>Add to Wishlist</span>
                            </button>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
