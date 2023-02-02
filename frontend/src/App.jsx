import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { HomeScreen } from './screens/HomeScreen'
import { ProductScreen } from './screens/ProductScreen';

export const App = () => {
  return (
    <Router>
      <Nav />
      <main className='py-40 md:py-24'>
          <Routes>
              <Route path='/' element={ <HomeScreen />} exact />
              <Route path='/product/:id' element={ <ProductScreen />} />
          </Routes>
      </main>
      <div className='bg-veryDarkBlue flex flex-col justify-end'>
        <Footer />
      </div>
    </Router>
  )
}
