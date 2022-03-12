import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



const LandCards= ()=>{
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image='../images/food.jpg'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Fast Food
        </Typography>
        <Typography variant="body2" color="text.secondary">
          All sorrows are less with  bread
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See More</Button>
        
      </CardActions>
    </Card>
  );
}
export default LandCards;