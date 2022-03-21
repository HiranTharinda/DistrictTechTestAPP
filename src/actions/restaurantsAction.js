import axios from 'axios';
import {GET_RESTAURANTS, UPDATE_RESTAURANTS} from './types';

axios.defaults.baseURL = 'https://thawing-savannah-03790.herokuapp.com/';

export const getRestaurants = () => async dispatch => {
  try {
    const url = 'api/restaurants/';
    await axios.get(url).then(res => {
      dispatch({
        type: GET_RESTAURANTS,
        payload: res.data,
      });
    });
  } catch (error) {
    return error;
  }
};

export const updateRestaurant = (id, star) => async dispatch => {
  try {
    const body = {star: star};
    const url = `api/restaurants/${id}`;
    await axios.put(url, body).then(res => {
      dispatch({
        type: UPDATE_RESTAURANTS,
        payload: res.data,
      });
    });
  } catch (error) {
    return error;
  }
};
