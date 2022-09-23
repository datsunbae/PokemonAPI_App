import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../../components/NotFound'
import PokemonDetail from './page/PokemonDetail'
import Pokemons from './page/Pokemons'

const Pokemon = () => {
  return (
    <Routes>
        <Route path="/" element={<Pokemons/>}/>
        <Route path="/:pokeId" element={<PokemonDetail/>} />
        <Route path="*" element={<NotFound/>} />    
    </Routes>
  )
}

export default Pokemon