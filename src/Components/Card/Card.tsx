import { Pokemon } from "../../Interfaces/Interfaces";
import "./Style/index.scss";


const PokemonCard = (pokemon: Pokemon) => {
  return (
    <div className="pokeCard">
      <article>
        <figure>
          <img src={pokemon.image} />
        </figure>
        <div className="info">
          <p id='id'>#{pokemon.id}</p>
          <p id='name'>{pokemon.name}</p>
        </div>
        <div className="more">
          <div className="status"> 
              <p>Hp {pokemon.hp}</p>
              <p>Ataque {pokemon.attack}</p>
              <p>Defesa {pokemon.defense}</p>
              <p>Velocidade {pokemon.speed}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PokemonCard;
