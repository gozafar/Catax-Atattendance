import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import loginReducers from './reducers/index';

const reducer = combineReducers({
  login: loginReducers,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  // reducer,
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);

export default store;
