import axios from 'axios';
import React, {useEffect,useState} from 'react'
import { toUpperCaseFirstLetter } from '../../func/toUpperCaseFirstLetter';
import { Pokemon } from '../../interface';
import './PokemonCard.css'

interface Props {
  pokemon: Pokemon;
}


const PokemonCard:React.FC<Props> = (props) =>  {
  const [hover, setHover] = useState(false);
  const {pokemon} = props;
  const {id, name} = pokemon;
  const [color, setColor] = useState('');
  const img = pokemon.sprites.versions['generation-v']['black-white'].animated.front_default;
  const typeList = pokemon.types;
  useEffect(() => {
    const getPokeSpec = async () => {
      const pokeSpec = await axios.get(pokemon.species.url);
      setColor(pokeSpec.data.color.name);
    }
    getPokeSpec();
  }, [])
  return (
    <>
    <div className="poke_card" onMouseOver={() => {
      setHover(true)
    }} onMouseLeave={()=>{
      setHover(false);
    }}>
      <div className="poke_card__img" style={{...(hover ? {backgroundColor: `var(--bs-${color})`} : '')}}>
        <img src={img} alt="poke_img"/>
      </div>
      <span className="poke_card__id">#{id}</span>
        <h4 className="poke_card__name" >{toUpperCaseFirstLetter(name)}</h4>
        <div className="poke_card__skill">
        {typeList.map((type) => (
          <span className="poke_card__skill-item background-grass">
            {toUpperCaseFirstLetter(type.type.name)}
          </span>)
        )}
        </div>
    </div>
    </>
  )
}

export default PokemonCard