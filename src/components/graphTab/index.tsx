import moment from 'moment'
import React from 'react'
import { View } from 'react-native'
import { Button, useTheme } from 'react-native-elements'
import sensorNames from '../../constants/sensorNames'
import useGlobalStyles from '../../hooks/useGlobalStyles'
import { useAppSelector } from '../../states/reduxHooks'
import { sensorDataSelector } from '../../states/selectors'
import Graph from './Graph'
import SensorSelector from './SensorSelector'

export default function GraphTab() {
  const { horizontalPadding } = useGlobalStyles()
  const { theme } = useTheme()
  const { sensorData } = useAppSelector(sensorDataSelector)

  const [sensor, setSensor] = React.useState(sensorNames.oxygen)
  const [timespan, setTimespan] = React.useState<'day' | 'week' | 'month'>('day')

  const getLabelFormat = () => {
    switch (timespan) {
      case 'day':
        return 'H'
      case 'week':
        return 'dd'
      default:
        return 'D'
    }
  }

  const graphPoints = React.useMemo(() => {
    const startDate = moment().subtract(1, timespan).valueOf()
    const endDate = moment().valueOf()

    const labelFormat = getLabelFormat()

    return sensorData
      .filter((s) => s.timeStamp >= startDate && s.timeStamp <= endDate && s.sensorName === sensor)
      .map((s) => ({
        label: moment(s.timeStamp).format(labelFormat),
        value: s.value,
      }))
  }, [sensor, timespan])

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
      <Button title="Download to CSV" containerStyle={{ margin: 30 }} />
      <SensorSelector onSelected={(sensorName) => setSensor(sensorName)} />
    </View>
  )
}
