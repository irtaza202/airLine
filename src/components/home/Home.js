import React from 'react'
import Header from './header/Header'
import {Container } from '@mui/material'
import HFlightPortion from './header/headerFlightPortion/HFlightPortion'
import TitlebarImageList from './ImageList/ImageList'
import PopularFlight from './popularFlight/PopularFlight'
import Footer from '../footer/Footer'

const Home = () => {
  return (
   <>
   {/* <Header/> */}
   <HFlightPortion/>
   {/* <h1>hfsdfjdjkj</h1> */}
   <TitlebarImageList/>
  
   {/* <PopularFlight/> */}

   </>
   
  )
}

export default Home