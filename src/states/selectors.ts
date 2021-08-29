import { RootState } from './store'

export const systemLogsSelector = (state: RootState) => state.systemLogs
export const sensorDataSelector = (state: RootState) => state.sensorData
