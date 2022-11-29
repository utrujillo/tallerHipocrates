import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderColor: '#0DFFDA',
    borderWidth: 1,
    borderRadius: 10,
    width: 150,
    height: 150,
    marginBottom: 10
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    padding: 10
  },
  name: {
    backgroundColor: '#30A7D7',
    color: '#FFFFFF',
    height: 30,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    textAlign: 'center',
    padding: 5,
    textTransform: 'capitalize'
  }
})

export default styles