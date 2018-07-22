import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import { API_CLIENT, SERVICES } from './constants';

export default function configureStore(initialState) {
  const serviceReducers = SERVICES.reduce((accumulator, value) => (
    Object.assign(accumulator, { [value]: API_CLIENT[value].reducer })
  ), {});

  const reducer = combineReducers({
    ...serviceReducers,
    form,
  });
  const middleware = applyMiddleware(
    thunk,
    reduxPromiseMiddleware(),
  );
  const composeParams = [middleware];
  const enhancer = compose(...composeParams);

  return createStore(
    reducer,
    initialState,
    enhancer,
  );
}
