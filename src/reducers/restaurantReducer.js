import {GET_RESTAURANTS, UPDATE_RESTAURANTS} from '../actions/types';

const initialState = {
  restaurants: [],
};

const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANTS:
      return {...state, restaurants: action.payload};
    case UPDATE_RESTAURANTS:
      return {...state, restaurants: action.payload};
    default:
      return state;
  }
};

export default restaurantsReducer;
