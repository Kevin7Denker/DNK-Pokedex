import axios from "axios";
import { useState } from "react";

// Busca o pokemon usando como parametro o nome ou id
export const fetchPokemon = async (pokemon: any) => {
  const Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await Response.json();

  return data;
};

// Lista os pokemons de Kanto
export const getPokemonsKanto = () => {
  const [pokemonsKanto, setPokemonsKanto] = useState([]);
  let endpoints = [];

  for (let i = 1; i < 152; i++) {
    endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
  }

  axios
    .all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then((res: any) => setPokemonsKanto(res));

  return pokemonsKanto;
};

// Lista os pokemons de Johto
export const getPokemonsJohto = () => {
  const [pokemonsJohto, setPokemonsJohto] = useState([]);
  let endpoints = [];

  for (let i = 152; i < 252; i++) {
    endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
  }

  axios
    .all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then((res: any) => setPokemonsJohto(res));

  return pokemonsJohto;
};

// Lista os pokemons de Hoenn
export const getPokemonsHoenn = () => {
  const [pokemonsHoenn, setPokemonsHoenn] = useState([]);
  let endpoints = [];

  for (let i = 252; i < 387; i++) {
    endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
  }

  axios
    .all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then((res: any) => setPokemonsHoenn(res));

  return pokemonsHoenn;
};

// Lista os pokemons de Sinnoh
export const getPokemonsSinnoh = () => {
  const [pokemonsSinnoh, setPokemonsSinnoh] = useState([]);
  let endpoints = [];

  for (let i = 387; i < 494; i++) {
    endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
  }

  axios
    .all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then((res: any) => setPokemonsSinnoh(res));

  return pokemonsSinnoh;
};

// Lista os pokemons de Unova
export const getPokemonsUnova = () => {
  const [pokemonsUnova, setPokemonsUnova] = useState([]);
  let endpoints = [];

  for (let i = 494; i < 650; i++) {
    endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
  }

  axios
    .all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then((res: any) => setPokemonsUnova(res));

  return pokemonsUnova;
};

// Lista os pokemons de Kalos
export const getPokemonsKalos = () => {
  const [pokemonsKalos, setPokemonsKalos] = useState([]);
  let endpoints = [];

  for (let i = 650; i < 722; i++) {
    endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
  }

  axios
    .all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then((res: any) => setPokemonsKalos(res));

  return pokemonsKalos;
};
