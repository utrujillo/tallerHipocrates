import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 40
  },
  wrapper_search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 20
  },
  input: {
    borderColor: '#0DFFDA',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    paddingLeft: 10,
    paddingRight: 10,
    height: 60,
    placeholderTextColor: '#12B39A',
    flexGrow: 1,
    flexShrink: 0,
    marginRight: 20
  },
  image: {
    width: 42,
    height: 42
  },
  wrapper_pokemons: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  wrapper_close_session: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0000',
    color: '#FFF',
    height: 62,
    padding: 10,
  },
  pokeball: {
    width: 24,
    height: 24
  },
  text_close_session: {
    color: '#FFFFFF',
    textAlign: 'center'
  }
})

export default styles