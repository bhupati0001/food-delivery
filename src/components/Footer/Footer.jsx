import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="footer">
                    <div className="footer-left">
                        <div className="footer-logo-container">
                            <img src={assets.logo} alt="tomato-logo" className="footer-logo" />
                            <p className="footer-text">
                                Omato delivers your favorite meals right to your door. Enjoy a
                                variety of cuisines from top local restaurants, all with quick and
                                reliable service. Thank you for choosing Tomato—where every meal is
                                a treat. Follow us on social media for updates and special offers!
                            </p>
                        </div>
                        <div className="footer-social-logo">
                            <img src={assets.facebook_icon} alt="Facebook" />
                            <img src={assets.twitter_icon} alt="Twitter" />
                            <img src={assets.linkedin_icon} alt="LinkedIn" />
                        </div>
                    </div>
                    <div className="footer-middle">
                        <h2 className="footer-heading">COMPANY</h2>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Delivery</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="footer-right" id="contact">
                        <h2 className="footer-heading">GET IN TOUCH</h2>
                        <ul>
                            <li><a href="tel:+919778774741" aria-label="Call us at +91-97787-74741">+91-97787-74741</a></li>
                            <li><a href="mailto:bhupati018@gmail.com" aria-label="Email us at bhupati018@gmail.com">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="footer-copyright">
                    <p>Copyright 2024 &copy; tomato.com - All rights reserved</p>
                    <p>Made with &#x2764; by BHUPATI MOHANTA</p>
                </div>
            </div>

        </>

    );
};

export default Footer;
