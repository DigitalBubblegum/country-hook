import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/'
const getAll = async() =>{
    const response = await axios.get(`${baseUrl}/api/all`)
    return response.data
}
const getSpecific = async(name) => {
    const response = await axios.get(`${baseUrl}/api/name/${name}`)
    return response.data
}
export default { getAll,getSpecific }