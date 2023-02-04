import React from 'react'

export const Catalogo = () => {
  return (
    <div className='flex w-full p-8 gap-2 h-[200px]'>
        <div className='w-full text-center transition duration-500 hover:-translate-y-3'>
            
            <a href='#'>
                <h2 className='text-3xl font-mono'>Encuentra todos nuestros diseños</h2>
                {/* Logo */}
                <h1 className='text-4xl text-lightColor font-mono font-normal mt-2'>Boos
                    <span className='text-primaryColor font-bold'>Tiger</span>
                </h1>
                <h4 className='text-sm font-thin uppercase mt-12'>Catálogo</h4>
                <h4 className='text-[13px] font-thin uppercase'>Elige el producto de tu agrado</h4>
            </a>
        </div>
    </div>
  )
}
