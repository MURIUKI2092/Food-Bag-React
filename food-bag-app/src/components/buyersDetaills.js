import React from 'react';
import TextField from '@mui/material/TextField';



const BuyerDetail =()=>{
  const [value,setValue]=React.useState('Enter your address');
  const handleChange =(e)=>{
    setValue(e.target.value)

  };
  return(
    <div className='userLocation'>
        <TextField
        InputProps={{ style: { fontSize: 18 } }}
        InputLabelProps={{ style: { fontSize: 18} }}
         sx={{ m: 1,
           width: '90ch',
          minWidth:"45ch",
          }} 
          id="standard-multiline-flexible"
          label="Where are you?"
          
          placeholder='Enter your address'
          maxRows={4}
          value={value}
          onChange={handleChange}
          variant="standard"
          width={10}
          font={20}
        />
      
    </div>

  )
}
export default BuyerDetail;