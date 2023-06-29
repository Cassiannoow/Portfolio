import './Skills.css'
import React from "react"


export default function Skills()
{
    return(
        <div id="Skills">
            <h1>MY SKILLS</h1>
            <table>
                <tr id='titulos'>
                    <th><h2>FRONT-END</h2></th>
                    <th><h2>BACK-END</h2></th>
                </tr>
                <tr className='languages'>
                    <td>HTML</td>
                    <td>Node</td>
                </tr>
                <tr className='languages'>
                    <td>CSS</td>
                    <td>Java</td>
                </tr>
                <tr className='languages'>
                    <td>JAVASCRIPT</td>
                    <td>C#</td>
                </tr>
                <tr className='languages'>
                    <td>REACT</td>
                    <td>SQL</td>
                </tr>
            </table>
        </div>
    )
}