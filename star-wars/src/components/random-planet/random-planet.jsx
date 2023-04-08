import React, { useState, useEffect } from 'react';

import Service from '../../services/service';
import CircularProgress from '@mui/material/CircularProgress';

import './random-planet.css';

const RandomPlanet = () => {

  const [planets, setPlanets] = useState(null);
  let random = Math.floor((Math.random() * 9) + 1);

  useEffect(() => {
    new Service().getPlanets().then((data) => {
      setTimeout(() => {
        setPlanets(data.results)
      }, 7000)
    })
  }, [planets]);
  // console.dir(planets)

  return planets === null ? <CircularProgress color="inherit" /> :
    (<div className="random-planet jumbotron rounded">
      <img className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${random + 1}.jpg`} alt="description of planet" />
      <div>
        <h4>{planets[random].name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{planets[random].population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{planets[random].rotation_period}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{planets[random].diameter}</span>
          </li>
        </ul>
      </div>
    </div>
    )
}

export default RandomPlanet;


/**
if (planets === null) {
 return (<CircularProgress color="inherit" />)
} else {
  return (
    <div className="random-planet jumbotron rounded">
      <img className="planet-image"
        src="https://starwars-visualguide.com/assets/img/planets/5.jpg" alt="description of planet" />
      <div>
        <h4>{planets[random].name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>123124</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>43</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>100</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
*/