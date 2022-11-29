import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  wrapper_search: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
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
    flexShrink: 0
  },
  iconFilter: {
    alignItems: 'flex-right'
  },
  image: {
    width: 42,
    height: 42
  }
})

export default styles