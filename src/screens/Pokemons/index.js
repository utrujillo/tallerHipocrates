import {View, Text, ScrollView, TextInput, TouchableOpacity, ImageBackground} from 'react-native'
import usePokemons from '../../hooks/Pokemons/usePokemons'
import CardPokemon from '../../components/CardPokemon'
import styles from './styles'

const Pokemons = (props) => {
  const { navigation } = props
  const { pokemons } = usePokemons()
  const imageFilter = require('../../../assets/pokemons/horizontal.png')
  const pokeball = require('../../../assets/pokemons/pokeball.png')
  const closeSession = () => { navigation.navigate('Login') }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper_search}>
        <TextInput style={styles.input} placeholder='Buscar Pokemon...' />
        <TouchableOpacity>
          <ImageBackground source={imageFilter} style={styles.image}></ImageBackground>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.wrapper_pokemons}>
          { 
            pokemons?.map( pokemon => <CardPokemon key={pokemon?.id} pokemon={pokemon} /> )
          }
        </View>
      </ScrollView>
      
      <View style={styles.wrapper_close_session}>
        <TouchableOpacity onPress={closeSession}>
          <ImageBackground source={pokeball} style={styles.pokeball}></ImageBackground>
        </TouchableOpacity>
        <Text style={styles.text_close_session}>Cerrar sesion</Text>
      </View>
    </View>
  )
}

export default Pokemons