import React from 'react'
import './App.css'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import Navbar from './components/Navbar/navbar'
import Homepage from './components/Homepage/Homepage'
const App = () => {
  return (
    <main >
      <LoadingScreen/>
      <section className='Main'>
        {/* hi */}
      </section>
      <Navbar/>
      <Homepage/>
      {/* <h>navbar</h> */}
    </main>
  )
}

export default App
