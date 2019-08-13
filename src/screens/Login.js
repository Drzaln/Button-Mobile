import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { Button } from 'react-native-paper'
import { login } from "../public/redux/action/user";
const styles = require('../styles/Form')

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: [],
      username: '',
      password: ''
    }
  }

  render () {
    const loginAction = () => {
      this.state.user.push({
        username: this.state.username,
        password: this.state.password
      })
      loginuser()
    }
    let loginuser = async () => {
      await this.props.dispatch(login(this.state.user[0])).then(() => {
        this.props.navigation.navigate('Home')
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
                <Text style={styles.loginText}>Login</Text>
              </View>
              <TextInput
                style={styles.inputText}
                blurOnSubmit={false}
                onSubmitEditing={() => {
                  this.secondTextInput.focus()
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
                icon='chevron-right'
                mode='contained'
                onPress={loginAction}
                style={styles.buttonLogin}
              >
                login
              </Button>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Register')}
              style={{ alignItems: 'flex-end', marginTop: 16 }}
            >
              <Text style={{ color: 'grey' }}>
                Don't have account? Sign up here
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

export default connect(mapStateToProps)(Login)

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
        <View style={{ flex: 2, backgroundColor: 'green' }}>
          <Text style={styles.logo}>BUTT</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',
            marginRight: 5,
            backgroundColor: 'yellow'
          }}
        >
          <DrumGede />
        </View>
        <View style={{ flex: 3, backgroundColor: 'red' }}>
          <Text style={styles.logo}>N</Text>
        </View>
      </View>
    )
  }
}
