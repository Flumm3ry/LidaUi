import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs'
import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Text } from 'react-native-elements'
import { useAppDispatch, useAppSelector } from '../../states/reduxHooks'
import { sensorDataSelector, systemLogsSelector } from '../../states/selectors'
import { fetchSensorData } from '../../states/sensorDataSlice'
import { fetchLogs } from '../../states/systemLogsSlice'
import GraphTab from '../graphTab'
import SensorDataTab from '../sensorDataTab'
import SystemLogTab from '../systemLogTab'
import TopTabBar from './TopTabBar'

const { Navigator, Screen } = createMaterialTopTabNavigator()

export default function TabNavigator() {
  const dispatch = useAppDispatch()

  const { state: sensorDataState } = useAppSelector(sensorDataSelector)
  const { state: systemLogsState } = useAppSelector(systemLogsSelector)

  const isLoading = sensorDataState == 'loading' || systemLogsState == 'loading'

  React.useEffect(() => {
    dispatch(fetchSensorData())
    dispatch(fetchLogs())
  }, [])

  return (
    <Navigator
      style={{ backgroundColor: '#313134' }}
      tabBar={(props: MaterialTopTabBarProps) => (
        <TopTabBar navigation={props.navigation} state={props.state} />
      )}
    >
      <Screen name="SensorData" component={SensorDataTab} />
      <Screen name="Graph" component={GraphTab} />
      <Screen name="SystemLog" component={SystemLogTab} />
    </Navigator>
  )
}
