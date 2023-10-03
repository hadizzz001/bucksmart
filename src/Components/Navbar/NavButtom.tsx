"use client"
import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
// import MenuHover from './MenuHover'
import { categories } from './Navbar'
import MenuHover from './MenuHover'

export const catsSubcategories = [
    "Food",
    "Treats",
    "Toys",
    "Collars",
    "Leashes",
    "Apparel",
    "Grooming",
    "Brushes",
    "Litters",
    "Hygiene",
    "Health",
    "Wellness",
    "Medication",
    "Fleas",
    "Ticks"
];

export const dogsSubcategories = [
    "Food",
    "Treats",
    "Toys",
    "Collars",
    "Leashes",
    "Apparel",
    "Grooming",
    "Brushes",
    "Hygiene",
    "Health",
    "Wellness",
    "Medication",
    "Fleas",
    "Ticks"
];

export const offersSubcategories = [
    "Special Deals",
    "Clearance Items",
    "Discounted Bundles"
];



const NavButtom = () => {

    return (
        <Box
            className=' wrap  space-evenly'
            sx={{
                flex: 1,
                position: 'relative',
                // width: '100%',
                mx: 0,
                display: { xs: 'none', md: 'flex' }
            }}>
            <Container
                className='flex   '
                sx={{

                    maxWidth: 'lg',
                    overflow: 'hidden',
                    py: 1.5,

                }}>

                <Link className='black decor-none uppercase' href={`/collection/products`}>

                    <Typography
                        className=' cursor center flex gap1 black decor-none uppercase'
                        id="button"
                        component='p' sx={{
                            width: 'max-content',
                            alignItems: 'center',
                            mx: '1em',

                            fontWeight: 600, fontSize: { xs: '.6em', sm: '.75em' }
                        }}>
                        Products
                    </Typography>
                </Link>







                <Link className='black decor-none uppercase' href={`/china`}>

                    <Typography
                        className=' cursor center flex gap1 black decor-none uppercase'
                        id="button"
                        component='p' sx={{
                            width: 'max-content',
                            alignItems: 'center',
                            mx: '1em',

                            fontWeight: 600, fontSize: { xs: '.6em', sm: '.75em' }
                        }}>
                        From China
                    </Typography>
                </Link>



                <Link className='black decor-none uppercase' href={`/program`}>

                    <Typography
                        className=' cursor center flex gap1 black decor-none uppercase'
                        id="button"
                        component='p' sx={{
                            width: 'max-content',
                            alignItems: 'center',
                            mx: '1em',

                            fontWeight: 600, fontSize: { xs: '.6em', sm: '.75em' }
                        }}>
                        Our Program
                    </Typography>
                </Link>




                <Link className='black decor-none uppercase' href={`/about`}>

                    <Typography
                        className=' cursor center flex gap1 black decor-none uppercase'
                        id="button"
                        component='p' sx={{
                            width: 'max-content',
                            alignItems: 'center',
                            mx: '1em',

                            fontWeight: 600, fontSize: { xs: '.6em', sm: '.75em' }
                        }}>
                        About Us
                    </Typography>
                </Link>



                <Link className='black decor-none uppercase' href={`/contact`}>

                    <Typography
                        className=' cursor center flex gap1 black decor-none uppercase'
                        id="button"
                        component='p' sx={{
                            width: 'max-content',
                            alignItems: 'center',
                            mx: '1em',

                            fontWeight: 600, fontSize: { xs: '.6em', sm: '.75em' }
                        }}>
                        Contact Us
                    </Typography>
                </Link>
                {/* <Link className='black decor-none uppercase' href={`/birds/products`}>

                <Typography 
      className=' cursor center flex gap1 black decor-none uppercase'
        id="button"
        component='p' sx={{width:'max-content',
        mx:'1em',
        alignItems: 'center',
        
        fontWeight:600,fontSize:{xs:'.6em',sm:'.75em'}}}>
     Birds
   </Typography>
   </Link> */}





            </Container>
            {/* <MenuHover category='HOVER HERE' subcategories={['test','test2']}/> */}
        </Box>
    )
}

export default NavButtom