import React from 'react'

export const Footer = () => {
  return (
    <>
        <footer className="py-12 bg-primaryColor">
            <div
                className="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 
                    md:flex-row md:space-y-0">
                <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light 
                    md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue">
                    {/* Logo */}
                    <h1 className='text-4xl text-lightColor font-mono font-normal md:absolute right-[20px]'>Boos
                        <span className='text-secondaryColor font-bold'>Tiger</span>
                    </h1>
                    <a href="#features" className="footerEnlces font-mono">Instagram</a>
                    <a href="#download" className="footerEnlces font-mono">WhatsApp</a>
                    <a href="#faq" className="footerEnlces font-mono">About Us</a>
                </div>
            </div>
        </footer>
    </>
  )
}
