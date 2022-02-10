import React from 'react';



const Navbar = ()=>{

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
                Cart
            </li>
            <li>
                Login
            </li>
            <li>
                Sign Up
            </li>
        </div>
        </div>
        
        
       
       
        
    )

}
export default Navbar;