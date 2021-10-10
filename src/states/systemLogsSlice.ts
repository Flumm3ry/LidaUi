import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
import { MyApi } from '../data/myApi'

export interface SystemLogDTO {
  name: string
  timestamp: number
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
  const response = await MyApi.readSystemLog(
    moment().subtract(1, 'week').valueOf(),
    moment().valueOf()
  )

  const result: { motorLogs: SystemLogDTO[]; sensorLogs: SystemLogDTO[] } = {
    motorLogs: [],
    sensorLogs: [],
  }

  response.forEach((d) => {
    const labelData: SystemLogDTO = {
      name: d.sensorName,
      timestamp: d.timeStamp,
    }

    if ((d.sensorName as string).toLowerCase().includes('motor')) result.motorLogs.push(labelData)
    else result.sensorLogs.push(labelData)
  })

  return result
})

const systemLogsSlice = createSlice({
  name: 'systemLogs',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchLogs.pending, (state) => {
        state.state = state.state === 'idle' ? 'loading' : 'refreshing'
      })
      .addCase(fetchLogs.rejected, (state) => {
        state.state = state.state === 'loading' ? 'errored' : 'fulfilled'
      })
      .addCase(fetchLogs.fulfilled, (state, { payload }) => {
        state.state = 'fulfilled'
        state.motorLogs = payload.motorLogs
        state.sensorLogs = payload.sensorLogs
      }),
})

export default systemLogsSlice.reducer
