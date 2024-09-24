import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardFooter, CardImg, Col } from 'reactstrap';

const Poketarjeta = (params) => {
  const [pokemon, setPokemon] = useState([]);
  const [imagen,setImagen] = useState('');
  

  useEffect( () => {
    getPokemon()
}, [])

  const getPokemon = async() => {
    const liga = 'https://api-fantasy.llt-services.com/api/v3/player/'+params.poke.id+'?x-lang=es'
    axios.get(liga).then( async(response)=>{
      const respuesta = response.data;
      console.log(respuesta)
      setPokemon(respuesta);
      if (respuesta.images.transparent['256x256'] != null) {
        setImagen(respuesta.images.transparent['256x256'])
      } else { 
        setImagen(respuesta.images.transparent['256x256'])
      }
    })

  }
  return (
    <Col sm = '4' lg='3' className='mb-3'>
      <Card className={'card-hover shadow border-4 border-warning'}>
        <CardImg src= {imagen} height='150' width='80'className='p-2'/>
        <CardBody className='text-center'>
          <Badge pill color= 'danger'># {pokemon.id}</Badge>
          <label className='fs-4 text-capitalize'>{pokemon.nickname}</label>
        </CardBody>
        <CardFooter className='bg-warning'>
          <Link to={'/Jugador/'+pokemon.id} className='btn btn-dark'>
            <i className='fa-solid fa-arrow-up-right-from-square'></i> Detalle
          </Link>
        </CardFooter>
      </Card>
    </Col>
  )
}

export default Poketarjeta