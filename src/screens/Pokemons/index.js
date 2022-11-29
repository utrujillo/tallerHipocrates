import {View, Text, TextInput, TouchableOpacity, ImageBackground} from 'react-native'
import usePokemons from '../../hooks/Pokemons/usePokemons'
import styles from './styles'

const Pokemons = () => {
  const { pokemons } = usePokemons()
  console.log( pokemons )
  const imageFilter = require('../../../assets/pokemons/horizontal.png')

  return (
    <View style={styles.container}>
      <View style={styles.wrapper_search}>
        <TextInput style={styles.input} placeholder='Buscar Pokemon...' />
        <TouchableOpacity style={styles.iconFilter}>
          <ImageBackground source={imageFilter} style={styles.image}></ImageBackground>
        </TouchableOpacity>
      </View>
      <Text>Pokemones!!</Text>
    </View>
  )
}

export default Pokemons