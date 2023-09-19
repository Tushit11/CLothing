import { Box } from '@chakra-ui/react';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import Login from '../../Pages/Login/Login';

const MainRoutes = () => {
  return (
    <Box>  
        <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/about' element={<About />} /> 
            <Route path='/login' element={<Login />} /> 
        </Routes>
    </Box>
  )
}

export default MainRoutes; 

