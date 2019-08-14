import React, { Component } from 'react'
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  AsyncStorage,
  Alert
} from 'react-native'
import { FAB } from 'react-native-paper'
import Sound from 'react-native-sound'
const styles = require('../styles/Home')

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      combo: 0,
      score: 0,
      pattern: [
        1,
        2,
        3,
        1,
        3,
        1,
        1,
        2,
        4,
        2,
        3,
        4,
        4,
        1,
        2,
        3,
        4,
        4,
        4,
        4,
        4,
        1,
        2
      ],
      isNow: 0,
      button: 1,
      id_user: '',
      token: ''
    }
    AsyncStorage.getItem('id_user', (error, result) => {
      if (result) {
        this.setState({
          id_user: result
        })
      }
    })
    AsyncStorage.getItem('token', (error, result) => {
      if (result) {
        this.setState({
          token: result
        })
      }
    })
  }

  sound1 = async () => {
    const requireAudio = require('../assets/bassDrum.wav')
    const s = new Sound(requireAudio, e => {
      if (e) {
        console.log('Error in SOUND', e)
        return
      }
      s.play(() => s.release(), s.setVolume(1.0))
    })
    if (this.state.pattern[this.state.isNow] === 1) {
      if (this.state.pattern.length === this.state.isNow + 1) {
        await this.setState({
          combo: this.state.combo + 1,
          isNow: 0
        })
        next.play(() => next.release())
      }
      await this.setState({
        score: this.state.score + 10,
        isNow: this.state.isNow + 1
      })
    } else {
      Alert.alert('Lose !!!', `Your Score : ${this.state.score}`, [
        { text: 'Save Score', onPress: () => console.log('terpencet') }
      ])
    }
    await this.setState({
      button: this.state.pattern[this.state.isNow]
    })
  }

  sound2 = async () => {
    const requireAudio = require('../assets/Bassdrums19.wav')
    const s = new Sound(requireAudio, e => {
      if (e) {
        console.log('Error in SOUND', e)
        return
      }
      s.play(() => s.release(), s.setVolume(1.0))
    })
    if (this.state.pattern[this.state.isNow] === 2) {
      if (this.state.pattern.length === this.state.isNow + 1) {
        await this.setState({
          combo: this.state.combo + 1,
          isNow: 0
        })
        next.play(() => next.release())
      }
      await this.setState({
        score: this.state.score + 10,
        isNow: this.state.isNow + 1
      })
    } else {
      Alert.alert('Lose !!!', `Your Score : ${this.state.score}`, [
        { text: 'Save Score', onPress: () => console.log('terpencet') }
      ])
    }
    await this.setState({
      button: this.state.pattern[this.state.isNow]
    })
  }

  sound3 = async () => {
    const requireAudio = require('../assets/Percussion4.wav')
    const s = new Sound(requireAudio, e => {
      if (e) {
        console.log('Error in SOUND', e)
        return
      }
      s.play(() => s.release(), s.setVolume(1.0))
    })
    if (this.state.pattern[this.state.isNow] === 3) {
      if (this.state.pattern.length === this.state.isNow + 1) {
        await this.setState({
          combo: this.state.combo + 1,
          isNow: 0
        })
        next.play(() => next.release())
      }
      await this.setState({
        score: this.state.score + 10,
        isNow: this.state.isNow + 1
      })
    } else {
      Alert.alert('Lose !!!', `Your Score : ${this.state.score}`, [
        { text: 'Save Score', onPress: () => console.log('terpencet') }
      ])
    }
    await this.setState({
      button: this.state.pattern[this.state.isNow]
    })
  }

  sound4 = async () => {
    const requireAudio = require('../assets/HitHat9.wav')
    const s = new Sound(requireAudio, e => {
      if (e) {
        console.log('Error in SOUND', e)
        return
      }
      s.play(() => s.release(), s.setVolume(1.0))
    })
    if (this.state.pattern[this.state.isNow] === 4) {
      if (this.state.pattern.length === this.state.isNow + 1) {
        await this.setState({
          combo: this.state.combo + 1,
          isNow: 0
        })
        next.play(() => next.release())
      }
      await this.setState({
        score: this.state.score + 10,
        isNow: this.state.isNow + 1
      })
    } else {
      Alert.alert('Lose !!!', `Your Score : ${this.state.score}`, [
        { text: 'Save Score', onPress: () => console.log('terpencet') }
      ])
    }
    await this.setState({
      button: this.state.pattern[this.state.isNow]
    })
  }

  render () {
    return (
      <>
        <StatusBar backgroundColor='#fafdcb' barStyle='dark-content' />
        <View style={styles.background}>
          <FAB
            style={styles.fab}
            icon='menu'
            onPress={() => this.props.navigation.push('LeaderBoard')}
          />
          <View style={styles.poin}>
            <Text style={styles.teks}>Score Hit </Text>
          </View>
          <View style={styles.poin}>
            <Text style={styles.skor}>{this.state.score}</Text>
          </View>
          <View style={{ top: '35%', paddingHorizontal: '10%' }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-around' }}
            >
            {this.state.button == 3 ? <DrumKecilPencet suara={this.sound3.bind(this)} /> : <DrumKecil suara={this.sound3.bind(this)} /> }
            {this.state.button == 4 ? <DrumKecilPencet suara={this.sound4.bind(this)} /> : <DrumKecil suara={this.sound4.bind(this)} /> }
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
            >
            {this.state.button == 1 ? <DrumGedePencet suara={this.sound1.bind(this)} /> : <DrumGede suara={this.sound1.bind(this)} /> }
            {this.state.button == 2 ? <DrumGedePencet suara={this.sound2.bind(this)} /> : <DrumGede suara={this.sound2.bind(this)} /> }
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

class DrumGedePencet extends Component {
  render () {
    return (
      <>
        <View style={styles.drumGede}>
          <TouchableOpacity
            onPress={this.props.suara}
            rippleColor='rgba(0, 0, 0, .32)'
          >
            <View style={styles.drumGedePencetLuar}>
              <View style={styles.drumGedePencetDalem} />
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

class DrumKecilPencet extends Component {
  render () {
    return (
      <>
        <View style={styles.drumKecil}>
          <TouchableOpacity
            onPress={this.props.suara}
            rippleColor='rgba(0, 0, 0, .32)'
          >
            <View style={styles.drumKecilPencetLuar}>
              <View style={styles.drumKecilPencetDalem} />
            </View>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}
