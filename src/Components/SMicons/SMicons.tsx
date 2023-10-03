"use client"
import { Box } from '@mui/material';
import React from 'react'
import {FaInstagram,FaWhatsapp} from 'react-icons/fa';
import {BsTiktok} from 'react-icons/bs';


const sm = [
    {
        Icon:'https://www.svgrepo.com/show/458756/insta.svg',
        href:'https://www.instagram.com/bucksmart.leb/'
    },
    {
        Icon:'https://www.svgrepo.com/show/509923/facebook.svg',
        href:'https://facebook.com/Bucksmart%20Online%20Shop'
    },
    {Icon:'https://www.svgrepo.com/show/510342/whatsapp.svg',href:'https://wa.me/+96171568667'},
    // {
    //   Icon :BsTiktok ,href: `tiktok.com/@thecraftroomlb`,
    // },
 ]
const SMicons = ({sx,color}:{color?:string,sx?:any}) => {
  return (
    <Box className='row flex' sx={{zIndex:1234567,maxWidth:'200px',mt:2,...sx}}>

    {sm.map((item)=>{
      return <a key={item.href} className='center flex auto rounded smIcon pointer align-center gap white' href={`${item.href}`} target='_blank' rel={'noneferrer'}>
            <Box sx={{width:'30px'}}>

            <img src={item.Icon} alt="" className="img cover" />
            </Box>
         </a>
    })}
    </Box>
  )
}

export default SMicons