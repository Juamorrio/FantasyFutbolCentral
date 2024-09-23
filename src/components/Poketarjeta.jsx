import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardFooter, CardImg, Col } from 'reactstrap';

const Poketarjeta = (params) => {
  const [pokemon, setPokemon] = useState([]);
  const [imagen,setImagen] = useState('');
  console.log(pokemon)

  useEffect( () => {
    getPokemon()
}, [])

  const getPokemon = async() => {
    //const liga = params.poke.url;
    const liga = 'https://api-fantasy.llt-services.com/api/v3/player/'+params.poke.id+'?x-lang=es'
    axios.get(liga).then( async(response)=>{
      const respuesta = response.data;
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
      <Card className={'shadow border-4 border-warning'}>
        <CardImg src= {imagen} height='150' width='150'className='p-2'/>
        <CardBody className='text-center'>
          <Badge pill color= 'danger'># {pokemon.id}</Badge>
          <label className='fs-4 text-capitalize'>{pokemon.name}</label>
        </CardBody>
        <CardFooter className='bg-warning'>
          <Link to={'/pokemon/'+pokemon.id} className='btn btn-dark'>
            <i className='fa-solid fa-arrow-up-right-from-square'></i> Detalle
          </Link>
        </CardFooter>
      </Card>
    </Col>
  )
}

export default Poketarjeta