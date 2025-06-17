/*fare,
una fetch con un hook custom chiamato useGetPokemon che utilizzerà a sua volta l'hook useSWR */ 

import useSWR from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json());


export default function useGetPokemon(pokemonName) {
const {data, error, isLoading} = useSWR(
 pokemonName ? `https://pokeapi.co/api/v2/pokemon/${pokemonName}` : null,
    fetcher);

    return {data, error, isLoading}
}