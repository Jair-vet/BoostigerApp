import React from 'react'

export const Nav = () => {
  return (
    <>
        <nav className="navbar">
        <div className="container">
            {/* Logo */}
            <h1 className='text-4xl text-lightColor font-mono font-normal mt-2'>Boos
                <span className='text-primaryColor font-bold'>Tiger</span>
            </h1>
            <ul className="desktop-menu mt-3">
                <li><a href="#courses" className='enlace'>Courses</a></li>
                <li><a href="#header" className='enlace'>Header</a></li>
            </ul>

            <div className="mobile-menu">
            <input type="checkbox" className="toggler" role="checkbox" aria-checked="false" tabIndex="0" />
            <div className="hamburger"><div></div></div>
            <div className="menu">
                <div>
                <div>
                    <ul>
                        <li><a href="#courses">Courses</a></li>
                        <li><a href="#header">Header</a></li>    
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
    </nav>

    </>
  )
}

