import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, Image } from 'react-native'
import { FAB } from 'react-native-paper'

class Home extends Component {
  render () {
    return (
      <>
        <StatusBar backgroundColor='#fafdcb' barStyle='dark-content' />
        <FAB style={styles.fab} small icon='menu' onPress={() => {}} />
        <View style={styles.home}>
          <View style={styles.poin}>
            <Text style={styles.teks}>Your Score </Text>
          </View>
          <View style={styles.poin}>
            <Text style={styles.skor}>0</Text>
          </View>
          <View style={{ top: '40%' }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-around' }}
            >
              <DrumKecil />
              <DrumKecil />
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
            >
              <DrumGede />
              <DrumGede />
            </View>
          </View>
          <Image source={require('../assets/musik.png')} style={styles.musik} />
        </View>
      </>
    )
  }
}
export default Home

class DrumGede extends Component {
  render () {
    return (
      <View style={styles.drumGede}>
        <View style={styles.drumGedeLuar} />
        <View style={styles.drumGedeDalem} />
      </View>
    )
  }
}

class DrumKecil extends Component {
  render () {
    return (
      <View style={styles.drumKecil}>
        <View style={styles.drumKecilLuar} />
        <View style={styles.drumKecilDalem} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  home: {
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
    backgroundColor: '#B65EFF'
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
    backgroundColor: '#F4FF5E'
  },
  drumKecilDalem: {
    width: 30,
    height: 30,
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
    width: 160,
    height: 160
  }
})
