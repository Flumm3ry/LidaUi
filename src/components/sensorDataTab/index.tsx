import moment from 'moment'
import React from 'react'
import { ActivityIndicator, View, Image, StyleSheet } from 'react-native'
import { Button, useTheme } from 'react-native-elements'
import sensorNames from '../../constants/sensorNames'
import { GetSensorDataQueryDto } from '../../data/api/models'
import useGlobalStyles from '../../hooks/useGlobalStyles'
import { useAppSelector } from '../../states/reduxHooks'
import { sensorDataSelector } from '../../states/selectors'
import { ConvertObjectToCsv, downloadStringAsFile } from '../../utils/csvHelper'
import SensorList from './SensorList'
import SystemStatus from './SystemStatus'
import downloadIcon from '../../../assets/DownloadIcon.png'
import { ScrollView } from 'react-native-gesture-handler'

export default function SensorDataTab() {
  const { horizontalPadding } = useGlobalStyles()
  const { theme } = useTheme()
  const { sensorData, state } = useAppSelector(sensorDataSelector)
  const [dateSelected, setDateSelected] = React.useState<number>(moment().valueOf())

  const getMostRecentByName = (name: string) =>
    [...sensorData]
      .filter((sd) => sd.sensorName === name && sd.timeStamp <= dateSelected)
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
    [sensorData, dateSelected]
  )

  const downloadCsv = async () => {
    const csvString: string = ConvertObjectToCsv(
      mostRecentSensorData.map((sd) => ({
        name: sd.sensorName,
        value: sd.value,
        dateTime: moment(sd.timeStamp).format('MMM Do HH:mm:ss'),
      }))
    )

    await downloadStringAsFile(csvString, `Sensor_Data-${moment().valueOf()}.csv`)
  }

  const styles = StyleSheet.create({
    sensorCSVButton: {
      borderRadius: 15,
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: 'rgba(255, 255, 255, 1)',
      backgroundColor: 'rgba(0, 75, 166, 1)',
    },
  })

  return (
    <ScrollView>
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
        {state !== 'loading' ? (
          <>
            <SensorList
              sensorData={mostRecentSensorData}
              dateSelected={dateSelected}
              changeDateSelected={(newDate: number) => setDateSelected(newDate)}
            />
            <Button
              icon={<Image source={downloadIcon} style={{ width: 40, height: 40, margin: 10 }} />}
              iconRight
              buttonStyle={styles.sensorCSVButton}
              title="Download to CSV File"
              containerStyle={{ margin: 30 }}
              onPress={downloadCsv}
            ></Button>
          </>
        ) : (
          <ActivityIndicator size="large" color="white" />
        )}
      </View>
    </ScrollView>
  )
}
