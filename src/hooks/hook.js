import { useState, useEffect } from "react";
import countryService from '../services/country'
export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}
export const useCountry = (name) => {
  const [country, setCountry] = useState(null)
  useEffect(() => {
    console.log('in country hook')
    countryService.getSpecific(name).then((response) => {
      console.log(response)
      response.found = true
      setCountry(response)
    }).catch((e)=>{
      console.error('Error fetching country',e)
      setCountry({found:false})
    })
  },[name])
  

  return country;
};
