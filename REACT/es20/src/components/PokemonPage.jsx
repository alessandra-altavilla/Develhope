/*All'interno della pagina specifica del pokemon bisogna ricavarsi il nome del pokemon attraverso i params */

import { useNavigate, useParams } from "react-router-dom";
import useGetPokemon from "../hooks/useGetPokemon";

export default function PokemonPage() {
  const { pokemonName } = useParams();
  const { data, error, isLoading } = useGetPokemon(pokemonName);
  const navigate = useNavigate();

  if (error) {
    return <p>Error loading data!</p>;
  }
  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <h2>{data.name.toUpperCase()}</h2>
      <img src={data.sprites.front_default} alt={data.name} />
      <p>Type: {data.types.map((t) => t.type.name).join(", ")}</p>
      <button onClick={() => navigate("/")}>Homepage</button>
    </div>
  );
}
