import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BarChart from '../components/Grafico';
import './Detalle.css';

const Detalle = () => {
  const {id}  = useParams();
  const [Jugador, setJugador] = useState([]);
  const [valor, setValor] = useState([]);
  const [puntosPromedio, setPuntosPromedio] = useState([]);
  const [imagen,setImagen] = useState([]);
  const [escudo, setEscudo] = useState('');

  useEffect( () => {
    getJugador();
}, [])

const getJugador = async() =>{
  const liga = 'https://api-fantasy.llt-services.com/api/v3/player/'+id;
  axios.get(liga).then((response) => {
    const respuesta = response.data;
    setJugador(respuesta);
    if (respuesta.images.transparent['256x256'] != null) {
      setImagen(respuesta.images.transparent['256x256'])
    } else { 
      setImagen(respuesta.images.transparent['256x256'])
    }

    setEscudo(respuesta.team.badgeColor)
    setValor(respuesta.marketValue.toLocaleString('es-ES'))
    setPuntosPromedio(respuesta.averagePoints.toString().substring(0, 5))
  })
}

  return (
  <div className='contenedor'>
    <div class="contenedorJugador">
      <div className='circulo'>
        <img className='caraJugador' src={imagen}></img>
      </div>
      <div>
        <h1 className='nombre'>{Jugador.nickname}</h1>
        <h4>Valor: {valor}</h4>
        <h5>Puntos/Partido:  {puntosPromedio}</h5>
        <BarChart id={Jugador.id} />
      </div>
    </div>
  </div>
  )
}

export default Detalle  