import {} from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Nav from './componentes/Nav'
import Footer from './componentes/Footer'
import {Swiper, SwiperSlide} from 'swiper/react'


function App() {

  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>

    
  )
}

export default App

