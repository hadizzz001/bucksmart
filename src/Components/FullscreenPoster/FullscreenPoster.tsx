"use client"
import { Box } from '@mui/material'
import React from 'react'

const Index = () => {
  return (
    <Box>
        <Box sx={{display:{xs:'flex',md:'none'}}}>
            <img src="https://ucarecdn.com/3d63b5f8-7a73-42ff-adf8-160df01995bc/banner401.jpg" alt="" className="img" />
        </Box>

        <a href='https://wa.me/96171568667' target='_blank'> 
        <Box sx={{display:{xs:'none',md:'flex'}}}>
            <img src="https://ucarecdn.com/3d63b5f8-7a73-42ff-adf8-160df01995bc/banner401.jpg" alt="" className="img" />
        </Box>
        </a>
    </Box>
  )
}

export default Index