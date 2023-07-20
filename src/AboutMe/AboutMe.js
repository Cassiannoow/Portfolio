import React from "react"
import './AboutMe.css'
import MyPicture from '../Assets/Images/JP Coracao Veigh Baby.jpg'


export default function AboutMe()
{
    return(
        <div id="AboutMe">
            <div id="image-back">
                <div id="Apresentacao">
                    <div>
                        <span>Hello there 👋, I'm </span>
                        <h1 id="full"><span id="myname">João Cassiano</span></h1>
                        <h2>Full-Stack Developer</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}