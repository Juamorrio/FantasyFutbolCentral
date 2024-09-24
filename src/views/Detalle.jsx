import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, CardBody, CardText, Col, Container, Row } from 'reactstrap'
const Detalle = () => {
  const {id}  = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [valor, setValor] = useState([]);
  const [estado, setEstado] = ([]);
  const [puntosPromedio, setPuntosPromedio] = ([])
  const [imagen,setImagen] = useState([]);
  const [escudo, setEscudo] = useState('');

  useEffect( () => {
    getPokemon()
}, [])


const getPokemon = async() =>{
  const liga = 'https://api-fantasy.llt-services.com/api/v3/player/'+id;
  axios.get(liga).then((response) => {
    const respuesta = response.data;
    setPokemon(respuesta);
    if (respuesta.images.transparent['256x256'] != null) {
      setImagen(respuesta.images.transparent['256x256'])
    } else { 
      setImagen(respuesta.images.transparent['256x256'])
    }

    setEscudo(respuesta.team.badgeColor)
    setValor(respuesta.marketValue.toLocaleString('es-ES'))
  })
}

  return (
    <Container className='bg-danger mt-3'>
      <Row>
        <Col>
        <Card className='shadow mt-3 mb-3'>
          <CardBody className='mt-3'>
            <Row>
              <Col className='text-end'>
              <Link to='/' className='btn btn-warning'><i className='fa-solid fa-home'></i>
              </Link>
              </Col>
            </Row>
            <Row >
              <Col md='6'>
                <CardText className='h1 text-capitaliza'>{pokemon.nickname}</CardText>
                <CardText className='fs-3'>
                Precio: <b>{valor}M</b></CardText>
                <CardText className='fs-3'>
                Puntos Totales: <b>{pokemon.points}</b></CardText>
                <CardText className='fs-5'>
                Posicion: <b>{pokemon.position}</b>
                </CardText>
                
              </Col>
              <Col md='6'>
              <img src={imagen} className='img-fluid'></img>
              </Col>
              <Col md='6'>
              <img src={escudo} className='img-fluid'></img>
              </Col>
            </Row>
          </CardBody>
        </Card>
        </Col>
      </Row>

    </Container>
  )
}

export default Detalle