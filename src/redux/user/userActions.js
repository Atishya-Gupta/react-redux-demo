import axios from 'axios'
import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESSS
} from './userTypes'

const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESSS,
    payload: users
  }
}

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error
  }
}

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )
      const users = response.data
      dispatch(fetchUsersSuccess(users))
    } catch (err) {
      const errorMsg = err.message
      dispatch(fetchUsersFailure(errorMsg))
    }
  }
}
