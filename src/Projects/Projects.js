import './Projects.css'
import { Link } from 'react-router-dom'
import React from 'react'
import androidIcon from '../Assets/Icons/android-Studio.png'
import kotlinIcon from '../Assets/Icons/kotlin.png'
import firebaseIcon from '../Assets/Icons/firebase.png'
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
import braintalkPicture from '../Assets/Images/Midnight.png'
import a7chavesPicture from '../Assets/Images/a7chaves.png'
import doubleDown from '../Assets/Icons/doubledown.png'

export default function Projects()
{
    return(
        <div className="projects">
            <div className='gradient'>
                <h1 id='tituloProjects'>PROJECTS</h1>
                <div id='Container-Projects'>
                    <div className='card-Project'>
                        <div className='card-content'>
                            <h1>A 7 CHAVES STUDIO</h1> 
                            <p>
                                TThis is just a website to promote the social networks of a music studio, the website has a proprietary domain.
                            </p>
                            <div className='tecnologies'>
                                <h4>Technologies used:</h4>
                                <img className='tecnologiesUsed' src={htmlIcon} width={50}/>
                                <img className='tecnologiesUsed' src={cssIcon} width={50}/>
                            </div>
                        </div>
                        <div className='picturebox'>
                            <Link to="https://a7chavesstudio.com.br/" target="_blank">
                                <img className='project-picture' src={a7chavesPicture} height={300}/>
                            </Link>
                        </div>
                    </div>
                    <div className='card-Project'>
                        <div className='card-content'>
                            <h1>BRAINTALK</h1>
                            <p>
                            BrainTalk is an innovative social networking platform, 
                            initially designed with the main focus on providing a virtual space dedicated to studies.
                            </p>
                            <div className='tecnologies'>
                                <h4>Technologies used:</h4>
                                <img className='tecnologiesUsed' src={jsIcon} width={50}/>
                                <img className='tecnologiesUsed' src={androidIcon} width={50}/>
                                <img className='tecnologiesUsed' src={kotlinIcon} width={50}/>
                                <img className='tecnologiesUsed' src={firebaseIcon} width={50}/>
                            </div>
                        </div>
                        <div className='tamanhoImagem'>
                            <div className='picturebox-braintalk'>
                                <Link to="https://github.com/Cassiannoow/BrainTalk" target="_blank">
                                    <img className='project-picture-braintalk' src={braintalkPicture}height={300}/>
                                </Link>
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
                            <Link to="https://github.com/Cassiannoow/ProAmb" target="_blank">
                                <img className='project-picture' src={proambPicture} height={300}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}