import React, { Component } from 'react'
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import { IconButton, Card, Button } from 'react-native-paper'
import Leaderboard from 'react-native-leaderboard'
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { logout } from '../public/redux/action/user'
const styles = require('../styles/LeaderBoard')

class LeaderBoard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      token: '',
      email: '',
      id_user: '',
      data: [
        {
          userName: 'Liana Tom',
          highScore: 203,
          image: 'https://randomuser.me/api/portraits/women/72.jpg'
        },
        {
          userName: 'Alexandra Chen',
          highScore: 304,
          image: 'https://randomuser.me/api/portraits/women/48.jpg'
        }
      ]
    }

    AsyncStorage.getItem('jwtToken', (error, result) => {
      if (result) {
        this.setState({
          token: result
        })
      }
    })

    AsyncStorage.getItem('username', (error, result) => {
      if (result) {
        this.setState({
          username: result
        })
      }
    })

    AsyncStorage.getItem('email', (error, result) => {
      if (result) {
        this.setState({
          email: result
        })
      }
    })

    AsyncStorage.getItem('id_user', (error, result) => {
      if (result) {
        this.setState({
          id_user: result
        })
      }
    })
  }

  render () {
    const Logout = () => {
      let id_user = this.state.id_user
      let token = this.state.token
      logoutuser(id_user, token)
    }
    const logoutuser = async (id_user, token) => {
      // await this.props.dispatch(logout(id_user, token)).then(() => {
      AsyncStorage.clear().then(() => {
        this.props.navigation.navigate('Home')
      })
      // })
    }

    return (
      <>
        <StatusBar backgroundColor='#fafdcb' barStyle='dark-content' />
        <View style={styles.header}>
          <View style={{ flex: 1 }}>
            <IconButton
              icon='arrow-back'
              color='#28c3d4'
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
          <View style={styles.leadTitle}>
            <Text style={styles.leadText}>Leaderboards</Text>
          </View>
        </View>
        <View style={styles.background}>
          <View style={{ marginHorizontal: 16 }}>
            {this.state.id_user != '' ? (
              <>
                <Card elevation={4} style={styles.profileCard}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={styles.rank}>
                      <Text style={styles.subs}>RANK</Text>
                      <Text style={styles.poin}>1</Text>
                    </View>
                    <View style={styles.profile}>
                      <TouchableOpacity
                        onPress={() => console.warn('terpencet')}
                      >
                        <Image
                          progressiveRenderingEnabled
                          style={styles.profileImage}
                          source={{
                            uri:
                              'https://randomuser.me/api/portraits/women/48.jpg'
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.points}>
                      <Text style={styles.subs}>POINTS</Text>
                      <Text style={styles.poin}>304</Text>
                    </View>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={styles.profileName}>
                      {this.state.username}
                    </Text>
                    <Text style={styles.profileEmail}>{this.state.email}</Text>
                    <Button mode='text' color='#ff6961' onPress={Logout}>
                      LOGOUT
                    </Button>
                  </View>
                </Card>
                <Leaderboard
                  data={this.state.data}
                  sortBy='highScore'
                  labelBy='userName'
                  icon='image'
                  rankStyle={{ color: '#248ea9' }}
                  labelStyle={{ color: 'black' }}
                  scoreStyle={{ color: '#248ea9' }}
                  oddRowColor='#BDBF99'
                  evenRowColor='#E2E6B8'
                />
              </>
            ) : (
              <View
                style={{
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Button
                  mode='contained'
                  color='#248ea9'
                  onPress={() => this.props.navigation.navigate('Login')}
                >
                  Login to See
                </Button>
              </View>
            )}
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

export default connect(mapStateToProps)(LeaderBoard)
