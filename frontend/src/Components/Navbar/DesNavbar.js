
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { getPlacesData } from '../../Api/Travelapp';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useState } from 'react';

import Toolbar from '@mui/material/Toolbar';
import { Autocomplete } from '@react-google-maps/api';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const Navbar = ({setPlaces,setCordinates}) => {  

  
  
  const[autoComplete, setautoComplete]=useState(null)
  const onLoad = (autoC) => setautoComplete(autoC);

  const onPlaceChanged = async() => {
      // Clear previous results
      setPlaces([]);
  
      const place = autoComplete?.getPlace();
      console.log("Place details:", place);
    
      if (place && place.geometry && place.geometry.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        setCordinates({ lat, lng });
    
        try {
          // Make a new API request for restaurant details
          const data = await getPlacesData({ lat, lng });
          setPlaces(data);
        } catch (error) {
          console.error("Error fetching place details:", error);
        }
      } else {
        console.error("Invalid place object:", place);
      }
  };
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"green"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
      
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            WayWander
          </Typography>
        
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Enter place or destination"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          </Autocomplete>
        
        </Toolbar>

       
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar