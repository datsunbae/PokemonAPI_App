import React from 'react'
import { Pokemon } from '../../interface';
import PokemonCard from '../PokemonCard';

interface Props {
  pokemons: Pokemon[]
}

const PokemonList:React.FC<Props> = (props) => {
  const {pokemons} = props;
  return (
    <div className="collection-container">
      {pokemons.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default PokemonList