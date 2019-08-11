import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fafdcb',
    height: '100%'
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#28c3d4'
  },
  poin: {
    width: '100%',
    height: 20,
    top: '10%',
    alignItems: 'center'
  },
  teks: {
    color: '#248ea9',
    fontSize: 17,
    fontFamily: 'open-sans',
    fontWeight: 'bold'
  },
  skor: {
    color: '#248ea9',
    fontWeight: 'bold',
    fontSize: 100
  },
  drumGedeLuar: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: '#B65EFF',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
  },
  drumGedeDalem: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    backgroundColor: '#6F1EB3',
    position: 'absolute'
  },
  drumGede: {
    width: '100%',
    height: 20,
    top: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  drumKecilLuar: {
    width: 70,
    height: 70,
    borderRadius: 100 / 2,
    backgroundColor: '#F4FF5E',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
  },
  drumKecilDalem: {
    width: 35,
    height: 35,
    borderRadius: 100 / 2,
    backgroundColor: '#AAB330',
    position: 'absolute'
  },
  drumKecil: {
    width: '100%',
    height: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  musik: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    width: 140,
    height: 140
  }
})

module.exports = styles
