import axios from 'axios';

const getValorMercado = async (id) => {
  console.log(id)
    return new Promise(function (resolve, reject) {
      axios.get('https://api-fantasy.llt-services.com/api/v3/player/'+id+'/market-value?x-lang=es')
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          console.log('No se puede representar la grafica')
        })
    })
  }
  export default getValorMercado

