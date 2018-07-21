import { createStore, combineReducers } from 'redux';
import { API_CLIENT, SERVICES } from './constants';

export default function configureStore(initialState) {
  const reducers = SERVICES.reduce((accumulator, value) => (
    Object.assign(accumulator, { [value]: API_CLIENT[value].reducer })
  ), {});

  const reducer = combineReducers(reducers);

  return createStore(
    reducer,
    initialState,
  );
}
