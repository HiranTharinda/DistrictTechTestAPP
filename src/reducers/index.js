import {combineReducers} from 'redux';
import restaurantsReducer from './restaurantReducer';

export const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
});
