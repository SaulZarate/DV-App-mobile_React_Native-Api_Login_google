const axios = require('axios');

function datosCovid(){
    //resultados.then( (promise) => console.log(promise.data) ) -> Devuelve los datos
    return axios.get('https://api.covid19api.com/summary')
}

module.exports = datosCovid;