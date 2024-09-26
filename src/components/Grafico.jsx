import axios from 'axios';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

// Necesitas registrar los componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({id}) => {
    // Datos para el gráfico
    const [Jugador, setJugador] = useState([]);
    const [fechas, setFechas] = useState([]);
    const [valorMercado, setValorMercado] = useState([]);
    console.log(id)

    useEffect( () => {
        getJugador({id})
    }, [])

    const getJugador = async({id}) => {
        const liga = 'https://api-fantasy.llt-services.com/api/v3/player/'+id+'/market-value?x-lang=es'
        await axios.get(liga).then( async(response)=>{
        const respuesta = response.data;
        setJugador(respuesta);
        })
        
        const valorMercado = [];
        const fechas = [];

        Jugador.forEach(element => { valorMercado .push(element.marketValue);
            fechas.push(new Date(element.date).getDate()+'/'+new Date(element.date).getMonth())

        setFechas(fechas);
        setValorMercado(valorMercado);

        })

    }
    

  const data = {
    labels: fechas,
    datasets: [
        {
          label: 'Ventas en USD',
          data: valorMercado,
          backgroundColor: '#538d22',
        },
      ],
  };

  // Opciones de configuración
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Ventas Mensuales',
      },
    },
  };

  return <Bar data={data} options={options} />;

}
export default BarChart;
