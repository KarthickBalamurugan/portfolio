import React,{useState} from 'react'
import './App.css'
import {BrowserRouter as Router,routes,route} from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/Hero'
import Mypage from './components/Mypage/Mypage'
const App = () => {
  const [rollUp,setRollUp]=useState(false);
  return (
    <main >
      <LoadingScreen rollUp={rollUp} setRollUp={setRollUp}/>
      <Navbar rollUp={rollUp}/>
      <Hero/>
      {/* <Homepage/> */}
      <Mypage/>
    </main>
  )
}

export default App
