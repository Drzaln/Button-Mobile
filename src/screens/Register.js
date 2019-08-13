import React, { Component } from 'react'
import {
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { Button } from 'react-native-paper'
import { connect } from 'react-redux'
import { addUser } from '../public/redux/action/user'
const styles = require('../styles/Form')

class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: []
    }
  }
  render () {
    const add = () => {
      this.state.user.push({
        email: this.state.email,
        password: this.state.password,
        username: this.state.username
      })
      adduser()
    }
    let adduser = async () => {
      console.log(`testes`,this.state.user)
      await this.props.dispatch(addUser(this.state.user[0])).then(() => {
        this.props.navigation.navigate('Login')
        console.log('berhasil')
      })
    }

    return (
      <>
        <StatusBar
          translucent
          backgroundColor='rgba(0, 0, 0, 0)'
          barStyle='dark-content'
        />
        <View style={styles.background}>
          <View style={{ top: 30, left: -20, position: 'absolute' }}>
            <DrumGede />
          </View>
          <View style={{ top: 40, right: -20, position: 'absolute' }}>
            <DrumKecil />
          </View>
          <View style={styles.body}>
            <View
              style={{
                paddingHorizontal: 16,
                alignItems: 'flex-end'
              }}
            >
              <View style={{ alignItems: 'flex-start', width: '100%' }}>
                <Text style={styles.loginText}>Register</Text>
              </View>
              <TextInput
                style={styles.inputText}
                blurOnSubmit={false}
                onSubmitEditing={() => {
                  this.firstTextInput.focus()
                }}
                onChangeText={(username) => this.setState({ username })}
                returnKeyType={'next'}
                placeholder='Username'
                placeholderTextColor='grey'
                clearTextOnFocus
                autoFocus
              />
              <TextInput
                ref={input => {
                  this.firstTextInput = input
                }}
                style={styles.inputText}
                blurOnSubmit={false}
                onSubmitEditing={() => {
                  this.secondTextInput.focus()
                }}
                onChangeText={(email) => this.setState({ email })}
                returnKeyType={'next'}
                placeholder='Email'
                placeholderTextColor='grey'
                clearTextOnFocus
              />
              <TextInput
                ref={input => {
                  this.secondTextInput = input
                }}
                onChangeText={(password) => this.setState({ password })}
                style={styles.inputText}
                placeholder='Password'
                placeholderTextColor='grey'
                clearTextOnFocus
                secureTextEntry
              />
              <Button
                icon='add'
                mode='contained'
                onPress={add}
                style={styles.buttonLogin}
              >
                register
              </Button>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}
              style={{ alignItems: 'flex-end', marginTop: 16 }}
            >
              <Text style={{ color: 'grey' }}>
                Already have account? Please login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Register)

class DrumGede extends Component {
  render () {
    return (
      <>
        <View style={styles.drumGede}>
          <View style={styles.drumGedeLuar}>
            <View style={styles.drumGedeDalem} />
          </View>
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
          <View style={styles.drumKecilLuar}>
            <View style={styles.drumKecilDalem} />
          </View>
        </View>
      </>
    )
  }
}

class Logo extends Component {
  render () {
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 2 }}>
          <Text style={styles.logo}>BUTT</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-start', marginRight: 5 }}>
          <DrumGede />
        </View>
        <View style={{ flex: 3 }}>
          <Text style={styles.logo}>N</Text>
        </View>
      </View>
    )
  }
}
