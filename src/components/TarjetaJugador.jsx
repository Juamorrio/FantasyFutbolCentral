import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Cartas.css';

const TarjetaJugador = (params) => {
  const [Jugador, setJugador] = useState([]);
  const [imagen,setImagen] = useState('');
  

  useEffect( () => {
    getJugador()
}, [])

  const getJugador = async() => {
    const liga = 'https://api-fantasy.llt-services.com/api/v3/player/'+params.poke.id+'?x-lang=es'
    axios.get(liga).then( async(response)=>{
      const respuesta = response.data;
      console.log(respuesta)
      setJugador(respuesta);
      if (respuesta.images.transparent['256x256'] != null) {
        setImagen(respuesta.images.transparent['256x256'])
      } else { 
        setImagen(respuesta.images.transparent['256x256'])
      }
    })

  }
  return (
  <div class="col custom-col mb-3">
      <div class="card">
        <img src = {imagen}></img>
        <div class="card-details">
          <p class="text-title">{Jugador.nickname}</p>
          <p class="text-body">{Jugador.position}</p>
        </div>
  <Link to={'/Jugador/'+Jugador.id} class="card-button" >More info</Link>
</div>
</div>

    
  )
}

export default TarjetaJugador
