import axios from 'axios'
import url from '../../../misc/url'

export const addScore = (id_user, token, data) => {
  return {
    type: 'POST_SCORE',
    payload: axios.post(url + `score`, data, {
      headers: {
        authorization: 'x-app',
        'x-access-token': `bearer: ${token}`,
        'x-control-user': id_user
      }
    })
  }
}
export const updateScore = (id_user, token, data) => {
  return {
    type: 'UPDATE_SCORE',
    payload: axios.patch(url + `score`, data, {
      headers: {
        authorization: 'x-app',
        'x-access-token': `bearer: ${token}`,
        'x-control-user': id_user
      }
    })
  }
}
export const getScore = () => {
  return {
    type: 'GET_SCORE',
    payload: axios.get(url + `score`, {
      headers: {
        authorization: 'x-app'
      }
    })
  }
}
export const getScoreId = id_user => {
  return {
    type: 'GET_SCORE_ID',
    payload: axios.get(url + `score/${Number(id_user)}`, {
      headers: {
        authorization: 'x-app'
      }
    })
  }
}
