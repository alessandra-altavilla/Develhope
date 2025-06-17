/*Pagina homepage con al suo interno un form di ricerca e un tasto submit, al click del bottone vi deve mandare una pagina interna,
della vostra applicazione (es: localhost:8000/pikachu) con useNavigate 
const navigate = useNavigate();
navigate('/targetpath')
navigate('/path', { replace: true }); */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();
  const [data, setData] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(("Navigating to:", `/PokemonPage/${data.toLowerCase()}`));
    navigate(`/PokemonPage/${data.toLowerCase()}`);
  };

  const handleChange = (event) => {
    setData(event.target.value); // Updates the state with user input
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Gotta catch your Pokemon</h1>
        <input
          name="pokemonSearch"
          id="pokemon-input"
          type="text"
          placeholder="Type here..."
         
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
