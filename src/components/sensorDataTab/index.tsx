import moment from 'moment'
import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Button, useTheme } from 'react-native-elements'
import sensorNames from '../../constants/sensorNames'
import { GetSensorDataQueryDto } from '../../data/api/models'
import useGlobalStyles from '../../hooks/useGlobalStyles'
import { useAppSelector } from '../../states/reduxHooks'
import { sensorDataSelector } from '../../states/selectors'
import { ConvertObjectToCsv, downloadStringAsFile } from '../../utils/csvHelper'
import SensorList from './SensorList'
import SystemStatus from './SystemStatus'

export default function SensorDataTab() {
  const { horizontalPadding } = useGlobalStyles()
  const { theme } = useTheme()
  const { sensorData, lastPolled, state } = useAppSelector(sensorDataSelector)

  const getMostRecentByName = (name: string) =>
    [...sensorData]
      .filter((sd) => sd.sensorName === name)
      .sort((sd) => sd.timeStamp)
      .reverse()
      .find(() => 1)

  const mostRecentSensorData: GetSensorDataQueryDto[] = React.useMemo(
    () =>
      [
        getMostRecentByName(sensorNames.carbon),
        getMostRecentByName(sensorNames.methane),
        getMostRecentByName(sensorNames.oxygen),
        getMostRecentByName(sensorNames.temperature),
        getMostRecentByName(sensorNames.moisture),
      ].filter((sd) => sd) as GetSensorDataQueryDto[],
    [sensorData]
  )

  const downloadCsv = async () => {
    const csvString: string = ConvertObjectToCsv(mostRecentSensorData)

    await downloadStringAsFile(csvString, `Sensor_Data-${moment().valueOf()}.csv`)
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding,
        paddingTop: 20,
        backgroundColor: theme.colors?.black,
      }}
    >
      <SystemStatus />
      {state === 'fulfilled' ? (
        <>
          <SensorList sensorData={mostRecentSensorData} lastPolled={moment(lastPolled).toDate()} />
          <Button title="Download as CSV" containerStyle={{ margin: 30 }} onPress={downloadCsv} />
        </>
      ) : (
        <ActivityIndicator size="large" color="white" />
      )}
    </View>
  )
}
