

import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn.js';
import PhoneIcon from '@mui/icons-material/Phone.js';
import Rating from '@mui/icons-material/EighteenUpRating.js';

const Attractions = ({attraction}) => {

    const useStyles = (() => ({
        chip: {
            margin: '5px 5px 5px 0',
          },
          subtitle: {
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',
          },
          spacing: {
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          },
      }));
      
      
        const classes = useStyles();



  return (
    <div>
<Card elevation={6}>
      <CardMedia
        style={{ height: 350  }}
        image={attraction.photo ? attraction.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-attractionholder-001.jpg'}
        title={attraction.name}
      />
     
      <CardContent>
        <Typography gutterBottom variant="h5">{attraction.name}</Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(attraction.rating)} readOnly />
          <Typography component="legend">{attraction.num_reviews} review{attraction.num_reviews > 1 && 's'}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {attraction.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {attraction.ranking}
          </Typography>
        </Box>
        {attraction?.awards?.map((award) => (
          <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
            <img src={award.images.small} />
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}
        {attraction?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {attraction.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
            <LocationOnIcon />{attraction.address}
          </Typography>
        )}
        {attraction.phone && (
          <Typography variant="body2" color="textSecondary" className={classes.spacing}>
            <PhoneIcon /> {attraction.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(attraction.web_url, '_blank')}>
          Trip Advisor
        </Button>
        <Button size="small" color="primary" onClick={() => window.open(attraction.website, '_blank')}>
          Website
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default Attractions