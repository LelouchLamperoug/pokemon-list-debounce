import * as React from 'react';
import './style.css';
import { useState, useEffect, useMemo } from 'react';
import useDebounce from './debounce/useDebounce';

/**  1.- Get the pokemon information
 * https://pokeapi.co/api/v2/pokemon
 */

/* 2.- Visualize them in a grid (prefered with styles). */

/* 3.- Make an input where you filter by name */

/**
 * 4.- When click the Name of pokemon you should return his information
 * And show his image in data.sprites.front_default
 */

/* 5.- Implement a debounce in the input search */

export default function App() {
  const [data, setData] = React.useState([]);
  const [filter, setFilter] = React.useState('');
  const getData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon').then(async (resp: any) => {
      let response = await resp.json();
      setData(response.results);
    });
  };

  //const debValue = useDeb(filter, 1000);
 // React.useEffect(() => {
    //console.log('Extra rerenders from useEffect');
  //}, [debValue]);
  const handleChange = (e: any) => {
    debounce(e.target.value);
  };

  const [debounce] = useDebounce((value) => {
    setFilter(value);
  }, 1000);

  const filteredArray = data.filter((pokemon) => {
    return pokemon.name.includes(filter);
  });

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <input type="text" onChange={handleChange}></input>
      <h1>Pokedex</h1>
      {filteredArray.map((pokemon) => {
        return (
          <div>
            <h3>{pokemon.name}</h3>
          </div>
        );
      })}
    </div>
  );
}
