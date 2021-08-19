import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface SystemLogDTO {
  name: string
  dateTime: string
}

interface SystemLogsState {
  motorLogs: SystemLogDTO[]
  sensorLogs: SystemLogDTO[]
  state: 'idle' | 'loading' | 'fulfilled' | 'errored' | 'refreshing'
}

const initialState: SystemLogsState = {
  motorLogs: [],
  sensorLogs: [],
  state: 'idle',
}

export const fetchLogs = createAsyncThunk('systemLogs/fetchLogs', async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    motorLogs: [
      { name: 'Motor 1', dateTime: '10:00am Thur, April 15' },
      { name: 'Motor 2', dateTime: '10:00am Thur, April 15' },
      { name: 'Motor 1', dateTime: '10:00am Thur, April 16' },
      { name: 'Motor 2', dateTime: '10:00am Thur, April 16' },
      { name: 'Motor 1', dateTime: '10:00am Thur, April 17' },
      { name: 'Motor 2', dateTime: '10:00am Thur, April 17' },
      { name: 'Motor 1', dateTime: '10:00am Thur, April 18' },
      { name: 'Motor 2', dateTime: '10:00am Thur, April 18' },
    ],
    sensorLogs: [
      { name: 'Sensor 1', dateTime: '10:00am Thur, April 15' },
      { name: 'Sensor 2', dateTime: '10:00am Thur, April 15' },
      { name: 'Sensor 1', dateTime: '10:00am Thur, April 16' },
      { name: 'Sensor 2', dateTime: '10:00am Thur, April 16' },
      { name: 'Sensor 1', dateTime: '10:00am Thur, April 17' },
      { name: 'Sensor 2', dateTime: '10:00am Thur, April 17' },
      { name: 'Sensor 1', dateTime: '10:00am Thur, April 18' },
      { name: 'Sensor 2', dateTime: '10:00am Thur, April 18' },
    ],
  }
})

const systemLogsSlice = createSlice({
  name: 'systemLogs',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchLogs.pending, (state) => {
        state.state = 'loading'
      })
      .addCase(fetchLogs.rejected, (state) => {
        state.state = 'errored'
      })
      .addCase(fetchLogs.fulfilled, (state, { payload }) => {
        state.state = 'fulfilled'
        state.motorLogs = payload.motorLogs
        state.sensorLogs = payload.sensorLogs
      }),
})

export default systemLogsSlice.reducer
