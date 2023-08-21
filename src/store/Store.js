import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'; // Import persistReducer directly
import menuSlice from '../action/MenuSlice'; // Import your actual menuSlice reducer

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  // all slice names
  menu: menuSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer); // Change the variable name here

export const store = configureStore({
  reducer: persistedReducer,
});
