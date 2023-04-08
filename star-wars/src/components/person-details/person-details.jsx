import React, { useContext, useState, useEffect } from 'react';

import Service from '../../services/service';
import CircularProgress from '@mui/material/CircularProgress';
import { PersonContext } from '../list-main/list-main';

import './person-details.css';

const PersonDetails = () => {

  const [information, setInformation] = useState(null);
  const { personInformation } = useContext(PersonContext);
  const [image, setImage] = useState(null);

  useEffect(() => {

    setInformation(personInformation);
    if (personInformation !== null) {
      const symbol = personInformation.url.match(/\d+/)
      // setImage(new Service().getPeoplesImg(symbol))
      const category = personInformation.url.split("/")
      // console.log(category)

      switch (category[4]) {
        case 'people':
          new Service()
            .getPeopleImg(symbol)
            .then((url) => setImage(url));
          break;
        case 'planets':
          new Service()
            .getPlanetsImg(symbol)
            .then((url) => setImage(url));
          break;
        case 'starships':
          new Service()
            .getStarshipsImg(symbol)
            .then((url) => setImage(url));
          break;
        default:
      }
      // new Service()
      //   .getPeoplesImg(symbol)
      //   .then((url) => setImage(url));
    }
    return () => {
      setImage(null);
    }
  }, [personInformation]);

  // useEffect(() => {
  //   setImage(image)
  // }, [image])

  // if (profileInformation !== null){
  //   const symbol = profileInformation.url.match(/\d+/)
  //   console.log(profileInformation.url)
  //   console.log(symbol)
  //   setImage(new Service().getPeoplesImg(symbol))
  // }
  // console.log(typeof image)

  if (information) {
    return (
      <div className="person-details card">
        {image === null ?
          <CircularProgress color="inherit" />
          :
          <img className="person-image"
            src={image} alt={information.name} />
        }
        <div className="card-body">
          <h4>{information.name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {information.gender ?
                <div>
                  {/* people */}
                  <span className="term">Gender:</span>
                  <span>{information.gender}</span>
                </div>
                : information.diameter ?
                  <div>
                    {/* planets */}
                    <span className="term">Diameter:</span>
                    <span>{information.diameter}</span>
                  </div>
                  :
                  <div>
                    {/* starships */}
                    <span className="term">Crew:</span>
                    <span>{information.crew}</span>
                  </div>
              }
            </li>
            <li className="list-group-item">
              {information.birth_year ?
                <div>
                  {/* people */}
                  <span className="term">Birth Year:</span>
                  <span>{information.birth_year}</span>
                </div>
                : information.orbital_period ?
                  <div>
                    {/* planets */}
                    <span className="term">Orbital Period:</span>
                    <span>{information.orbital_period}</span>
                  </div>
                  :
                  <div>
                    {/* starships */}
                    <span className="term">Length:</span>
                    <span>{information.length}</span>
                  </div>
              }
            </li>
            <li className="list-group-item">
              {information.eye_color ?
                <div>
                  {/* people */}
                  <span className="term">Eye Color:</span>
                  <span>{information.eye_color}</span>
                </div>
                : information.population ?
                  <div>
                    {/* planets */}
                    <span className="term">Population:</span>
                    <span>{information.population}</span>
                  </div>
                  :
                  <div>
                    {/* starships */}
                    <span className="term">Model:</span>
                    <span>{information.model}</span>
                  </div>
              }
            </li>
            <li className="list-group-item">
              {information.height ?
                <div>
                  {/* people */}
                  <span className="term">Height:</span>
                  <span>{information.height}</span>
                </div>
                : information.climate ?
                  <div>
                    {/* planets */}
                    <span className="term">Climate:</span>
                    <span>{information.climate}</span>
                  </div>
                  :
                  <div>
                    {/* starships */}
                    <span className="term">Passengers:</span>
                    <span>{information.passengers}</span>
                  </div>
              }
            </li>
          </ul>
        </div>
      </div>
    )
  }  
}

export default PersonDetails;