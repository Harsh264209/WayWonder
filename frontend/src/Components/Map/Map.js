

// import GoogleMapReact from 'google-map-react';
// import { Typography,Paper,useMediaQuery } from "@mui/material";
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
// import mapStyles from '../../mapStyles'


// export default function SimpleMap({ setBound, setCordinates, cordinates, places }) {
  
//   const useStyles = (() => ({
//     paper: {
//       // padding: theme.spacing(2),
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       width: '100px',
//     },
//     mapContainer: {
//       height: '85vh',
//       width: '100%',
//     },
//     markerContainer: {
//       position: 'absolute',
//       transform: 'translate(-50%, -50%)',
//       zIndex: 1,
//       '&:hover': { zIndex: 2 },
//     },
//     pointer: {
//       cursor: 'pointer',
//     },
//   }));

//   const matches = useMediaQuery('(min-width:600px)');
//   const classes = useStyles();

//   return (
//     <div  style={{ height: '100vh', width: '100%' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY  }}
//         defaultCenter={cordinates}
//         center={cordinates}
//         defaultZoom={14}
//         margin={[50, 50, 50, 50]}
//         onChange={(e) => {
//           setCordinates({ lat: e.center.lat, lng: e.center.lng });
//           setBound({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
//         }}
//       >
//         {places.length && places.map((place, i) => (
//           <div
//             className={classes.markerContainer}
//             lat={Number(place.latitude)}
//             lng={Number(place.longitude)}
//             key={i}
//           >
//             {!matches
//               ? <LocationOnOutlinedIcon color="primary" fontSize="small" />
//               : (
//                 <Paper elevation={3} 
//                 className={classes.paper}
//                 >
//                   <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
//                   <img
//                     className={classes.pointer}
//                     src={place.photo ? place.photo.images.small.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
//                   />
//                   {/* <Rating name="read-only" size="small" value={Number(place.rating)} readOnly /> */}
//                 </Paper>
//               )}
//           </div>
//         ))}
//       </GoogleMapReact>
//     </div>
//   );
// }



// import GoogleMapReact from 'google-map-react';
// import { Typography, Paper, useMediaQuery } from "@mui/material";
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import { styled } from '@mui/material/styles';
// import mapStyles from '../../mapStyles'
// import { useState } from 'react';

// // Styled Components
// const MapContainer = styled('div')({
//   height: '100vh',
//   width: '100%',
// });

// const MarkerContainer = styled('div')({
//   position: 'absolute',
//   transform: 'translate(-50%, -50%)',
//   zIndex: 1,
//   '&:hover': { zIndex: 2 },
// });

// const PaperContainer = styled(Paper)({
//   padding: (theme) => theme.spacing(4),
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   width: '100px',
// });

// const PointerImage = styled('img')({
//   cursor: 'pointer',
// });

// // Map Component
// export default function SimpleMap({setchildClick, setBound, setCordinates, cordinates, places }) {
//   const matches = useMediaQuery('(min-width:600px)');



//   return (
//     <MapContainer>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
//         defaultCenter={cordinates}
//         center={cordinates}
//         defaultZoom={14}
//         margin={[50, 50, 50, 50]}
//         onChange={(e) => {
//           setCordinates({ lat: e.center.lat, lng: e.center.lng });
//           setBound({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
//         }}
//         onChildClick={(child)=>{setchildClick(child)}}
//       >
//         {places.length && places.map((place, i) => (
//           <MarkerContainer
//             lat={Number(place.latitude)}
//             lng={Number(place.longitude)}
//             key={i}
//           >
//             {!matches ? (
//               <LocationOnOutlinedIcon color="primary" fontSize="small" />
//             ) : (
//               <PaperContainer elevation={3}>
//                 <Typography variant="subtitle2" gutterBottom>{place.name}</Typography>
//                 <PointerImage
//                   src={place.photo ? place.photo.images.small.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
//                   alt="Place Image"
//                 />
//                 {/* <Rating name="read-only" size="small" value={Number(place.rating)} readOnly /> */}
//               </PaperContainer>
//             )}
//           </MarkerContainer>
//         ))}
//       </GoogleMapReact>
//     </MapContainer>
//   );
// }


import GoogleMapReact from 'google-map-react';
import mapstyles from '../../mapStyles'
import { Typography,Paper,useMediaQuery } from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'



export default function SimpleMap({setchildClick, setBound, setCordinates, cordinates, places }) {
  

  const matches = useMediaQuery('(min-width:600px)');

 console.log("My Places:" ,places)



const useStyles = (() => ({
  paper: {
    padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px',
  },
  mapContainer: {
    height: '85vh', width: '100%',
  },
  markerContainer: {
    position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
  },
  pointer: {
    cursor: 'pointer',
  },
}));


  const classes = useStyles();

  return (
    <div  style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY  }}
        defaultCenter={cordinates}
        center={cordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        onChange={(e) => {
          setCordinates({ lat: e.center.lat, lng: e.center.lng });
          setBound({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        // onChildClick={(child)=>{setchildClick(child)}}
      >
        {places && places.map((place, i) => (
          <div
            // className={classes.markerContainer}
            style={{position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 }}}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!matches
              ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
              : (
                <Paper elevation={3}  style={{padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px'}}>
                  <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                  <img
                    // className={classes.pointer}
                    src={place.photo ? place.photo.images.small.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                  />
                  {/* <Rating name="read-only" size="small" value={Number(place.rating)} readOnly /> */}
                </Paper>
              )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
}