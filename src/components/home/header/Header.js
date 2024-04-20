import React, { useState } from 'react';
import { Container, useTheme, Drawer } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import { WhatsApp } from '@mui/icons-material';
import logo from '../../../assets/logo.jpeg'
import { Navigate, useNavigate } from 'react-router-dom/dist';

const pages = [
  { label: 'Home', path: '/' },
  { label: 'Cheap Flights', path: '/cheapflight' },
  // { label: 'Business class', path: '/bussinesclass' },
  { label: 'why book with us', path: '/whybook' },
  { label: 'booking condition', path: '/bookingcondition' },
  { label: 'contact us', path: '/contact' },
];

const Header = () => {
  const theme = useTheme();
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const navigate=useNavigate()
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handlePageSelect = (path) => {
    setActivePage(path);
  };
const handleImage=()=>{
  navigate('/')
}
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: theme.palette.header.backgroundColor, borderBottom: '2px solid #350c48',minHeight:'49px' }}>
        <Container>

          <Toolbar disableGutters sx={{minHeight: {md:'50px'},display:{xs:'flex',},justifyContent:{xs:'space-around',} }}>
          <img src={logo} style={{height:'40px',width:'40px',cursor:'pointer'}} onClick={handleImage}></img>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: '10px', height: '50px',marginLeft:'100px' }}>


              {pages.map((page) => (
                <Button
                  key={page.label}
                  onClick={() => handlePageSelect(page.path)}
                  sx={{
                    my: 2,
                    color: activePage === page.path && location.pathname === page.path ? 'white' : 'black',
                    backgroundColor: activePage === page.path && location.pathname === page.path ? '#350c48' : '',
                    marginTop: activePage === page.path && location.pathname === page.path ? '0px' : '16px',
                    marginBottom: activePage === page.path && location.pathname === page.path ? '0px' : '16px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    '&:hover': {
                      backgroundColor: activePage === page.path ? '#350c48' : '#016ca9',
                      color: activePage === page.path ? 'white' : 'inherit',
                      marginTop: activePage === page.path && location.pathname === page.path ? '0px' : '0px',
                      marginBottom: activePage === page.path && location.pathname === page.path ? '0px' : '0px',
                      height: activePage === page.path && location.pathname === page.path ? '100%' : '100%',
                    },
                  }}
                >
                  <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography textAlign="center">{page.label}</Typography>
                  </Link>
                </Button>
              ))}
            </Box>
            <a href="https://wa.me/+442080041191">
              <WhatsApp></WhatsApp>
            </a>


            {/* Button to toggle drawer, only visible on mobile devices */}
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <Button onClick={toggleDrawer}>
                <MenuIcon />
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer containing all routes */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: '200px' }}>
          <Typography variant="h6" sx={{ margin: '20px 0', textAlign: 'center' }}>Routes</Typography>
          <Box>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={() => {
                  handlePageSelect(page.path);
                  toggleDrawer();
                }}
                sx={{ width: '100%', textTransform: 'capitalize' }}
              >
                <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {page.label}
                </Link>
              </Button>
            ))}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
