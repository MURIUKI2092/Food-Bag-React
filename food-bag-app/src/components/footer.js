import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer=()=>{
    return(
        <section className="footer">
            <div className="footerDetails">
                <div className="about">
                    <h3>About Us</h3>
                    <li>Aim</li>
                    <li>Vision</li>
                    <li>Location</li>

                </div>
                <div className="service">
                    <h3>Services</h3>
                    <li>Wedding Reception</li>
                    <li>Food Ordering</li>
                    <li>Food supply</li>
                    
                </div>
                <div className="contact">
                <h3>Contact Us</h3>
                    
                    <li>Nairobi</li>
                    <li>Nakuru</li>
                    <li>Kisii</li>
                    
                </div>
                <div className="socials">
                <h3>Social Media</h3>
                    <li><em><TwitterIcon/></em></li>
                    <li><em><FacebookIcon/></em></li>
                    <li><em><InstagramIcon/></em></li>
                    
                </div>

            </div>
            <div className="otherDetails">
                <div className="terms">
                    <p>
                        terms & conditions. Privacy Policy
                    </p>

                </div>
                <div className="copyright">
                    <p>
                        &copy;  copyright {new Date().getUTCFullYear()}. FoodBag is a registered Trademark
                    </p>

                </div>

            </div>


        </section>
    )

}
export default Footer