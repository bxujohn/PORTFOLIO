import React from "react";
import "./Footer.css";

export default function Footer(){
    return(
        
        <div className="footer-container">
            <div className="footer-parent">
                <div className="footer-details">
                    
                        <img 
                        src={require ("../../../assets/Home/footer.jpeg")} 
                        alt="no internet connection"
                        />
                      
                </div>
            </div>
            
        </div>
    )
}