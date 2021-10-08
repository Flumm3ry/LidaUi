import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
import { GetSensorDataQueryDto } from '../data/api/models'
import { MyApi } from '../data/myApi'

interface SystemLogsState {
  sensorData: GetSensorDataQueryDto[]
  state: 'idle' | 'loading' | 'fulfilled' | 'errored' | 'refreshing'
  lastPolled?: number
}

const initialState: SystemLogsState = {
  sensorData: [],
  state: 'idle',
}

export const fetchSensorData = createAsyncThunk('sensorData/fetchSensorData', async () => {
  const response = await MyApi.readSensorData(
    moment().subtract(2, 'months').valueOf(),
    moment().valueOf()
  )

  return response
})

const sensorDataSlice = createSlice({
  name: 'sensorData',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchSensorData.pending, (state) => {
        state.state = state.sensorData.length ? 'refreshing' : 'loading'
      })
      .addCase(fetchSensorData.rejected, (state) => {
        state.state = 'errored'
      })
      .addCase(fetchSensorData.fulfilled, (state, { payload }) => {
        state.lastPolled = moment().valueOf()
        state.state = 'fulfilled'
        state.sensorData = payload || []
      }),
})

export default sensorDataSlice.reducer
