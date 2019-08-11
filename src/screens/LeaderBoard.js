import React, { Component } from 'react'
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import { IconButton, Card, Button } from 'react-native-paper'
import Leaderboard from 'react-native-leaderboard'
const styles = require('../styles/LeaderBoard')

class LeaderBoard extends Component {
  state = {
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
      // ...
    ] // can also be an object of objects!: data: {a:{}, b:{}}
  }

  render () {
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
            <Card elevation={4} style={styles.profileCard}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.rank}>
                  <Text style={styles.subs}>RANK</Text>
                  <Text style={styles.poin}>1</Text>
                </View>
                <View style={styles.profile}>
                  <TouchableOpacity onPress={() => console.warn('terpencet')}>
                    <Image
                      style={styles.profileImage}
                      source={{
                        uri: 'https://randomuser.me/api/portraits/women/48.jpg'
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
                <Text style={styles.profileName}>Alexandra Chen</Text>
                <Text style={styles.profileEmail}>chen@mail.com</Text>
                <Button
                  mode='text'
                  color='#ff6961'
                  onPress={() => console.warn('terpencet')}
                >
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
          </View>
        </View>
      </>
    )
  }
}

export default LeaderBoard
