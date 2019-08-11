import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, Image } from 'react-native'
import { FAB, TouchableRipple } from 'react-native-paper'

class Home extends Component {
  render () {
    return (
      <>
        <StatusBar backgroundColor='#fafdcb' barStyle='dark-content' />
        <View style={styles.background}>
        <FAB style={styles.fab} icon='menu' onPress={() => this.props.navigation.navigate('LeaderBoard')} />
          <View style={styles.poin}>
            <Text style={styles.teks}>Combo Hit </Text>
          </View>
          <View style={styles.poin}>
            <Text style={styles.skor}>0</Text>
          </View>
          <View style={{ top: '35%' }}>
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
      <>
        <View style={styles.drumGede}>
          <TouchableRipple
            onPress={() => console.warn('terpencet')}
            rippleColor='rgba(0, 0, 0, .32)'
          >
            <View style={styles.drumGedeLuar}>
              <View style={styles.drumGedeDalem} />
            </View>
          </TouchableRipple>
        </View>
      </>
    )
  }
}

class DrumKecil extends Component {
  render () {
    return (
      <>
        <View style={styles.drumKecil}>
          <TouchableRipple
            onPress={() => console.warn('terpencet')}
            rippleColor='rgba(0, 0, 0, .32)'
          >
            <View style={styles.drumKecilLuar}>
              <View style={styles.drumKecilDalem} />
            </View>
          </TouchableRipple>
        </View>
      </>
    )
  }
}

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
