import React, { Component } from 'react'
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import { IconButton, Card, Button } from 'react-native-paper'
import Leaderboard from 'react-native-leaderboard'
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { getScore, getScoreId } from '../public/redux/action/score'
const styles = require('../styles/LeaderBoard')

class LeaderBoard extends Component {
  state = {
    username: '',
    token: '',
    email: '',
    id_user: '',
    data: [],
    point: []
  }

  constructor (props) {
    super(props)

    AsyncStorage.getItem('token', (error, result) => {
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

  componentDidMount = async () => {
    await this.props.dispatch(getScore())
    this.setState({
      data: this.props.score.scoreList
    })
    await this.props.dispatch(getScoreId(this.state.id_user))
    this.setState({
      point: this.props.score.scoreListId
    })
  }

  render () {
    const Logout = () => {
      let id_user = this.state.id_user
      let token = this.state.token
      logoutuser(id_user, token)
    }
    const logoutuser = async (id_user, token) => {
      AsyncStorage.clear().then(() => {
        this.props.navigation.navigate('Home')
      })
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
                <View>
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
                        <Text style={styles.poin}>
                          {this.state.point == undefined ? 0 : this.state.point.score}
                        </Text>
                      </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                      <Text style={styles.profileName}>
                        {this.state.username}
                      </Text>
                      <Text style={styles.profileEmail}>
                        {this.state.email}
                      </Text>
                      <Button mode='text' color='#ff6961' onPress={Logout}>
                        LOGOUT
                      </Button>
                    </View>
                  </Card>
                </View>
                <View>
                  <Leaderboard
                    data={this.state.data}
                    sortBy='score'
                    labelBy='username'
                    rankStyle={{ color: '#248ea9' }}
                    labelStyle={{ color: 'black' }}
                    scoreStyle={{ color: '#248ea9' }}
                    oddRowColor='#BDBF99'
                    evenRowColor='#E2E6B8'
                  />
                </View>
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
    user: state.user,
    score: state.score
  }
}

export default connect(mapStateToProps)(LeaderBoard)
