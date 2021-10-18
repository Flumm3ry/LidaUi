import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
import sensorNames from '../constants/sensorNames'
import { GetSensorDataQueryDto } from '../data/api/models'
import { MyApi } from '../data/myApi'

const WARNING_TEMP = 85

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
        state.state = state.state === 'idle' ? 'loading' : 'refreshing'
      })
      .addCase(fetchSensorData.rejected, (state) => {
        state.state = state.state === 'loading' ? 'errored' : 'fulfilled'
      })
      .addCase(fetchSensorData.fulfilled, (state, { payload }) => {
        state.lastPolled = moment().valueOf()
        state.state = 'fulfilled'
        state.sensorData = payload || []

        const latestTemp = state.sensorData
          .filter((s) => s.sensorName === sensorNames.temperature)
          .sort((s) => s.timeStamp)
          .reverse()
          .find(() => 1)

        if ((latestTemp?.value ?? 0) > WARNING_TEMP)
          alert(
            `Latest temperature was above ${WARNING_TEMP} degrees (${
              latestTemp?.value
            }) at [${moment(latestTemp?.timeStamp).format('MMM Do HH:mm:ss')}]`
          )
      }),
})

export default sensorDataSlice.reducer
