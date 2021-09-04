import moment from 'moment'
import React from 'react'
import { View } from 'react-native'
import { useTheme } from 'react-native-elements'
import sensorNames from '../../constants/sensorNames'
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

  const getMostRecentByName = (name: string) =>
    [...sensorData]
      .filter((sd) => sd.sensorName === name)
      .sort((sd) => sd.timeStamp)
      .find(() => 1)

  const mostRecentSensorData: GetSensorDataQueryDto[] = React.useMemo(
    () =>
      [
        getMostRecentByName(sensorNames.carbon),
        getMostRecentByName(sensorNames.methane),
        getMostRecentByName(sensorNames.oxygen),
        getMostRecentByName(sensorNames.temperature),
      ].filter((sd) => sd) as GetSensorDataQueryDto[],
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
      <SensorList sensorData={mostRecentSensorData} lastPolled={moment(lastPolled).toDate()} />
    </View>
  )
}
