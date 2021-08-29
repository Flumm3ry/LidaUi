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

export const fetchSensorData = createAsyncThunk('sensorData/fetchSensorData', async () => {
  const response = await MyApi.readSystemLog(moment().unix(), moment().subtract(2, 'days').unix())

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

const sensorDataSlice = createSlice({
  name: 'sensorData',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchSensorData.pending, (state) => {
        state.state = 'loading'
      })
      .addCase(fetchSensorData.rejected, (state) => {
        state.state = 'errored'
      })
      .addCase(fetchSensorData.fulfilled, (state, { payload }) => {
        state.state = 'fulfilled'
        state.motorLogs = payload.motorLogs
        state.sensorLogs = payload.sensorLogs
      }),
})

export default sensorDataSlice.reducer
