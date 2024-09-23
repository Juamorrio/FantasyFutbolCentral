import axios from 'axios'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
const Detalle = () => {
  const {id}  = useParams();
  const [pokemon, setPokemon] = ([]);
  const [valor, setValor] = ([]);
  const [estado, setEstado] = ([]);
  const [puntosPromedio, setPuntosPromedio] = ([])


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
          </CardBody>
        </Card>
        </Col>
      </Row>

    </Container>
  )
}

export default Detalle