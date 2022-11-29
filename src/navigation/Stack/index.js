import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../../screens/Login'
import Pokemons from '../../screens/Pokemons'

const Stack = createNativeStackNavigator()

const CustomStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Pokemons' component={Pokemons} />
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  )
}

export default CustomStack