
import { Typography , Box, Button} from '@mui/material'
import React from 'react'


const HeroText = () => {
  return (
    <div >
     <Box sx={{position:"absolute", margin:"190px 0px 0px 490px",}}>
     <Typography variant="h5" component="">
      You'll never travel without our trip planner again
Build,<br/> organize, and map your itineraries in a free <br/> travel app designed for vacations & road trips
      </Typography>
      <Button variant="contained" color="success">Start Planning</Button>
     </Box>
  
    </div>
  )
}

export default HeroText