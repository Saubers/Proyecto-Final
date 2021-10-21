import React from "react";
import NavBar from '../NavBar/NavBar'
import seba from '../image/elseba.jpg';
import gmail  from '../image/redes/gmail.png';
import linkedin  from '../image/redes/linkedin.png';
import github  from '../image/redes/github.png';
import stylepro from '../Contacto/Contacto.module.css';
export default function Contact() {

    return (
        <div >
            <NavBar />
            <h1>Contactanos en: </h1>
            <div>
                <div className={stylepro.divprofile}>
                    <img className={stylepro.imgradio} src={seba} alt="seba" width="100px" />
                    <img src={gmail} alt="gmail" />
                    <img src={linkedin} alt="linkedin" />
                    <img src={github} alt="github" />
                    
                </div>
                <hr />
                <div className={stylepro.divprofile}>
                    <img className={stylepro.imgradio} src='https://avatars.githubusercontent.com/u/82615816?v=4' alt="mcclovin" width="100px" />
                    <img src={gmail} alt="gmail" />
                    <img src={linkedin} alt="linkedin" />
                    <img src={github} alt="github" />
                </div>
                <hr />
                <div className={stylepro.divprofile}>
                    <img className={stylepro.imgradio} src='https://avatars.githubusercontent.com/u/81939312?s=400&u=ea387cc2a8368da5f299980c7edbba9c01ba04cc&v=4' alt="mcclovin" width="100px" />
                    <img src={gmail} alt="gmail" />
                    <img src={linkedin} alt="linkedin" />
                    <img src={github} alt="github" />
                </div>
                <hr />
                <div className={stylepro.divprofile}>
                    <img className={stylepro.imgradio} src='https://avatars.githubusercontent.com/u/81452895?v=4' alt="mcclovin" width="100px" />
                    <img src={gmail} alt="gmail" />
                    <img src={linkedin} alt="linkedin" />
                    <img src={github} alt="github" />
                </div>
                <hr />
                <div className={stylepro.imgradio} className={stylepro.divprofile}>
                    <img className={stylepro.imgradio} src='https://avatars.githubusercontent.com/u/81446337?v=4' alt="mcclovin" width="100px" />
                    <img src={gmail} alt="gmail" />
                    <img src={linkedin} alt="linkedin" />
                    <img src={github} alt="github" />
                </div>
                <hr />
                <div className={stylepro.imgradio} className={stylepro.divprofile}>
                    <img className={stylepro.imgradio} src='https://avatars.githubusercontent.com/u/82107622?v=4' alt="mcclovin" width="100px" />
                    <img src={gmail} alt="gmail" />
                    <img src={linkedin} alt="linkedin" />
                    <img src={github} alt="github" />
                </div>
            
            </div>
        </div>

    )
}