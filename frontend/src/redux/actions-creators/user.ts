import { Dispatch } from 'redux';
import axios from 'axios';
import { UserAction, UserActionTypes } from '../types/user';

export const fetchUsers = () => async (dispatch: Dispatch<UserAction>) => {
  try {
    dispatch({ type: UserActionTypes.FETCH_USERS });
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    setTimeout(() => {
      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data
      });
    }, 500);
  } catch (e) {
    dispatch({
      type: UserActionTypes.FETCH_USERS_ERROR,
      payload: 'An error occurred while loading list of users'
    });
  }
};
