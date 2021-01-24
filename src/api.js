import axios from 'axios'

const URL = 'https://disease.sh/v3/covid-19/countries?sort=todayCases'
async function getCountry () {
  try {
    const response = await axios.get(URL)
  } catch (error) {
    console.error(error)
  }
}

export default getCountry