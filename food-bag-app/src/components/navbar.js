import React from 'react';
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
/* import Button from '@mui/material/Button'; */
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import SignIn from './login';
import SignUp from './register';
import CartReview from './buyerCart';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    borderRadius:'50px',
    transform: 'translate(-50%, -50%)',
    width: 400,
    
    border: '0.5px solid #000',
    boxShadow: 2,
    
    p: 4,
  };

const Navbar = ()=>{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return(
        <div className='navbar'>
            <div className='logo'>
            <div className='firstName'>
                <h1>Food</h1>
            </div>
            <div className='secondName'>
                <h1>Bag</h1>
            </div>
           
        </div >
        <div className='headerWords'>
            <h3>FoodBag</h3>
            <p>
                Anything food, we have you covered
            </p>


        </div>
        <div className='headerLinks'>
            <li>
            <Button onClick={handleOpen}>
                <Typography
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    color: red[600],
                  }}
                >
                  Select Trip
                </Typography>
              </Button>
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
              <SignIn/>
           
          </Box>
        </Fade>
      </Modal>
            </li>
            <li>
            <button onClick={handleOpen}>register</button>
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
              <SignUp/>
           
          </Box>
        </Fade>
      </Modal>
            </li>
            <li>
                
            <button onClick={handleOpen}>Cart</button>
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
              <CartReview/>
           
          </Box>
        </Fade>
      </Modal>
            </li>
        </div>
        </div>
        
        
       
       
        
    )

}
export default Navbar;