import React from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../products'
import { Rating } from '../components/Rating'

export const ProductScreen = () => {
    const params = useParams()
    const product = products.find((p) => p._id === params.id )

  return (
    <>
        {/* Boton Regresar */}
        <Link to='/' 
            className='absolute md:right-20 right-32 align-center  bg-secondaryColor w-[150px] rounded-md py-3 
            text-center shadow-xl transition duration-500 hover:-translate-y-3 hover:bg-primaryColor'>
            <span className='font-mono uppercase'>Regresar </span>
            <i className="fa-solid fa-arrow-right">  
            </i>
        </Link>
        {/* Producto */}
        {/* <!-- Global Container --> */}
        <div className="flex items-center justify-center mt-12">
            {/* <!-- Card Container --> */}
            <div className="flex flex-col p-6 m-3 space-y-10 rounded-2xl shadow-2xl 
                        md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
                {/* <!-- Image Div --> */}
                <div className='flex items-center'>
                    <img src={`${product.image}`} 
                        alt="Image-product"
                        className="mx-auto duration-200 w-60 hover:scale-105 md:hover:scale-110 hover:-translate-y-4 
                                md:hover:-translate-y-6 rounded-md bg-lightColor"/>
                </div>

                {/* <!-- Content --> */}
                <div className="flex flex-col space-y-6">
                    {/* <!-- Label & Descripcion Container --> */}
                    <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">

                        {/* <!-- Title --> */}
                        <div className="max-w-sm text-2xl font-mono flex justify-start">
                            {product.name}
                        </div>

                        {/* <!-- Price Container --> */}
                        <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
                            <p className="line-through text-redColor">{product.price}</p>
                            <p className="text-5xl font-bold">{product.offert}</p>
                            <p className="text-sm font-medium text-grayColor w-[350px]">
                                {product.description}
                            </p>
                        </div>

                        {/* <!-- Button Group --> */}
                        <div class="group">
                        { product.countInStock === 0
                            ? 
                            <button className="w-full transition-all duration-150 bg-grayColor uppercase font-mono text-secondaryColor rounded-md">
                                <div className="px-8 py-4 duration-150 bg-grayColor rounded-lg group-hover:bg-grayColor border-t-grayColor">
                                    No hay piezas en existencia
                                </div>
                            </button>

                            : 
                            <button className="w-full transition-all duration-150 bg-buttonsColor uppercase font-mono border-b-8 border-b-buttonColor
                                            rounded-lg group-hover:border-t-8 border-t-buttonsColor
                                            group-hover:border-b-0 group-hover:bg-buttonsColor group-hover:border-t-buttonColor
                                            group-hover:shadow-lg">
                                <div className="px-8 py-4 duration-150 bg-buttonsColor rounded-lg group-hover:bg-buttonsColor border-t-buttonsColor">
                                    Add to cart
                                </div>
                            </button>
                        }
                        </div>

                       

                        {/* <!-- Stock --> */}
                        <div className="flex items-center space-x-3 group">
                            <div className="w-3 h-3 rounded-full group-hover:animate-ping countInStock 
                                {product.countInStock > 0 ? 'bg-greenColor' : 'bg-redColor'}">
                               
                            </div>
                            <div className={`${product.countInStock > 0 
                                ? 'bg-greenColor w-3 h-3 rounded-full group-hover:animate-ping countInStock ' 
                                : 'bg-redColor w-3 h-3 rounded-full group-hover:animate-ping countInStock '}`}>
                            </div>
                            <div className="text-sm font-mono">{product.countInStock} piezas en stock</div>
                            <Rating
                                value={product.rating}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
