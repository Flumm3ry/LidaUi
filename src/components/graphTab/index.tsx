import moment from 'moment'
import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Button, useTheme } from 'react-native-elements'
import sensorNames from '../../constants/sensorNames'
import useGlobalStyles from '../../hooks/useGlobalStyles'
import { useAppSelector } from '../../states/reduxHooks'
import { sensorDataSelector } from '../../states/selectors'
import { ConvertObjectToCsv, downloadStringAsFile } from '../../utils/csvHelper'
import Graph from './Graph'
import SensorSelector from './SensorSelector'

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
      {state === 'fulfilled' ? (
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
            <Button title="Day" onPress={() => setTimespan('day')} />
            <Button title="Week" onPress={() => setTimespan('week')} />
            <Button title="Month" onPress={() => setTimespan('month')} />
          </View>
          <Button title="Download as CSV" containerStyle={{ margin: 30 }} onPress={downloadCsv} />
          <SensorSelector onSelected={(sensorName) => setSensor(sensorName)} />
        </>
      ) : (
        <ActivityIndicator size="large" color="white" />
      )}
    </View>
  )
}
