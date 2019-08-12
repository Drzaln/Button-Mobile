import React, { Component } from 'react'
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { Button } from 'react-native-paper'
const styles = require('../styles/Form')

class Login extends Component {
  render () {
    return (
      <>
        <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0)" barStyle='dark-content' />
        <View style={styles.background}>
          <View style={{ top: 30, left: -20, position:'absolute' }}>
            <DrumGede />
          </View>
          <View style={{ top: 40, right: -20, position:'absolute' }}>
            <DrumKecil />
          </View>
          <View style={styles.body}>
            <View
              style={{
                paddingHorizontal: 16,
                alignItems: 'flex-end',
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
                style={styles.inputText}
                placeholder='Password'
                placeholderTextColor='grey'
                clearTextOnFocus
                secureTextEntry
              />
              <Button
                icon='chevron-right'
                mode='contained'
                onPress={() => this.props.navigation.navigate('Home')}
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
export default Login

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
