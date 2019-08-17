import axios from 'axios'
import { AsyncStorage } from 'react-native'
import url from '../../../misc/url'

export const addUser = data => {
  return {
    type: 'REGISTER',
    payload: axios.post(url + `user/register`, data, {
      headers: {
        authorization: 'x-app'
      }
    })
  }
}
export const login = data => {
  return {
    type: 'LOGIN',
    payload: axios
      .post(url + `user/login`, data, {
        headers: {
          authorization: 'x-app'
        }
      })
      .then(res => {
        const token = res.data.result.token
        const id_user = res.data.result.id_user.toString()
        const username = res.data.result.username
        const email = res.data.result.email
        const status = res.data.result.status
        console.log(username, token)
        AsyncStorage.setItem('id_user', id_user)
        AsyncStorage.setItem('token', token)
        AsyncStorage.setItem('username', username)
        AsyncStorage.setItem('email', email)
        AsyncStorage.setItem('status', status)
      })
  }
}

export const logout = (data, jwt) => {
  return {
    type : 'LOGOUT',
    payload: axios.post(
      url + `user/logout`,
      { id_user: data },
      {
        headers: {
          authorization: 'x-app',
          'x-access-token': `bearer: ${jwt}`,
          'x-control-user': data
        }
      }
    )
  }
}
