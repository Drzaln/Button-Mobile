import React, { Component } from 'react'
import { Text, View, StatusBar, Image } from 'react-native'
import { FAB, TouchableRipple } from 'react-native-paper'
import Sound from "react-native-sound";
const styles = require('../styles/Home')

const sound = new Sound(require('../assets/Gun.mp3'), null, (error) => {
  if (error){
    console.warn(error)
  }
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
              <DrumKecil suara={() => console.warn('terpencet')} />
              <DrumKecil suara={() => console.warn('terpencet')} />
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
            >
              <DrumGede suara={() => sound.play()} />
              <DrumGede suara={() => console.warn('terpencet')} />
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
            onPress={this.props.suara}
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
            onPress={this.props.suara}
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
