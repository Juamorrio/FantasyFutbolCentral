import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getValorMercado from '../api/FantasyEndPoints';
import BarChart from '../components/Grafico';
import './Detalle.css';

const Detalle = () => {
  const {id}  = useParams();
  const [Jugador, setJugador] = useState([]);
  const [valor, setValor] = useState([]);
  const [puntosPromedio, setPuntosPromedio] = useState([]);
  const [imagen,setImagen] = useState([]);
  const [valorMercado, setValorMercado] = useState([]);
  


  useEffect( () => {
    getJugador();
    getValorMinMax();
    console.log(valorMercado)
}, [])

const getJugador = async() =>{
  const liga = 'https://api-fantasy.llt-services.com/api/v3/player/'+id;
  await axios.get(liga).then((response) => {
    const respuesta = response.data;
    setJugador(respuesta);
    if (respuesta.images.transparent['256x256'] != null) {
      setImagen(respuesta.images.transparent['256x256'])
    } else { 
      setImagen(respuesta.images.transparent['256x256'])
    }

    setValor(respuesta.marketValue.toLocaleString('es-ES'))
    setPuntosPromedio(respuesta.averagePoints.toString().substring(0, 5))
  })
}

const getValorMinMax = async() =>{
  const valores = await getValorMercado(id);
  const nuevosValorMercado = []
  valores.forEach(element => { nuevosValorMercado.push(element.marketValue);
        })
  
  setValorMercado(nuevosValorMercado);
  
}

  return (
  <div className='contenedor'>
    <div class="contenedorJugador">
      <div className='circulo'>
        <img className='caraJugador' src={imagen}></img>
      </div>
      <div>
        <h1 className='nombre'>{Jugador.nickname}</h1>
        <h4>Valor: {valor} M</h4>
        <h5>Puntos/Partido:  {puntosPromedio}</h5>
        <BarChart id={Jugador.id} />
        <h5>Valor maximo:  {Math.max(valorMercado)}</h5>
        <h5>Valor minimo:  </h5>
      </div>
    </div>
  </div>
  )
}

export default Detalle  