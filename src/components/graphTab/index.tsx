import moment from 'moment'
import React from 'react'
import { ActivityIndicator, StyleProp, View, ViewStyle, StyleSheet, Image } from 'react-native'
import { Button, useTheme } from 'react-native-elements'
import sensorNames from '../../constants/sensorNames'
import useGlobalStyles from '../../hooks/useGlobalStyles'
import { useAppSelector } from '../../states/reduxHooks'
import { sensorDataSelector } from '../../states/selectors'
import { ConvertObjectToCsv, downloadStringAsFile } from '../../utils/csvHelper'
import Graph from './Graph'
import SensorSelector from './SensorSelector'
import downloadIcon from '../../../assets/DownloadIcon.png'
import { ScrollView } from 'react-native-gesture-handler'

export default function GraphTab() {
  const { horizontalPadding } = useGlobalStyles()
  const { theme } = useTheme()
  const { sensorData, state } = useAppSelector(sensorDataSelector)

  const [sensor, setSensor] = React.useState(sensorNames.oxygen)
  const [timespan, setTimespan] = React.useState<'day' | 'week' | 'month'>('day')

  const graphPoints = React.useMemo(() => {
    const startDate = moment().subtract(1, timespan).valueOf()
    const endDate = moment().valueOf()

    return sensorData
      .filter((s) => s.timeStamp >= startDate && s.timeStamp <= endDate && s.sensorName === sensor)
      .map((s) => ({
        timestamp: s.timeStamp,
        value: s.value,
      }))
  }, [sensor, timespan, sensorData])

  const downloadCsv = async () => {
    const csvString: string = ConvertObjectToCsv(
      graphPoints.map((gp) => ({
        date: moment(gp.timestamp).format('MMM Do HH:mm:ss'),
        value: gp.value,
      }))
    )

    await downloadStringAsFile(
      csvString,
      `${sensor}_Data_For_${timespan}-${moment().valueOf()}.csv`
    )
  }

  const styles = StyleSheet.create({
    graphPeriodButton: {
      borderRadius: 15,
      borderStyle: 'solid',
      borderColor: 'rgba(112, 112, 112, 1)',
      borderWidth: 2,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: 'rgba(25, 25, 27, 1)',
    },
    graphCSVButton: {
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
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: horizontalPadding,
          paddingRight: horizontalPadding,
          backgroundColor: theme.colors?.black,
        }}
      >
        {state !== 'loading' ? (
          <>
            <Graph graphPoints={graphPoints} sensorName={sensor} timespan={timespan} />
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'row',
                width: '100%',
                marginTop: 30,
              }}
            >
              <Button
                buttonStyle={styles.graphPeriodButton}
                title="Day"
                onPress={() => setTimespan('day')}
              />
              <Button
                buttonStyle={styles.graphPeriodButton}
                title="Week"
                onPress={() => setTimespan('week')}
              />
              <Button
                buttonStyle={styles.graphPeriodButton}
                title="Month"
                onPress={() => setTimespan('month')}
              />
            </View>
            <Button
              icon={<Image source={downloadIcon} style={{ width: 40, height: 40, margin: 10 }} />}
              iconRight
              buttonStyle={styles.graphCSVButton}
              title="Download to CSV File"
              containerStyle={{ margin: 30 }}
              onPress={downloadCsv}
            ></Button>
            <SensorSelector onSelected={(sensorName) => setSensor(sensorName)} />
          </>
        ) : (
          <ActivityIndicator size="large" color="white" />
        )}
      </View>
    </ScrollView>
  )
}
