import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistStore, persistCombineReducers } from 'redux-persist';
import thunk from 'redux-thunk';

import questionsReducer from '../features/questionsSlice'
import answersReducer from '../features/answersSlice'
import timersReducer from '../features/timersSlice'

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['timers'],
}

const persistedReducer = persistCombineReducers(persistConfig, {
  questions: questionsReducer,
  answers: answersReducer,
  timers: timersReducer,
})

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

export const persistor = persistStore(store)
