import './Projects.css'
import React from 'react'

export default function Projects()
{
    return(
        <div id="projects">
            <h1 id='tituloProjects'>PROJECTS</h1>
            <div id='Container-Projects'>
                <div className='card-Project'>
                    <h1>PROAMB</h1>
                    <div className='imgFake'>Imagem</div>
                    <p>
                        The site proamb is a site that deals with nature and recycling, 
                        we created a community like a blog.
                    </p>
                </div>
                <div className='card-Project'>
                    <h1>Nome Projeto</h1>
                    <div className='imgFake'>Imagem</div>
                    <p>Breve Descrição</p>
                </div>
                <div className='card-Project'>
                    <h1>Nome Projeto</h1>
                    <div className='imgFake'>Imagem</div>
                    <p>Breve Descrição</p>
                </div>
            </div>
            
        </div>
    )
}