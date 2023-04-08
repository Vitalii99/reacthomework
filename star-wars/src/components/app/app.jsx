import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Service from '../../services/service';
import Header from '../header';
import RandomPlanet from '../random-planet';
import { ErrorBoundary } from '../error-boundary/error-boundary';
import { ListMain } from '../list-main/list-main';

const App = () => {

  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <Router>
        <Header />
        <RandomPlanet />
        <Routes>
          <Route exact path="*" element={null}>
          </Route>
          <Route exact path="/people"
            element={<ListMain request={new Service().getPeoples()} />}>
          </Route>
          <Route exact path="/planets"
            element={<ListMain request={new Service().getPlanets()} />}>
          </Route>
          <Route exact path="/starships"
            element={<ListMain request={new Service().getStarships()} />}>
          </Route>
        </Routes>
      </Router >
    </ErrorBoundary >
  );
}

export default App;

/**npm install --legacy-peer-deps --save @mui/material @emotion/react @emotion/styled */
/**npm install --legacy-peer-deps --save react-router-dom */
/**npm install --legacy-peer-deps --save react-bootstrap bootstrap */

/**people("https://swapi.dev/api/people/") переносим у useEffect
   .then((data) => { setPerson(data) });

  useEffect(() => {
  people("https://swapi.dev/api/people/")
    .then((data) => { setDescription(data.results) });
}, []);*/
