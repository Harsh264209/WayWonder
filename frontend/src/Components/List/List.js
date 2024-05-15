

import React, { useState, useEffect ,createRef} from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import PlaceDetails from '../PlaceDetails/PlaceDetails.js';
import Hotels from '../Hotels/Hotels.js';
import Attractions from '../Attractions/Attractions.js'

import { getPlacesData } from '../../Api/Travelapp.js';


const NoResultsMessage = () => (
  <div style={{ textAlign: 'center', marginTop: '20px' }}>
    <Typography variant="h6">No Hotels Found</Typography>
    <Typography>Drag or Zoom the Map to see nearby hotels</Typography>
  </div>
);

const List = ({ childClick,places ,type,setType,isLoading,setIsLoading}) => {

  const [elRefs, setElRefs] = useState([]);

  // useEffect(() => {
  //   setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
  // }, [places]);

  return (
    // <div>
    //     {isLoading==true ? (
    //     <div >
    //       <CircularProgress size="5rem" />
    //     </div>
    //   ) : (
    //     <>
    //     <Typography variant="h4">Make Your Travel easy🎊🎊</Typography>
    //   <FormControl>
    //     <InputLabel id="type">Type</InputLabel>
    //     <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
    //       <MenuItem value="restaurants">Restaurants</MenuItem>
    //       <MenuItem value="hotels">Hotels</MenuItem>
    //       <MenuItem value="attractions">Attractions</MenuItem>
    //     </Select>
    //   </FormControl>

  
    //     <Grid container spacing={3}>
    //       {places.map((place, index) => (
    //         <Grid key={index} item xs={12}>
    //           {type === 'restaurants' && <PlaceDetails place={place} />}
    //           {type === 'hotels' && <Hotels hotel={place} />}
    //           {type === 'attractions' && <Attractions attraction={place} />}
    //         </Grid>
    //       ))}
    //     </Grid>
    //     </>
      
    //   )}
    //   </div>


    <div>
    {isLoading === true ? (
      <div>
        <CircularProgress size="5rem" />
      </div>
    ) : (
      <>
        {/* <Typography variant="h4">Make Your Travel easy🎊🎊</Typography>
        <FormControl>
          <InputLabel id="type">Type</InputLabel>
          <Select id="type" style={{margin:"20px 0px", padding:"2px 4px"}} value={type} onChange={(e) => setType(e.target.value)}>
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Attractions</MenuItem>
          </Select>
        </FormControl> */}
        <Grid container spacing={3}>
          {places ? (
            places.map((place, i) => (
              <Grid key={i} item xs={12} ref={elRefs[i]}>
                {type === 'restaurants' && <PlaceDetails place={place} selected={Number(childClick)===i}
                  refProp={elRefs[i]}
                  />}
                {type === 'hotels' && <Hotels hotel={place} />}
                {type === 'attractions' && <Attractions attraction={place} />}
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <NoResultsMessage />
            </Grid>
          )}
        </Grid>
      </>
    )}
  </div>
  )
};

export default List;

