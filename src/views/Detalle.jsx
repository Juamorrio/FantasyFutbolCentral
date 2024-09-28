import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStats, getValorMercado } from '../api/FantasyEndPoints';
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
    
}, [])

const getJugador = async() =>{
  try {
    const respuesta = await getStats(id); // Obtiene directamente la respuesta
    setJugador(respuesta);

    // Manejo de imágenes
    if (respuesta.images && respuesta.images.transparent && respuesta.images.transparent['256x256']) {
      setImagen(respuesta.images.transparent['256x256']);
    } else { 
      setImagen('default_image.png'); // Usa una imagen por defecto si no hay
    }

    // Manejo de valores
    setValor(respuesta.marketValue.toLocaleString('es-ES'));
    setPuntosPromedio(respuesta.averagePoints.toString().substring(0, 5));
  } catch (error) {
    console.error('Error al obtener el jugador:', error.message); // Manejo de errores
  }
}

const getValorMinMax = async() =>{
  try {
    const valores = await getValorMercado(id);
    
    // Asegúrate de que 'valores' es un arreglo
    if (Array.isArray(valores)) {
      const nuevosValorMercado = valores.map(element => element.marketValue); // Extrae el marketValue
      nuevosValorMercado.sort((a, b) => a - b); // Ordena los valores

      // Formatear los valores
      const ValorMercadoFormateado = nuevosValorMercado.map(element => element.toLocaleString('es-ES'));
      setValorMercado(ValorMercadoFormateado);
    } else {
      console.error('La respuesta no es un arreglo:', valores);
    }
  } catch (error) {
    console.error('Error al obtener el valor de mercado:', error.message); // Manejo de errores
  }
}

const JugadorStatus = () => {
  let mensajeEstado;
  
  if (Jugador.playerStatus === 'injured') {
    mensajeEstado = <h4 style={{color: 'red'}}>LESIONADO</h4>;
  } else if(Jugador.playerStatus === 'ok') {
    mensajeEstado = <h4 style={{color: 'green'}}>ALINEABLE</h4>;
  } else {
    mensajeEstado = <h4 style={{color: '#ffc300'}}>DUDA</h4>;
  }
return mensajeEstado;
};
  

  


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
        {
      valorMercado[0] > valorMercado[valorMercado.length - 1] ? (
        <>
          
        </>
      ) : (
        <>
          <h5>Valor maximo:  {valorMercado[valorMercado.length - 1]} M</h5>
          <h5>Valor minimo:  {valorMercado[0]} M</h5>
        </>
      )
        }
        <JugadorStatus/>
      </div>
    </div>
  </div>
  )
}

export default Detalle  