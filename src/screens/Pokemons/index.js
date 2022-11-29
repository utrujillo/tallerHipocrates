import {View, Text, TextInput, TouchableOpacity, ImageBackground} from 'react-native'
import usePokemons from '../../hooks/Pokemons/usePokemons'
import CardPokemon from '../../components/CardPokemon'
import styles from './styles'

const Pokemons = () => {
  const { pokemons } = usePokemons()
  const imageFilter = require('../../../assets/pokemons/horizontal.png')

  return (
    <View style={styles.container}>
      <View style={styles.wrapper_search}>
        <TextInput style={styles.input} placeholder='Buscar Pokemon...' />
        <TouchableOpacity style={styles.iconFilter}>
          <ImageBackground source={imageFilter} style={styles.image}></ImageBackground>
        </TouchableOpacity>
      </View>

      <View style={styles.wrapper_pokemons}>
        { 
          pokemons?.map( pokemon => <CardPokemon key={pokemon?.id} pokemon={pokemon} /> )
        }
      </View>
      
    </View>
  )
}

export default Pokemons