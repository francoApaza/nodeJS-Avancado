const fetch = require('node-fetch')

module.exports = async function buscaDistrit(UF){
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/distritos`)
    const json = await response.json()

    return json
}