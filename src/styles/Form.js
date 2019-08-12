import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fafdcb',
    height: '100%',
    padding: 16
  },
  loginText: {
    color: '#248ea9',
    fontSize: 30,
    marginBottom: 16
  },
  logo: {
    color: '#248ea9',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 16
  },
  inputText: {
    height: 40,
    borderColor: '#aee7e8',
    borderBottomWidth: 2,
    borderRadius: 8,
    color: '#248ea9',
    marginVertical: 16,
    fontSize: 16,
    width: '100%'
  },
  buttonLogin: {
    backgroundColor: '#248ea9',
    marginTop: 8,
    borderRadius: 8
  },
  drumGedeLuar: {
    width: 60,
    height: 60,
    borderRadius: 100 / 2,
    backgroundColor: '#B65EFF',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
  },
  drumGedeDalem: {
    width: 30,
    height: 30,
    borderRadius: 100 / 2,
    backgroundColor: '#6F1EB3',
    position: 'absolute'
  },
  drumGede: {
    width: '100%',
    height: 20,
    top: '30%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    top: '10%'
  }
})

module.exports = styles
