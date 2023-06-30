import './Projects.css'
import { Link } from 'react-router-dom'
import React from 'react'
import htmlIcon from '../Assets/Icons/html.png'
import cssIcon from '../Assets/Icons/css.png'
import jsIcon from '../Assets/Icons/javascript.png'
import reactIcon from '../Assets/Icons/react.png'
import javaIcon from '../Assets/Icons/java.png'
import csharpIcon from '../Assets/Icons/csharp.png'
import nodeIcon from '../Assets/Icons/node-js.png'
import sqlIcon from '../Assets/Icons/sql-server.png'
import mysqlIcon from '../Assets/Icons/mysql.png'
import mongodbIcon from '../Assets/Icons/mongodb.png'
import pythonIcon from '../Assets/Icons/python.png'
import dbeaverIcon from '../Assets/Icons/dbeaver.png'
import frontendIcon from '../Assets/Icons/front-end.png'
import backendIcon from '../Assets/Icons/backend.png'
import dbIcon from '../Assets/Icons/database.png'
import proambPicture from '../Assets/Images/Início.png'
import doubleDown from '../Assets/Icons/doubledown.png'

export default function Projects()
{
    return(
        <div id="projects">
            <h1 id='tituloProjects'>PROJECTS</h1>
            <div id='Container-Projects'>
                <div className='card-Project'>
                    <div className='card-content'>
                        <h1>PROAMB</h1>
                        <p>
                            The site proamb is a site that deals with nature and recycling, 
                            we created a community like a blog.
                        </p>
                        <div className='tecnologies'>
                            <h4>Technologies used:</h4>
                            <img className='tecnologiesUsed' src={htmlIcon} width={50}/>
                            <img className='tecnologiesUsed' src={cssIcon} width={50}/>
                            <img className='tecnologiesUsed' src={reactIcon} width={50}/>
                            <img className='tecnologiesUsed' src={csharpIcon} width={50}/>
                            <img className='tecnologiesUsed' src={sqlIcon} width={50}/>
                        </div>
                    </div>
                    <div className='picturebox'>
                        <img className='project-picture' src={proambPicture} height={300}/>
                    </div>
                </div>
                <div className='card-Project'>
                    <div className='picturebox'>
                        <img className='project-picture' src={proambPicture} height={300}/>
                    </div>
                    <div className='card-content'>
                        <h1>PROAMB</h1>
                        <p>
                            The site proamb is a site that deals with nature and recycling, 
                            we created a community like a blog.
                        </p>
                        <div className='tecnologies'>
                            <h4>Technologies used:</h4>
                            <img className='tecnologiesUsed' src={htmlIcon} width={50}/>
                            <img className='tecnologiesUsed' src={cssIcon} width={50}/>
                            <img className='tecnologiesUsed' src={reactIcon} width={50}/>
                            <img className='tecnologiesUsed' src={csharpIcon} width={50}/>
                            <img className='tecnologiesUsed' src={sqlIcon} width={50}/>
                        </div>
                    </div>
                </div>
                <div className='card-Project'>
                    <div className='card-content'>
                        <h1>PROAMB</h1>
                        <p>
                            The site proamb is a site that deals with nature and recycling, 
                            we created a community like a blog.
                        </p>
                        <div className='tecnologies'>
                            <h4>Technologies used:</h4>
                            <img className='tecnologiesUsed' src={htmlIcon} width={50}/>
                            <img className='tecnologiesUsed' src={cssIcon} width={50}/>
                            <img className='tecnologiesUsed' src={reactIcon} width={50}/>
                            <img className='tecnologiesUsed' src={csharpIcon} width={50}/>
                            <img className='tecnologiesUsed' src={sqlIcon} width={50}/>
                        </div>
                    </div>
                    <div className='picturebox'>
                        <img className='project-picture' src={proambPicture} height={300}/>
                    </div>
                </div>
                <div id='show-more'>
                    <Link id='view-more-button'>VIEW MORE</Link>
                </div>
            </div>
            
        </div>
    )
}