import React, { Component } from 'react'
import { Text, View, StatusBar, Image, TouchableOpacity } from 'react-native'
import { FAB } from 'react-native-paper'
import Sound from "react-native-sound";
const styles = require('../styles/Home')

const sound1 = new Sound(require('../assets/bassDrum.wav'), null, (error) => {
  if (error){
    console.warn(error)
  }
  sound1.setVolume(1.0)
})

const sound2 = new Sound(require('../assets/Bassdrums19.wav'), null, (error) => {
  if (error){
    console.warn(error)
  }
  sound2.setVolume(1.0)
})

const sound3 = new Sound(require('../assets/Percussion4.wav'), null, (error) => {
  if (error){
    console.warn(error)
  }
  sound3.setVolume(1.0)
})

const sound4 = new Sound(require('../assets/HitHat9.wav'), null, (error) => {
  if (error){
    console.warn(error)
  }
  sound4.setVolume(1.0)
})

class Home extends Component {
  render () {
    return (
      <>
        <StatusBar backgroundColor='#fafdcb' barStyle='dark-content' />
        <View style={styles.background}>
          <FAB
            style={styles.fab}
            icon='menu'
            onPress={() => this.props.navigation.navigate('LeaderBoard')}
          />
          <View style={styles.poin}>
            <Text style={styles.teks}>Combo Hit </Text>
          </View>
          <View style={styles.poin}>
            <Text style={styles.skor}>0</Text>
          </View>
          <View style={{ top: '35%', paddingHorizontal: '10%' }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-around' }}
            >
              <DrumKecil suara={() => sound3.play()} />
              <DrumKecil suara={() => sound4.play()} />
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
            >
              <DrumGede suara={() => sound1.play()} />
              <DrumGede suara={() => sound2.play()} />
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
          <TouchableOpacity
            onPress={this.props.suara}
            rippleColor='rgba(0, 0, 0, .32)'
          >
            <View style={styles.drumGedeLuar}>
              <View style={styles.drumGedeDalem} />
            </View>
          </TouchableOpacity>
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
          <TouchableOpacity
            onPress={this.props.suara}
            rippleColor='rgba(0, 0, 0, .32)'
          >
            <View style={styles.drumKecilLuar}>
              <View style={styles.drumKecilDalem} />
            </View>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}
