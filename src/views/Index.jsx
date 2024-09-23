import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { Col, Container, Input, InputGroup, InputGroupText, Row } from 'reactstrap';
import Poketarjeta from '../components/poketarjeta';



const Index = () => {
    const [pokemons, setPokemons] = useState([]);
    const [allPokemons, setAllPokemons] = useState([]);
    const [listado, setListado] = useState([]);
    const [filtro, setFiltro] = useState('');
    const [offset, setOffset] = useState(0); 
    const [limit, setLimit] = useState(20);
    const [total, setTotal] = useState(0);
    useEffect( () => {
        getPokemons(offset)
        getAllPokemons()
    }, []

    )

    const getPokemons = async(o) => {
        //const liga = 'https://pokeapi.co/api/v2/pokemon?limit='+limit+'&offset='+o
        const liga2 = 'https://api-fantasy.llt-services.com/api/v4/players?x-lang=es'
        axios.get(liga2).then( async(response) => {
            const respuesta = response.data;
            //setPokemons(respuesta)
            //setPokemons(respuesta.results)
            //setListado(respuesta.results)
            //setTotal(respuesta.count)
            setPokemons(respuesta)
            setListado(respuesta)
            setTotal(200)
            
        })
    }

    const getAllPokemons = async() => {
      //const liga = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
      const liga2 = 'https://api-fantasy.llt-services.com/api/v4/players?x-lang=es'
      axios.get(liga2).then( async(response) => {
          const respuesta = response.data;
          //setPokemons(respuesta)
          //setAllPokemons(respuesta.results)
          setAllPokemons(respuesta)
      })
  }

  const buscar = async(e) => {
    if (e.keyCode == 13) {
      if(filtro.trim() != ''){
        setListado([]);
        setTimeout( () => {
          setListado(allPokemons.filter(p => p.nickname.includes(filtro)))
        }, 100)
      }
      
    } else if(filtro.trim() == '') {
      setListado([]);
      setTimeout( () => {
        setListado(pokemons);
      }, 100)
      
    }
  }

  const goPage = async(p) => {
    setListado([]);
    await getPokemons( (p==1) ? 0 : ((p-1)*20));
    setOffset(p);
  }
  return (
    <Container className='shadow bg-danger mt-3' >
      <Row>
        <Col>
          <InputGroup className='mt-3 mb-3'>
          <InputGroupText><i className='fa-solid fa-search'></i></InputGroupText>
          <Input value={filtro} onChange={(e) => {setFiltro(e.target.value)}} onKeyUpCapture={buscar} placeholder='Buscar Jugador'></Input>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        { listado.map((pok,i) => (
          <Poketarjeta poke={pok} key={i}></Poketarjeta>
        ))}
        <PaginationControl last={true} limit={limit} total={total} page={offset}
        changePage={page=>goPage(page)}/>
      </Row>
    </Container>
  )
}

export default Index