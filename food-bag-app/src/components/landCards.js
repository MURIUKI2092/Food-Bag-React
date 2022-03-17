import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from "@material-ui/core/Button";

import {  CardActions } from '@mui/material';



const LandCards= ()=>{
  return (
    <section className="landingChoice">
      <h2>Pick an Interest</h2>
       <section className="cards">
      
      <div>
        
      <Card sx={{  width:300,
          maxWidth: 300 ,
        minWidth:150}}>
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

      </div>
      <div>
      <Card sx={{  width:300,
          maxWidth: 300 ,
        minWidth:150}}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image='../images/food.jpg'
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Vegetables and Fruits
        </Typography>
        <Typography variant="body2" color="text.secondary">
          May not want it, but good for you
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">See More</Button>
        
        </CardActions>
        </Card>

      </div>
      <div>
      <Card sx={{  width:300,
          maxWidth: 300 ,
        minWidth:150}}>
      <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image='../images/food.jpg'
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Drinks and Cocktails
      </Typography>
      <Typography variant="body2" color="text.secondary">
        I feel sad for those who do not drink
      </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">See More</Button>
      
      </CardActions>
      </Card>

      </div>
      <div>
      <Card sx={{  width:300,
          maxWidth: 300 ,
        minWidth:150}}>
      <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image='../images/food.jpg'
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Restaurants
      </Typography>
      <Typography variant="body2" color="text.secondary">
        All sorrows are less with  bread
      </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">See More</Button>
      
      </CardActions>
      </Card>

      </div>
    </section>
   

    </section>
   
   
  );
}
export default LandCards;