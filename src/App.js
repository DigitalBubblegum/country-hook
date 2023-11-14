import React, { useState } from 'react'
import { useField,useCountry } from './hooks/hook'
import Country from './components/Country'

const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const country = useCountry(name)
  // console.log(nameInput.value)
  console.log('name',name)
  console.log('country',country)
  const fetch = (e) => {
    e.preventDefault()
    // console.log('nameInput.value',nameInput.value)
    setName(nameInput.value)
    // console.log('fetch',name)
  }

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
      {/* {name} */}
      {/* {country} */}
    </div>
  );
}

export default App