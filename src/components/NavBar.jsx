import React from 'react'
import Logo from '../assets/logo.png'
import {AppBar, Box, Toolbar} from "@mui/material";
import { History, Home } from '@mui/icons-material';
import { Link } from 'react-router-dom';



const NavBar = () => {
  return (
    <AppBar sx={{ position: 'relative' ,zIndex:'0',color:'black',backgroundColor:'#eef3f8',display:'flex'}}>
      <Toolbar>
        <Box sx={{ p: '0.5rem'}}>
          <img src={Logo} style={{ height:"2.5rem", width: "2.5rem"}} alt="logo"/>
        </Box>
        <Toolbar sx={{ px: '1rem', width: '100%' ,display:'flex',justifyContent:'space-evenly',marginLeft:'10px'}}>
          <Link to="/" style={{ color: 'inherit', padding: '1rem', textDecoration:"none" }}><div className='home' style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
              <Home/>
              Home
            </div>
          </Link>
          <Link to="/history" style={{ color: 'inherit', padding: '0.5rem', textDecoration:"none"  }}><div className='history' style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <History/>
            History
          </div>
          </Link>
        </Toolbar>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar