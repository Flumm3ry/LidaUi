import { configureStore } from '@reduxjs/toolkit'
import systemLogsReducer from './systemLogsSlice'
import sensorDataReducer from './sensorDataSlice'

export const store = configureStore({
  reducer: {
    systemLogs: systemLogsReducer,
    sensorData: sensorDataReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
