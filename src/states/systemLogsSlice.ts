import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
import { MyApi } from '../data/myApi'

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
  const response = await MyApi.readSensorData(moment().subtract(1, 'week').unix(), moment().unix())

  const result: { motorLogs: SystemLogDTO[]; sensorLogs: SystemLogDTO[] } = {
    motorLogs: [],
    sensorLogs: [],
  }

  response.data.forEach((d) => {
    const labelData: SystemLogDTO = {
      name: d.sensorName,
      dateTime: moment(d.timeStamp).format('MMM Do'),
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
        state.state = state.motorLogs.length || state.sensorLogs.length ? 'refreshing' : 'loading'
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
