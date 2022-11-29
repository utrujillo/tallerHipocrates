import { View, Text, ImageBackground } from 'react-native'
import styles from './styles'

const CardPokemon = (props) => {
  const { pokemon } = props
  const zeroPad = (num, places) => String(num).padStart(places, '0')
  const photoPokemon = pokemon?.sprites?.other['official-artwork']?.front_default
  const pokemonID = zeroPad(pokemon?.id, 3)

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: photoPokemon }} resizeMode="center" style={styles.image}></ImageBackground>
      <Text style={styles.name}>{ `${pokemonID} - ${pokemon?.name}` }</Text>
    </View>
  )
}

export default CardPokemon