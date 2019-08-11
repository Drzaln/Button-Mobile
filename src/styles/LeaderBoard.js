import { StyleSheet } from 'react-native'

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
  },
  rank: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 16
  },
  subs: {
    color: '#248ea9',
    fontWeight: 'bold'
  },
  poin: {
    color: '#248ea9',
    fontSize: 20,
    fontWeight: 'bold'
  },
  points: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16
  },
  profile: {
    flex: 1,
    alignItems: 'center'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8
  },
  profileName: {
    color: '#248ea9',
    fontWeight: 'bold',
    fontSize: 17
  },
  profileEmail: {
    color: '#248ea9',
    fontSize: 15
  },
  profileCard: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#aee7e8',
    marginBottom: 32
  }
})

module.exports = styles
