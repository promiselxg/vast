import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import appReducer from './appSlice'

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    app: appReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
})

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
export const useAppDispatch = () => useDispatch()

export default store