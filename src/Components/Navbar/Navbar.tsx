"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {IoIosMenu} from 'react-icons/io'
// import {CiShoppingCart} from 'react-icons/ci'

import { useEffect, useState} from 'react';
// import { CartContext, DrawerContext } from '../../../pages/_app'; import
import SearchModal from './SearchModal';
import Link from 'next/link';
import {Badge, Divider, Typography} from '@mui/material';
// import { loadState } from '../../Utils/LocalstorageFn';
import {useRouter} from 'next/navigation';
// import {AiOutlinePhone, AiOutlineSearch, AiOutlineMenu} from 'react-icons/ai'
import {CiSearch,CiShoppingCart} from 'react-icons/ci'
import {AiOutlineHome,AiOutlineShoppingCart} from 'react-icons/ai'
import SearchInput from './SearchInput';

import NavButtom from './NavButtom';
import { useCartContext, useDrawerContext } from '@/context/Contexts';
import Btn from '../Btn/Btn';



export const categories = [
    "Furniture",
    "Home Appliance",
    "Fashion",
    "Beauty And Personal Care", 
]
export default function Navbar() {
    const {open, setOpen} = useDrawerContext();
    const [openModal,
        setOpenModal] = useState(false);
    
    const [localCart,
        setLocalCart] = useState([]);

    const {cartOpen, setCartOpen} = useCartContext();
    const router = useRouter()
    // const localCart = [1]
    useEffect(() => {
        const cart : any = []
        // const cart = loadState('sgh2j40-tlsit') || []
        if (cart) {

            setLocalCart(cart)
        }
    }, [cartOpen])


    return ( <>
     <Box
     id='navy'
    className='center auto relative  bg flex'
        sx={{
            zIndex:12,
        flexWrap: 'wrap',
                width:'100%',
                boxShadow:'none',
        background:'white',
        border: 'none',
        px:0,
        flexGrow: 1
    }}>
      
        <AppBar
     id='navy2'

    className='center relative  flex'

            sx={{

                boxShadow:'none',

                background:'white',
            // maxWidth: 'lg',
                width:'100%',
            margin: '0 auto',
        }}>
                   <Box sx={{px:1,py:.5,display:{xs:'none',md:'flex'}}} className='  bg white'>
        <Box sx={{maxWidth:'lg',alignItems:'center',justifyContent:'space-between',width:'100%'}} className='bg white  flex   auto'>
 
         
            <Box
                sx={{
                px: 1,
              
              
                color: 'white'
            }}
                className='flex text-center  center col auto'>

           
                <Box sx={{maxWidth:'500px'}} className='align-center flex space-between'>
                <a href='https://th.bing.com/th/id/OIP.JtmXSh_uyZBaTg1eXd-NtgAAAA?pid=ImgDet&rs=1' target='_blank' rel='noopener'>

<Btn sx={{mx:1.5,minWidth:'auto',padding:0,':hover':{background:'transparent'},background:'none'}}>
<Box sx={{width:'20px',height:'20px'}} className='center auto flex'>
<a href="https://instagram.com/bucksmart.leb" target='_blank'>
  <img src="https://www.svgrepo.com/show/458756/insta.svg" alt="" className="img" />
  </a>
  </Box>
</Btn>
</a>
<Btn sx={{mx:1.5,minWidth:'auto',padding:0,':hover':{background:'transparent'},background:'none'}}>
<Box sx={{width:'20px',height:'20px'}} className='center auto flex'>
<a href="https://facebook.com/Bucksmart%20Online%20Shop" target='_blank'>
  <img src="https://www.svgrepo.com/show/509923/facebook.svg" alt="" className="img" />
  </a>
  </Box>
</Btn>
<a href='https://wa.me/96171568667' target='_blank' rel='noopener'>

<Btn sx={{mx:1.5,minWidth:'auto',padding:0,':hover':{background:'transparent'},background:'none'}}>
<Box sx={{width:'20px',height:'20px'}} className='center auto flex'>

  <img src="https://www.svgrepo.com/show/510342/whatsapp.svg" alt="" className="img" />
  </Box>
</Btn>
</a>

                </Box>
                </Box>
                </Box>
         

            </Box>
            <Toolbar
     id='navy3'

    className='center relative  flex  w100  auto'

                sx={{
                
                background:'white',
                    maxWidth:'xl',
                px:'0 !important',
                
                flexWrap: 'wrap'
            }}> 
                  <Link className='flex center  aling-center items-center '  href='/' color='inherit'>

<Box
    sx={{
    mx: {
        sm: '1em'
    },
    width:{xs:'90px',sm: '120px'}
}}>
    <img
        className='img'
        src={`https://ucarecdn.com/39c3c46a-4832-4b47-8afc-fed196f08727/logo1.png`}
        alt="logo"/>
</Box>
</Link>
                <Box
                    sx={{
                    px:1,
                    display:{xs:'flex',md:'none'},

                    flex: 1,
                    flexWrap: 'wrap',
                    justifyContent: {
                        xs: 'right',
                    },
                 
                }}>
 
                    <Box
                        sx={{
                        display: {
                            xs: 'flex'
                        },
                        // justifyContent: 'end'
                    }}
                        className='flex right'>
                             
                        
{/*                              
                             <IconButton
                            onClick={() => router.push('/')}
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{
                                margin : '8px',padding:0,
                            color: 'black',

                            // margin: '0.1em',
                            display: {
                                md: 'none'
                            }
                        }}>
                            <AiOutlineHome color='black'/>
                        </IconButton> */}
                        <IconButton
                            onClick={() => setCartOpen(!cartOpen)}
                            sx={{
                                margin : '8px',padding:0,
                            color: 'black'
                        }}>
                            {/* <Badge color='primary' badgeContent={`${localCart.length || '0'}`}> */}

                                <CiShoppingCart color='black'/>
                            {/* </Badge> */}
                            {/* <Typography>
                                Cart
                            </Typography> */}
                        </IconButton>
    <IconButton
                            onClick={() => setOpen(!open)}
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{
                            margin : '8px',padding:0,
                            color: 'black',
                            // margin: '0.1em',
                            display: {
                                md: 'none'
                            }
                        }}>
                            <IoIosMenu color='black'/>
                        </IconButton>
                   
   {/* <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} target='_blank' className='flex decor-none' rel='noopener'>

                        <IconButton
                            onClick={() => setCartOpen(!cartOpen)}
                            sx={{
                            color: 'black'
                        }}>
                     
                            <AiOutlinePhone color='black'/>

                        </IconButton>
    </a> */}
                    
                    </Box>

                </Box>
  <SearchInput/>
  <SearchInput
mobile
                    /> 

                <Box
                    sx={{
                    px:1,
                    display:{xs:'none',md:'flex'},

                    // flex: 1,
                    flexWrap: 'wrap',
                    // justifyContent: {
                    //     xs: 'right',
                    //     sm: 'end'
                    // },
                 
                }}>
 
                    <Box
                        sx={{
                        display: {
                            xs: 'flex'
                        },
                        // justifyContent: 'end'
                    }}
                        className='flex right'>
 
 {/* <IconButton
                            onClick={() => setOpenModal(!openModal)}
                            sx={{
                            color: 'black'
                        }}>

                                <CiSearch color='black'/>
                          
                        </IconButton> */}

                        <IconButton
                            onClick={() => setCartOpen(!cartOpen)}
                            sx={{
                            color: 'black'
                        }}>
                            {/* <Badge color='primary' badgeContent={`${localCart.length || '0'}`}> */}
                                <CiShoppingCart color='black'/>
                            {/* </Badge> */}
                            <Typography sx={{ml:.5}}>
                                My Cart
                            </Typography>
                            </IconButton>



                            {/* <IconButton
                            onClick={() => setOpen(!open)}
                            edge="start"
                            aria-label="menu"
                            sx={{
                            color: 'black',
                            // margin: '0.1em',
                         
                        }}>
                            <IoIosMenu color='black'/>
                        </IconButton> */}
                    
                    </Box>

                </Box>
           
<SearchModal openModal={openModal} setOpenModal={setOpenModal }/>
<NavButtom/>
             
            </Toolbar>
        </AppBar>
    </Box> 

    < Divider sx={{color : '#00000017'}} />
     </>
    
    );
}