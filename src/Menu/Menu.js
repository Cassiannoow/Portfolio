import React from "react";
import { Link } from "react-router-dom";
import './Menu.css'
import gitHubIcon from '../Assets/Icons/github.png'
import linkedinIcon from '../Assets/Icons/linkedin.png'
import whatsappIcon from '../Assets/Icons/whatsapp.png'
import instagramIcon from '../Assets/Icons/instagram.png'



export default function Menu({acao})
{
    return(
        <div className={ acao ? 'ativaCor' : 'Menu'}>
            <div id="socialNetworks">
                <Link to="https://github.com/Cassiannoow" target="_blank">
                    <img className="icons" src={gitHubIcon} alt="Github Icon"/>
                </Link>
                <Link to="https://wa.me/5519995569777" target="_blank">
                    <img className="icons" src={whatsappIcon} alt="Whatsapp Icon"/>
                </Link>
                <Link to="https://www.instagram.com/jotta.cassiano" target="_blank">
                    <img className="icons" src={instagramIcon} alt="Instagram Icon"/>
                </Link>
            </div>
            <div id="Links">
                <a className="link" href="#AboutMe">ABOUT-ME</a>
                <a className="link" href="#skills">SKILLS</a>
                <a className="link" href="#projects">PROJECTS</a>
            </div>
        </div>
    )
}