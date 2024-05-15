

import React from 'react'
import { useEffect, useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
// import { Grid }  from '@mui/material';
import List from '../../Components/List/List'
import SimpleMap from '../../Components/Map/Map'
import DesNavbar from '../../Components/Navbar/DesNavbar'
import { getPlacesData } from '../../Api/Travelapp';
const Destination = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');
    const [childClick,setchildClick]=useState(null)
    const [autocomplete, setAutocomplete] = useState(null);
    const[places,setPlaces]=useState([])
    const[attractions,setAttractions]=useState([])
    const[HotelsData,setHotelsData]=useState([])
    const [cordinates,setCordinates]=useState({})
    const [bound,setBound]=useState({})


    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords:{longitude,latitude}})=>{
        
          setCordinates({lat:latitude,lng:longitude})
        
        })
        },[])
        
        useEffect(()=> {
        
          if (cordinates && bound && bound.sw && bound.ne) {
            console.log("Making API request...");
        setIsLoading(true)
          getPlacesData(type,bound.sw, bound.ne)
          .then((data) => {
            console.log("API response:", data);
            setPlaces(data?.filter((place)=> place.name && place.photo && place.num_reviews>0));
            setIsLoading(false)
          })
          .catch((error) => {
            console.error("Error fetching place details:", error);
          });
        }
        },
        [type,bound])

        const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCordinates({ lat, lng });
  };


  return (

    <div>
  <DesNavbar setPlaces={setPlaces} setCordinates={setCordinates} /> 

 <div className="div" style={{display:"flex" , flexDirection:"row", width:"100%"}}>
    <div className="div" style={{height:"100vh" ,width:"45%" , margin:"80px"}}>

       <Typography variant="h4">Make Your Travel easy🎊🎊</Typography>
        <FormControl>
          <InputLabel id="type">Type</InputLabel>
          <Select id="type" style={{margin:"20px 0px", padding:"2px 4px"}} value={type} onChange={(e) => setType(e.target.value)}>
            <MenuItem value="restaurants">Restaurants</MenuItem>
            {/* <MenuItem value="hotels">Hotels</MenuItem> */}
            <MenuItem value="attractions">Attractions</MenuItem>
          </Select>
        </FormControl>
      <div className="div" style={{height:"100vh",overflow:"auto" ,width:"100%" , }} >
      <List places={places} childClick={childClick} isLoading={isLoading}  setType={setType} type={type} rating={rating} setRating={setRating}/>

      </div>
\
    </div>
 
     <div style={{width:"55%", height:"100vh"}}>
    <SimpleMap setchildClick={setchildClick}  setCordinates={setCordinates} setBound={setBound} cordinates={cordinates} places={places}/>
  </div>
</div>
    </div>
  )
}

export default Destination