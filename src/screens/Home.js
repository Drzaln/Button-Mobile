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
import { addScore } from '../public/redux/action/score'
import { getPatternActive } from '../public/redux/action/pattern'
import { connect } from 'react-redux'
import { getScoreId, updateScore } from '../public/redux/action/score'
const styles = require('../styles/Home')

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      combo: 0,
      score: 0,
      pattern: [],
      isNow: 0,
      button: 1,
      id_user: '',
      token: '',
      data: []
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

  componentDidMount = async () => {
    await this.props.dispatch(getPatternActive())
    this.setState({
      pattern: this.props.pattern.patternList[0].pattern.split('').map(Number),
      combo: this.props.pattern.patternList[0].combo
    })
    this.setState({
      button: this.state.pattern[0]
    })
    await this.props.dispatch(getScoreId(this.state.id_user))
    this.setState({
      data: this.props.score.scoreListId[0]
    })
  }

  add = () => {
    if (this.state.data === undefined) {
      if (this.state.token === '') {
        Alert.alert(
          'Not Login !!!',
          `You Cant Save The Score : ${this.state.score}`,
          [
            {
              text: 'Login',
              onPress: () => this.props.navigation.navigate('Login')
            },
            {
              text: 'Cancel ',
              onPress: () => this.props.navigation.navigate('Home')
            }
          ]
        )
        this.setState({
          score: 0,
          hasil: 0,
          isNow: 0,
          combo: 0,
          button: this.state.pattern[0]
        })
      } else {
        const data = {
          id_user: Number(this.state.id_user),
          score: this.state.score
        }
        this.props
          .dispatch(
            addScore(Number(this.state.id_user), this.state.token, data)
          )
          .then(() => {
            this.setState({
              score: 0,
              hasil: 0,
              isNow: 0,
              combo: 0,
              button: this.state.pattern[0]
            })
            this.props.navigation.navigate('Home')
          })
      }
    } else {
      if (this.state.data.score < this.state.score) {
        const data = {
          id_user: Number(this.state.id_user),
          score: this.state.score
        }
        this.props
          .dispatch(
            updateScore(Number(this.state.id_user), this.state.token, data)
          )
          .then(() => {
            this.setState({
              score: 0,
              hasil: 0,
              isNow: 0,
              combo: 0,
              button: this.state.pattern[0]
            })
            this.props.navigation.navigate('Home')
          })
      } else {
        this.setState({
          score: 0,
          hasil: 0,
          isNow: 0,
          combo: 0,
          button: this.state.pattern[0]
        })
        this.props.navigation.navigate('Home')
      }
    }
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
      {
        this.state.token == ''
          ? Alert.alert("Lose ! You're not logged in", `Your Score : ${this.state.score}`, [
            {
              text: 'Login',
              onPress: () => this.props.navigation.navigate('Login')
            }
          ])
          : Alert.alert('Lose !!!', `Your Score : ${this.state.score}`, [
            { text: 'Save Score', onPress: () => this.add() }
          ])
      }
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
      {
        this.state.token == ''
          ? Alert.alert("Lose ! You're not logged in", `Your Score : ${this.state.score}`, [
            {
              text: 'Login',
              onPress: () => this.props.navigation.navigate('Login')
            }
          ])
          : Alert.alert('Lose !!!', `Your Score : ${this.state.score}`, [
            { text: 'Save Score', onPress: () => this.add() }
          ])
      }
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
      {
        this.state.token == ''
          ? Alert.alert("Lose ! You're not logged in", `Your Score : ${this.state.score}`, [
            {
              text: 'Login',
              onPress: () => this.props.navigation.navigate('Login')
            }
          ])
          : Alert.alert('Lose !!!', `Your Score : ${this.state.score}`, [
            { text: 'Save Score', onPress: () => this.add() }
          ])
      }
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
      {
        this.state.token == ''
          ? Alert.alert("Lose ! You're not logged in", `Your Score : ${this.state.score}`, [
            {
              text: 'Login',
              onPress: () => this.props.navigation.navigate('Login')
            }
          ])
          : Alert.alert('Lose !!!', `Your Score : ${this.state.score}`, [
            { text: 'Save Score', onPress: () => this.add() }
          ])
      }
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
              {this.state.button == 3 ? (
                <DrumKecilPencet suara={this.sound3.bind(this)} />
              ) : (
                <DrumKecil suara={this.sound3.bind(this)} />
              )}
              {this.state.button == 4 ? (
                <DrumKecilPencet suara={this.sound4.bind(this)} />
              ) : (
                <DrumKecil suara={this.sound4.bind(this)} />
              )}
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
            >
              {this.state.button == 1 ? (
                <DrumGedePencet suara={this.sound1.bind(this)} />
              ) : (
                <DrumGede suara={this.sound1.bind(this)} />
              )}
              {this.state.button == 2 ? (
                <DrumGedePencet suara={this.sound2.bind(this)} />
              ) : (
                <DrumGede suara={this.sound2.bind(this)} />
              )}
            </View>
          </View>
          <Image source={require('../assets/musik.png')} style={styles.musik} />
        </View>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    score: state.score,
    pattern: state.pattern
  }
}

export default connect(mapStateToProps)(Home)

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
