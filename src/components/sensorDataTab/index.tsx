import React from 'react'
import { View } from 'react-native'
import { useTheme } from 'react-native-elements'
import { GetSensorDataQueryDto } from '../../data/api/models'
import useGlobalStyles from '../../hooks/useGlobalStyles'
import { useAppSelector } from '../../states/reduxHooks'
import { sensorDataSelector } from '../../states/selectors'
import SensorList from './SensorList'
import SystemStatus from './SystemStatus'

export default function SensorDataTab() {
  const { horizontalPadding } = useGlobalStyles()
  const { theme } = useTheme()
  const { sensorData, lastPolled } = useAppSelector(sensorDataSelector)

  const mostRecentSensorData: GetSensorDataQueryDto[] = React.useMemo(
    () => [...sensorData].sort((s) => s.timeStamp).slice(0, 5),
    [sensorData]
  )

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding,
        backgroundColor: theme.colors?.black,
      }}
    >
      <SystemStatus />
      <SensorList sensorData={mostRecentSensorData} lastPolled={lastPolled} />
    </View>
  )
}
