import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { getValorMercado } from '../api/FantasyEndPoints';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({id}) => {
    const [fechas, setFechas] = useState([]);
    const [valorMercado, setValorMercado] = useState([]);
    const [ idJugador, setIdJugador] = useState(null);
    
    
    useEffect( () => {
      if (id) {
        getIdJugador(id); 
        }
      }, [id]); 
      const getIdJugador = (id) => {
        setIdJugador(id);  
      };

  
    useEffect(() => {
      if (idJugador) {
          getJugador(idJugador); 
      }
  }, [idJugador]); 


    const getJugador = async(idJugador) => {
      const liga = await getValorMercado(idJugador);
      const nuevosValorMercado = []
      const nuevasFechas = []
      liga.forEach(element => { nuevosValorMercado.push(element.marketValue);
        nuevasFechas.push(new Date(element.date).getDate()+'/'+new Date(element.date).getMonth())
        })
      setFechas(nuevasFechas);
      setValorMercado(nuevosValorMercado );
    }
    

  const data = {
    labels: fechas,
    datasets: [
        {
          label: 'Valor de Mercado',
          data: valorMercado,
          backgroundColor: '#4F518C',
        },
      ],
  };

  // Opciones de configuración
  const options = {
    /* width: 100, 
    height: 100,  */
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Evolución de valor',
      },
    },
  };

  return <Bar data={data} options={options} />;

}
export default BarChart;
