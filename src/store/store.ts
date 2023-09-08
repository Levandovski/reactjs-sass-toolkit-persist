import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore} from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage'
import countReducer from './reducers/count';
import anotherReducer from './reducers/another';

const persistConfig: any = {
  key: 'root',
  storage: storage
};

const reducers: any = combineReducers({
  count: countReducer,
  another: anotherReducer, 
});

const _persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: _persistedReducer,
});

const persistor = persistStore(store);

export { persistor };

