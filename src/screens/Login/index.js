import { View, TouchableOpacity, ImageBackground } from 'react-native'
import styles from './styles'

const bck = require('../../../assets/login/bg.png')

const Login = (props) => {
  const { navigation } = props
  const onClick = () => { navigation.navigate('Pokemons') }

  return (
    <View style={styles.container}>
      <ImageBackground source={bck} resizeMode="cover" style={styles.image}>
        <TouchableOpacity title='Login' onPress={onClick} style={styles.roundButton}/>
      </ImageBackground>
    </View>
  )
}

export default Login

