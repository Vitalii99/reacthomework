import React, { useState, useEffect, useContext } from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import { PersonContext } from '../list-main/list-main';

import './item-list.css';

const ItemList = ({ request }) => {

  const [property, setProperty] = useState(null);
  
  useEffect(() => {
    // console.log(request())
    // request().then((data)=>{console.log(data)})
    request.then((data) => {
      setProperty(data.results);
    })
  }, [request]);

  const { onElementInfo } = useContext(PersonContext);

  return (
    
    <ul className="item-list list-group">
      {property === null ?
        <div><CircularProgress color="inherit" /></div> :
        property.map((item, i) => {
          return <li key={i * 5 + "q"} className="list-group-item"
            onClick={() => onElementInfo(item)}>
            {item.name}</li>
        })
      }
    </ul>
  );
}

export default ItemList;