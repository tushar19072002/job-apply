import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <AppBar position="static" sx={{ height: 654 }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Header
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
      <Box sx={{ textAlign: 'center', pt: 4, mb: 8, mx: 'auto', maxWidth: '446px' }}>
        <Typography
          component="h1"
          sx={{
            fontWeight: 'bold',
            color: 'primary.contrastText',
            lineHeight: 'tight',
            fontSize: {
              xs: '1.875rem', 
              sm: '2.25rem', 
              lg: '3rem', 
            },
            textAlign: 'center',
            mt: 2,
          }}
        >
          Your Ultimate Job Search Companion
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: {
              xs: '0.875rem', // text-sm (14px)
              sm: '1rem', // sm:text-base (16px)
              md: '1.125rem', // md:text-lg (18px)
            },
            color: 'primary.contrastText', // primary color from the theme
            opacity: 0.7, // 70% opacity
            textAlign: 'center',
            pt: 4, // padding-top: 1rem (16px)
            mb: 8, // margin-bottom: 2rem (32px)
          }}
        >
          Your journey to a new career starts here. Discover thousands of job opportunities and find the perfect match for your skills and aspirations.
        </Typography>
        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <InputBase
            placeholder="Job Title"
            sx={{
              color: 'black',
              backgroundColor: 'primary.contrastText',
              outline: 'none',
              borderRadius: '12px',
              paddingLeft: {
                xs: '1rem', // pl-4 (16px)
                sm: '3rem', // sm:pl-12 (48px)
                md: '5rem', // md:pl-20 (80px)
              },
              paddingRight: '7rem', // pr-28 (112px)
              height: {
                xs: '60px', // h-[60px]
                md: '72px', // md:h-[72px]
              },
              width: '100%',
            }}
          />
          <Button
            type="submit"
            sx={{
              position: 'absolute',
              right: {
                xs: '0.375rem', // right-1.5 (6px)
                md: '0.75rem', // md:right-3 (12px)
              },
              top: {
                xs: '0.375rem', // top-1.5 (6px)
                md: '0.75rem', // md:top-3 (12px)
              },
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              paddingX: '1.25rem', // px-5 (20px)
              paddingY: '0.75rem', // py-3 (12px)
              borderRadius: '8px', // rounded-lg
              fontSize: '1rem', // text-base (16px)
              fontWeight: 'medium', // font-medium
            }}
          >
            Search
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
