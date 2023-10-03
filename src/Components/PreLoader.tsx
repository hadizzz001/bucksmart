"use client"
import React from 'react'
import { Box,  Container, Typography } from "@mui/material"
import ContactSection from './ContactSection/ContactSection'
import HomeProductCollection from './HomeProductCollection/HomeProductCollection'
import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import MainCarousel from './MainCarousel/MainCarousel'
import { useRouter } from 'next/navigation'
import Perks from './Perks/Perks'
import FullscreenPoster from './FullscreenPoster/FullscreenPoster'
import Testimonials from './Testimonials/Testimonials'

const 
PreLoader = ({data,resImages}:any) => {
  const router= useRouter();
  
  const cates = resImages?.first ? [resImages?.first , resImages?.second , resImages?.third , resImages?.fourth ,resImages?.fifth] : [
    'https://ucarecdn.com/4635c19f-1ac8-454f-aaf7-8c67adfe4fd0/WhatsAppImage20230824at191722.jpeg',
    'https://4.bp.blogspot.com/-Jt0CZBa0r6s/WQoWgzdYryI/AAAAAAAAuE4/WNVqO4RNJEoJZeWAGCCDtT-YdkxV-JaPwCPcB/s640/wholesale%2Bcraft%2Bblanks.JPG',
    'https://ucarecdn.com/e490c41b-ddd1-4ef1-a06c-b1b0692bd83a/WhatsAppImage20230824at191716.jpeg',
    'https://ucarecdn.com/bfb9f54b-ee34-4cdc-930c-3a97234595fe/WhatsAppImage20230824at191719.jpeg',
    'https://ucarecdn.com/d01c6f74-4d3b-46c4-9d31-67966950b09e/WhatsAppImage20230824at191720.jpeg'
  ];
  
  
  // [{img:'https://ucarecdn.com/4635c19f-1ac8-454f-aaf7-8c67adfe4fd0/WhatsAppImage20230824at191722.jpeg',category:'Cricut machines'},
  // {img:'https://4.bp.blogspot.com/-Jt0CZBa0r6s/WQoWgzdYryI/AAAAAAAAuE4/WNVqO4RNJEoJZeWAGCCDtT-YdkxV-JaPwCPcB/s640/wholesale%2Bcraft%2Bblanks.JPG',category:'Customizable Blanks'},
  // {img:'https://ucarecdn.com/e490c41b-ddd1-4ef1-a06c-b1b0692bd83a/WhatsAppImage20230824at191716.jpeg',category:'Hot offers'} ,
  // {img:'https://ucarecdn.com/bfb9f54b-ee34-4cdc-930c-3a97234595fe/WhatsAppImage20230824at191719.jpeg',category: 'New Arrivals'}  ,
  // {img:'https://ucarecdn.com/d01c6f74-4d3b-46c4-9d31-67966950b09e/WhatsAppImage20230824at191720.jpeg',category:'Materials'}  ,
  
  // ]
  // const twinImages =resImages?.categoryImage && resImages?.categoryImage?.length > 1 ? resImages?.categoryImage  :  [{img:'https://ucarecdn.com/e79d337c-b709-4ea4-aec0-6f3403afff1e/WhatsAppImage20230824at191717.jpeg'},{img:'https://ucarecdn.com/3a54db45-c216-4076-996c-3ec4524be8f0/WhatsAppImage20230824at191727.jpeg'}]
  return (
    <Box >
      <MainCarousel resImages={resImages}/>
      <Perks/>

    <Container disableGutters className='wrap auto flex' sx={{px:{sm:1},maxWidth:'xl',display:'flex'}}>
   

      <Box/>
        <HomeProductsCarousel Collectiontitle={"Browse Our Collections"} delay={3000} data={data?.featuredProducts?.slice(0,10)}/>
       
    </Container>
    <FullscreenPoster/>
    {/* <HomeProductsCarousel Collectiontitle={"Browse Our Collections"} delay={3000} data={data?.featuredProducts?.slice(10,18)}/>
    <HomeProductsCarousel Collectiontitle={"Browse Our Collections"} delay={3000} data={data?.featuredProducts?.slice(18)}/> */}

    <Testimonials/>
        
 
  </Box>
  )
}

export default PreLoader