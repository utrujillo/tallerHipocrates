import {View, Text} from 'react-native'
import usePokemons from '../../hooks/Pokemons/usePokemons'
import styles from './styles'

const Pokemons = () => {
  const { pokemons } = usePokemons()

  return (
    <View>
      <Text>Pokemones!!</Text>
    </View>
  )
}

export default Pokemons