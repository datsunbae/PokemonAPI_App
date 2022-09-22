import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
import { Pokemon } from './interface';

const App:React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  useEffect(() => {
    const getPokemons = async () => {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");
      const pokeList = res.data.results;
      pokeList.forEach(async (pokemon: Pokemon, index: number) => {
        console.log(index)
        const poke = await axios.get(pokemon.url);
        setPokemons((p) => [...p, poke.data]);
      })
    }
    getPokemons();
  }, []);
  console.log(pokemons)
  return (
    <div className="App">
      <header className="pokemon-header">Pokémon</header>
      <div>
        <PokemonList pokemons={pokemons} />
      </div>
    </div>
  );
}

export default App;
