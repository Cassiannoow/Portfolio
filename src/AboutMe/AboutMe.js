import React from "react"
import './AboutMe.css'
import MyPicture from '../Assets/Images/JP Coracao Veigh Baby.jpg'


export default function AboutMe()
{
    return(
        <div id="AboutMe">
            <div id="ApresentacaoCompleta">
                <div id="Apresentacao">
                    <h1>
                        Hello there 👋, <br/>
                        I'm João Cassiano,<br/>
                        Full-Stack Developer 🚀
                    </h1>
                    <h6 id="Apresentacao-2">
                        I'm in love with programming and super excited to learn new languages, 
                        I'm currently studying at Colégio Técnico de Campinas (COTUCA), 
                        since I was a child I've been very interested in technology, 
                        I had already taken some programming courses, 
                        but I started intensively when I entered school in 2022,          
                        I am very easy to learn and I am always looking for knowledge.
                    </h6>
                </div>
                <img id="MyPicture" src={MyPicture} alt="A picture of me"/>
            </div>
        </div>
    )
}