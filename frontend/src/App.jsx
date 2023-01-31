import React from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { HomeScreen } from './screens/HomeScreen'

export const App = () => {
  return (
    <>
        <Nav />
        <main className='py-24'>
          <HomeScreen />
        </main>
        <div className='bg-veryDarkBlue flex flex-col justify-end'>
          <Footer />
        </div>
        
    </>
  )
}
