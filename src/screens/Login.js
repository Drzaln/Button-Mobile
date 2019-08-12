import React, { Component } from 'react'
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { Button, TouchableRipple } from 'react-native-paper'

class Login extends Component {
  render () {
    return (
      <>
        <StatusBar backgroundColor='#fafdcb' barStyle='dark-content' />
        <View style={styles.background}>
          <Logo />
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
                onPress={() => console.warn('terpencet')}
                style={styles.buttonLogin}
              >
                login
              </Button>
            </View>
            <TouchableOpacity
              onPress={() => console.warn('terpencet')}
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

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fafdcb',
    height: '100%',
    padding: 16
  },
  loginText: {
    color: '#248ea9',
    fontSize: 30,
    marginBottom: 16
  },
  logo: {
    color: '#248ea9',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 16
  },
  inputText: {
    height: 40,
    borderColor: '#aee7e8',
    borderBottomWidth: 2,
    borderRadius: 8,
    color: '#248ea9',
    marginVertical: 16,
    fontSize: 16,
    width: '100%'
  },
  buttonLogin: {
    backgroundColor: '#248ea9',
    marginTop: 8,
    borderRadius: 8
  },
  drumGedeLuar: {
    width: 60,
    height: 60,
    borderRadius: 100 / 2,
    backgroundColor: '#B65EFF',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
  },
  drumGedeDalem: {
    width: 30,
    height: 30,
    borderRadius: 100 / 2,
    backgroundColor: '#6F1EB3',
    position: 'absolute'
  },
  drumGede: {
    width: '100%',
    height: 20,
    top: '30%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    top: '20%'
  }
})
