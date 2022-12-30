import React from 'react';
import '../../Style/Style.css'
const Footer = () => {
    return (
        <>        <div className='container mt-5'>
            <div className='row row-cols-1 row-cols-md-3 g-5'>
                <div className='col'>
                    <h1>UIU Canteen</h1>
                    <p>Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Aliquam, Saepe.</p>
                    <div className="share">
                        <a href="#" className="fab fa-facebook-f"></a>
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-instagram"></a>
                        <a href="#" className="fab fa-linkedin"></a>
                    </div>
                </div>
                <div className='col'></div>
                <div className='col'>
                    <div className="contactInfo">
                        <h3>Contact info</h3>
                        <a href="#" className="links"> <i className="fas fa-phone"></i> +8801521490303</a>
                        <a href="#" className="links"> <i className="fas fa-phone"></i> +8801736897967 </a>
                        <a href="#" className="links"> <i className="fas fa-envelope"></i> uiucanteen@gmail.com </a>
                        <a href="#" className="links"> <i className="fas fa-map-marker-alt"></i> Badda, Bangladesh </a>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="credit"> created by |<span> RunTime Error </span> | all rights reserved </div>
        </>

    );
};

export default Footer;