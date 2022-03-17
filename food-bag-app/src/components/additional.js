import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Additional =()=>{
  return(
    <section className='additional'>
      <h2>How we serve you</h2>
    {/*   <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    > */}
    <section className='additionalInfo'>
       <Paper elevation={0} >
        <Box>
          <LocationOnIcon/>
        </Box>
      <Typography gutterBottom variant="h5" component="div">
        Tell us where you are
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Select the location you want us to deliver
      </Typography>

      </Paper>
      <Paper elevation={0} >
        <Box>
          <FastfoodIcon/>
        </Box>
      <Typography gutterBottom variant="h5" component="div">
        Tell us what you want
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Browse the type of food that interest you
      </Typography>

      </Paper>
      <Paper elevation={0} >
        <Box>
          <LocalShippingIcon/>
        </Box>
      <Typography gutterBottom variant="h5" component="div">
        We will come running
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Your order will bbe delivered to you in no time
      </Typography>

      </Paper>
      

     
   {/*  </Box> */}
   </section>

    </section>
  )
}
export default Additional;