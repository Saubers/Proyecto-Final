import React from 'react'
import logo1 from '../Servicios/logo1.png';
import logo2 from '../Servicios/logo2.png';
import logo3 from '../Servicios/logo3.png';
import StyleServi from '../Servicios/Servi.module.css';
const Servi = () => {
    return (
        <div className={StyleServi.containerprin}>
            <div className={StyleServi.containersecu}>
                <div className={StyleServi.cajas}>
                    <img src={logo1} alt="logo1" width="100px"/>
                    <p>Our web service for your gadgets its comming soon!</p>
                </div>
                <div className={StyleServi.cajas}>
                    <img src={logo2} alt="logo2" width="100px"/>
                    <p>We protect your information aware of uknown people, please don't share your account.</p>
                </div>
                <div className={StyleServi.cajas}>
                    <img src={logo3} alt="logo3" width="100px"/>
                    <p>Our vehicles are checked and in good condition, you can test them in our dealership.</p>
                </div>
            </div>
        </div>
    )
}

export default Servi
