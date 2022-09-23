import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../../../../components/Loading/Loading';
import { Pokemon } from '../../../../interface';
import PokemonList from '../../components/PokemonList';

const Pokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [next, setNext] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      const getPokemons = async () => {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
        setNext(res.data.next);
        const pokeList = res.data.results;
        pokeList.forEach(async (pokemon: Pokemon, index: number) => {
          console.log(index)
          const poke = await axios.get(pokemon.url);
          setPokemons((p) => [...p, poke.data]);
        })
      }
      getPokemons();
      setLoading(false);
    }, 500)
    
  }, []);
  console.log(pokemons)
  const handleLoadPoke =  () => {
    setLoading(true);
    setTimeout(async () => {
      const res = await axios.get(next);
    setNext(res.data.next);
    const pokeList = res.data.results;
      pokeList.forEach(async (pokemon: Pokemon, index: number) => {
        console.log(index)
        const poke = await axios.get(pokemon.url);
        setPokemons((p) => [...p, poke.data]);
        setLoading(false);
      })
    }, 500);
    
  }
  return (
    (<div className="App">
    <header className="pokemon-header">Pokémon</header>
    <div>
      <PokemonList pokemons={pokemons} />
      {loading && <Loading />}
    </div>
   {!loading &&  <button className="btn_loadmore" onClick={handleLoadPoke}>Load more</button>}
  </div>)
  )
}

export default Pokemons;
