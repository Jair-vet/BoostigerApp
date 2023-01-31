import React from 'react'

export const Footer = () => {
  return (
    <>
        <footer class="py-12 bg-primaryColor scroll-none">
            <div
                class="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 
                    md:flex-row md:space-y-0">
                <div class="flex flex-col items-center justify-between space-y-8 text-lg font-light 
                    md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue">
                    {/* Logo */}
                    <h1 className='text-4xl text-lightColor font-mono font-normal md:absolute right-[20px]'>Boos
                        <span className='text-secondaryColor font-bold'>Tiger</span>
                    </h1>
                    <a href="#features" class="footerEnlces font-mono">Instagram</a>
                    <a href="#download" class="footerEnlces font-mono">WhatsApp</a>
                    <a href="#faq" class="footerEnlces font-mono">About Us</a>
                </div>

            </div>
        </footer>
    </>
  )
}
