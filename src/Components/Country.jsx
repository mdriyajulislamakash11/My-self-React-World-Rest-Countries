import React, { useState } from "react";

const Country = ({ country, handleVisitedCountries, handleFlags }) => {
  const { name, flags, area, population } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div
      className={`'border p-4 border-purple-400 ${
        visited ? "bg-slate-400" : ""
      }`}
    >
      <h2>{name.common}</h2>
      <img src={flags.png} alt="" />
      <p>Area: {area}</p>
      <p>Populations: {population}</p>
      <hr />
      <button className="btn" onClick={() => handleFlags(country.flags.png)}>
        Add flags
      </button>
      <hr />
      <button className="btn" onClick={() => handleVisitedCountries(country)}>
        Add mark
      </button>
      <hr />
      <button className="btn btn-error" onClick={handleVisited}>
        {visited ? "visite" : "Going"}
      </button>
      {visited ? " im visite here" : " i want visite now"}

      {/* props dealink sikheyeche */}
      
    </div>
  );
};

export default Country;
