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
        <div id="skills">
            <h1 id='tituloMySkills'>SKILLS</h1>
            <table>
                <tr id='titulos'>
                    <th><img className='iconsSkills' src={frontendIcon} width={50}/><h2>FRONT-END</h2></th>
                    <th><img className='iconsSkills' src={backendIcon} width={50}/><h2>BACK-END</h2></th>
                    <th><img className='iconsSkills' src={dbIcon} width={50}/><h2>DATABASES</h2></th>
                </tr>
                <tr className='languages'>
                    <td><img src={htmlIcon}/>HTML</td>
                    <td><img src={nodeIcon}/>NODE</td>
                    <td><img src={sqlIcon}/>SQL SERVER</td>
                </tr>
                <tr className='languages'>
                    <td><img src={cssIcon}/>CSS</td>
                    <td><img src={javaIcon}/>JAVA</td>
                    <td><img src={mysqlIcon}/>MY SQL</td>
                </tr>
                <tr className='languages'>
                    <td><img src={jsIcon}/>JAVASCRIPT</td>
                    <td><img src={csharpIcon} width={100}/>C#</td>
                    <td><img src={mongodbIcon}/>MONGODB</td>
                </tr>
                <tr className='languages'>
                    <td><img src={reactIcon}/>REACT</td>
                    <td><img src={pythonIcon}/>PYTHON</td>
                    <td><img src={dbeaverIcon}/>DBEAVER</td>
                </tr>
            </table>
        </div>
    )
}