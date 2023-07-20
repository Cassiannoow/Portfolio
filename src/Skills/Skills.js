import './Skills.css'
import React from "react"
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


export default function Skills()
{
    return(
        <div className="skills">
            <div className='gradient'>
                <h1 id='tituloMySkills'>SKILLS</h1>
                <div id='skill-list'>
                    <div className='areas'>
                        <div className='icons-with-name-title'>
                            <h2 className='title-area'>FRONT-END</h2>
                        </div>
                        <div className='languages-icons'>
                            <div className='icons-with-name'>
                                <img width={75} src={htmlIcon}/>HTML
                            </div>
                            <div className='icons-with-name'>
                                <img width={75} src={cssIcon}/>CSS</div>
                            <div className='icons-with-name'>
                                <img width={75} src={jsIcon}/>JAVASCRIPT</div>
                            <div className='icons-with-name'>
                                <img width={75} src={reactIcon}/>REACT
                            </div>
                        </div>
                    </div>
                    <div className='areas'>
                        <div className='icons-with-name-title'>
                            <h2 className='title-area'>BACK-END</h2>
                        </div>
                        <div className='languages-icons'>
                            <div className='icons-with-name'>
                                <img width={75} src={nodeIcon}/>NODE
                            </div>
                            <div className='icons-with-name'>
                                <img width={75} src={javaIcon}/>JAVA
                            </div>
                            <div className='icons-with-name'>
                                <img width={75} src={csharpIcon}/>C#
                            </div>
                            <div className='icons-with-name'>
                                <img width={75} src={pythonIcon}/>PYTHON
                            </div>
                        </div>
                    </div>
                    <div className='areas'>
                        <div className='icons-with-name-title'>
                            <h2 className='title-area'>DATABASES</h2>
                        </div>
                        <div className='languages-icons'>
                            <div className='icons-with-name'>
                                <img width={75} src={sqlIcon}/>SQL SERVER
                            </div>
                            <div className='icons-with-name'>
                                <img width={75} src={mysqlIcon}/>MY SQL
                            </div>
                            <div className='icons-with-name'>
                                <img width={75} src={mongodbIcon}/>MONGODB
                            </div>
                            <div className='icons-with-name'>
                                <img width={75} id='dbeaver' src={dbeaverIcon}/>DBEAVER
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}