import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css';
import logo from '/img/Logo.png';

const Inicio = () =>{


    return(
        <div>
            <div>
                <img src={logo}></img>
            </div>
            <div className='contenedorTitulo'>
                <button type="button" class="btnTitulo">
                <strong>FANTASY CENTRAL</strong>
                <div id="container-stars">
                    <div id="stars"></div>
                </div>

                <div id="glow">
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
                </button>

            </div>
            <Link to={'/Equipos'} className='btnInicio'>
                <p>EMPEZAR</p>
            </Link>
        </div>
    )
}
export default Inicio;