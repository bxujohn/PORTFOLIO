import React from "react";
import "./Profile.css";

export default function Profile() {
    return(
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                            <div className='colz-icon'>

                                <a href="https://web.facebook.com/PiitSeenyoor">
                                    <i className="fa fa-facebook-square"></i>
                                </a>

                                <a href="https://www.instagram.com/bxujohn/">
                                    <i className="fa fa-instagram"></i>
                                </a>

                                <a href="https://www.youtube.com/channel/UCNUB2ttYW1_yZlNi_j4qq6Q">
                                    <i className="fa fa-youtube-square"></i>
                                </a>

                                <a href="https://twitter.com/BXUjohn">
                                    <i className="fa fa-twitter"></i>
                                </a>

                                <a href="https://www.google.com.ph/maps/dir/8.7121947,125.7424457/8.7121984,125.7424476/@8.7122115,125.7425974,152m/data=!3m1!1e3">
                                    <i className="fa fa-map-marker"></i>
                                </a>
                            </div>
                            
                        </div>

                                <div className="profile-details-name">
                                    <span className="primary-text">
                                        {" "}
                                        Hello, I'm <span className="highlighted-text">John Bryan</span>
                                    </span>
                                </div>
                                
                        <span>
                            <br/> 
                        </span>
                        <span className='profile-role'>
                            Specializing in building everything from small
                            <span>
                                 <br/>business to rich interactive web apps.
                            </span>
                        </span>
                       
                    
                        <div className='profile-options'>
                                <span>
                                    <br/> 
                                </span>
                                <button className='btn primary-btn'>
                                    {""}
                                    Hire Me{""}
                                </button>
                                <a href="JohnBryan.pdf" download="John JohnBryan.pdf">
                                    <button className="btn highlighted-btn">Get Resume</button>
                                </a>
                                <span><br/></span><span><br/></span>
                                <span className="secondary-text">
                                {" "}
                                " I am the <span className="highlighted-text2">CSS</span> of your <span className="highlighted-text3">HTML</span> "       
                                </span>
                                <div className="profile-about">
                                <span><br/></span>
                           </div>

                        </div>
                    </div>
                            <div className="profile-picture">
                                <div className="profile-picture-background">

                            </div>
        
                </div>
            </div>        
        </div>
    )
}