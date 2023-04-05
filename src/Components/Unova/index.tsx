import { getPokemonsUnova } from "../../Api/PokeApi";
import { Data } from '../../Interfaces/Interfaces';
import PokemonCard from "../Card/Card";

const Unova = () => {
  return (
    <div className="cards">
      {getPokemonsUnova().map((pokemon: Data, key) => {
        return (
          <article key={key}>
            <PokemonCard
              id={pokemon.data.id}
              name={pokemon.data.name}
              image={pokemon.data.sprites.front_default}
              attack={pokemon.data.stats[1]?.base_stat}
              hp={pokemon.data.stats[0]?.base_stat}
              defense={pokemon.data.stats[2]?.base_stat}
              speed={pokemon.data.stats[5]?.base_stat}
            />
          </article>
        );
      })}
    </div>
  );
};

export default Unova