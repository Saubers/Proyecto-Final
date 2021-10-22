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
                    <a href="https://www.linkedin.com/in/sebal-fullstack"> <img src={linkedin} alt="linkedgithub"/></a>
                    <a href="https://github.com/Saubers"> <img src={github} alt="github"/></a>
                    
                </div>
                <hr />
                <div className={stylepro.divprofile}>
                    <img className={stylepro.imgradio} src='https://avatars.githubusercontent.com/u/82615816?v=4' alt="mcclovin" width="100px" />
                    <img src={gmail} alt="gmail" />
                    <a href="https://www.linkedin.com/in/victorio-tocalini/"> <img src={linkedin} alt="linkedgithub"/></a>
                    <a href="https://github.com/VictorioTocalini"> <img src={github} alt="github"/></a>
                </div>
                <hr />
                <div className={stylepro.divprofile}>
                    <img className={stylepro.imgradio} src='https://avatars.githubusercontent.com/u/81939312?s=400&u=ea387cc2a8368da5f299980c7edbba9c01ba04cc&v=4' alt="mcclovin" width="100px" />
                    <img src={gmail} alt="gmail" />
                    <a href="https://www.linkedin.com/in/bautista-echaide-fullstack/"> <img src={linkedin} alt="linkedgithub"/></a>
                    <a href="https://github.com/EchaideBauti"> <img src={github} alt="github"/></a>
                    
                </div>
                <hr />
                <div className={stylepro.divprofile}>
                    <img className={stylepro.imgradio} src='https://avatars.githubusercontent.com/u/81452895?v=4' alt="mcclovin" width="100px" />
                    <img src={gmail} alt="gmail" />
                    <a href="https://www.linkedin.com/in/juan-gaitan17/"> <img src={linkedin} alt="linkedgithub"/></a>
                    <a href="https://github.com/JuanGaitan1"> <img src={github} alt="github"/></a>
                </div>
                <hr />
                <div  className={stylepro.divprofile}>
                    <img className={stylepro.imgradio} src='https://avatars.githubusercontent.com/u/81446337?v=4' alt="mcclovin" width="100px" />
                    <img src={gmail} alt="gmail" />
                    <a href="https://www.linkedin.com/in/lucio-gomez/"> <img src={linkedin} alt="linkedgithub"/></a>
                    <a href="https://github.com/LucioGomez"> <img src={github} alt="github"/></a>
                </div>
                <hr />
                <div  className={stylepro.divprofile}>
                    <img className={stylepro.imgradio} src='https://avatars.githubusercontent.com/u/82107622?v=4' alt="mcclovin" width="100px" />
                    <img src={gmail} alt="gmail" />
                    <a href="https://www.linkedin.com/in/leadavfar/"> <img src={linkedin} alt="linkedgithub"/></a>
                    <a href="https://github.com/leadavfar"> <img src={github} alt="github"/></a>
                </div>
            
            </div>
        </div>

    )
}