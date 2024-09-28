import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { useParams } from 'react-router-dom';
import { Col, Container, Input, InputGroup, InputGroupText, Row } from 'reactstrap';
import TarjetaJugador from '../components/TarjetaJugador';



const Index = () => {
    const {Equipo}  = useParams();
    console.log(Equipo)
    const [Jugadores, setJugadores] = useState([]);
    const [allJugadores, setAllJugadores] = useState([]);
    const [listado, setListado] = useState([]);
    const [filtro, setFiltro] = useState('');
    const [offset, setOffset] = useState(0); 
    const [limit, setLimit] = useState(20);
    const [total, setTotal] = useState(0);
    useEffect( () => {
        getJugadores(offset)
        getAllJugadores()
    }, []

    )

    const getJugadores = async(o) => {
        const liga2 = '/api/players'
        axios.get(liga2).then( async(response) => {
            const respuesta = response.data;
            setJugadores(respuesta)
            setListado(respuesta)
            setTotal(200)
            
        })
    }

    const getAllJugadores = async() => {
      const liga2 = '/api/players'
      axios.get(liga2).then( async(response) => {
          const respuesta = response.data;
          setAllJugadores(respuesta)
      })
  }

  const buscar = async(e) => {
    if (e.keyCode == 13) {
      if(filtro.trim() != ''){
        setListado([]);
        setTimeout( () => {
          setListado(allJugadores.filter(p => p.nickname.includes(filtro)))
        }, 100)
      }
      
    } else if(filtro.trim() == '') {
      setListado([]);
      setTimeout( () => {
        setListado(Jugadores);
      }, 100)
      
    }
  }

  const goPage = async(p) => {
    setListado([]);
    await getJugadores( (p==1) ? 0 : ((p-1)*20));
    setOffset(p);
  }
  return (
    <Container className='contenedorJugadores' >
      <Row>
        <Col>
          <InputGroup className='mt-3 mb-3'>
          <InputGroupText><i className='fa-solid fa-search'></i></InputGroupText>
          <Input value={filtro} onChange={(e) => {setFiltro(e.target.value)}} onKeyUpCapture={buscar} placeholder='Buscar Jugador'></Input>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        { listado.map((pok,i) => {
          if (pok.team.name == Equipo){
            return (<TarjetaJugador poke={pok} key={i}></TarjetaJugador>)
          }
        }
          
        )}
        <PaginationControl last={true} limit={limit} total={total} page={offset}
        changePage={page=>goPage(page)}/>
      </Row>
    </Container>
  )
}

export default Index