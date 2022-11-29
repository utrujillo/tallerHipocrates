import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  wrapper_search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
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
  iconFilter: {
    alignItems: 'flex-right'
  },
  image: {
    width: 42,
    height: 42
  },
  wrapper_pokemons: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
})

export default styles