const Country = ({ country }) => {
  console.log('in country component',country)
  if (!country) {
    return (
      <div>
        Enter a country name
      </div>
    )
  }

  if (country.found === true) {
    return (
      <div>
       <h1>{country.name.common} </h1>
        <img
          src={country.flags.svg}
          height="100"
          alt={`flag of ${country.name.common}`}
        />
        <div>capital {country.capital} </div>
        <div>population {country.population}</div>
      </div>
    )
  }
  else{
    return (<div>not found...</div>)
  }
}

export default Country