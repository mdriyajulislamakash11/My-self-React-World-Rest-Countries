import React, { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [Countries, setCountries] = useState([]);
  const [visitedListCountries, setVisitedCounteris] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]); 

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);


  const handleVisitedCountries = (country) => {
    const newCountries = [...visitedListCountries, country];
    setVisitedCounteris(newCountries);
  };

  const handleFlags = (country) => {
    const newHandleFlags = [...visitedFlags, country]
    setVisitedFlags(newHandleFlags)
  }

  return (
    <div>
      <h2>Countries: {Countries.length}</h2>

      <div>
        {
            visitedFlags.map((flag) =><img src={flag}></img>)
        }
      </div>

      <div>
        <h3>List: {visitedListCountries.length}</h3>
        <ul>
          {visitedListCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 p-4 gap-3">
        {Countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleFlags={handleFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
