import React,{Fragment} from "react";
import Additional from "../components/additional";
import BuyerDetail from "../components/buyersDetaills";
import LandCards from "../components/landCards"; 

const Buyers = ({children}) => {
  return (
    <Fragment>
      <BuyerDetail/>
      <LandCards/>
      <Additional/>


    </Fragment>
   
    
  );
} 


export default Buyers
