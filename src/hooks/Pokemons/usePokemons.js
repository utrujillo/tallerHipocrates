import { useState, useEffect } from 'react'
import useAPI from '../API'

const usePokemons = () => {
  
  const { getRequest } = useAPI()
  const [ urlPokemons, setUrlPokemons ] = useState([])
  const [ pokemons, setPokemons ] = useState([])
  /**
   * Obteniendo las URL que contene la informacion de los pokemones
   */
  const loadURIPokemons = async () => {
    let response = await getRequest('https://pokeapi.co/api/v2/pokemon')
    setUrlPokemons( response.results.map( pokemon => pokemon.url ) )
  }

  useEffect( () => {
    loadURIPokemons()
  }, [] )

  /**
   * Creando la ejecucion de promesas multiples y procesando la data
   */
  const loadPokemons = async () => {
    let promises = []
    urlPokemons.forEach( url => promises.push( getRequest(url) ) )
    const resolvePromises = []
      .concat
      .apply([], await Promise.all( promises ))
    setPokemons( resolvePromises )
  }

  useEffect( () => {
    loadPokemons()
  }, [urlPokemons] )

  return { pokemons }
}

export default usePokemons