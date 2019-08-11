import React, { Component } from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import { IconButton, Card } from 'react-native-paper'

class LeaderBoard extends Component {
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
          <View style={{ marginHorizontal: 32 }}>
            <Card
              elevation={4}
              style={{
                padding: 16,
                borderRadius: 8,
                backgroundColor: '#aee7e8'
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Text style={{ color: '#248ea9' }}>testes</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Text style={{ color: '#248ea9' }}>testes</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Text style={{ color: '#248ea9' }}>testes</Text>
                </View>
              </View>
            </Card>
          </View>
        </View>
      </>
    )
  }
}

export default LeaderBoard

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fafdcb',
    height: '100%',
    padding: 16
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#fafdcb'
  },
  leadTitle: {
    flex: 6,
    justifyContent: 'center'
  },
  leadText: {
    color: '#248ea9',
    fontWeight: 'bold',
    fontSize: 17
  }
})
