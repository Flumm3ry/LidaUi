import React from 'react'
import { View } from 'react-native'
import { Grid, LineChart } from 'react-native-svg-charts'
import { Text, useTheme } from 'react-native-elements'
import useGlobalStyles from '../../hooks/useGlobalStyles'

interface GraphProps {
  graphPoints: { timestamp: number; value: number }[]
  sensorName: string
  timespan: string
}

export default function Graph({ graphPoints, sensorName, timespan }: GraphProps) {
  const { contentWidth } = useGlobalStyles()

  const { theme } = useTheme()

  return (
    <View
      style={{ backgroundColor: theme.colors?.grey1, padding: 30, borderRadius: 20, marginTop: 30 }}
    >
      <Text h2 style={{ textAlign: 'center' }}>
        {sensorName} Graph
      </Text>
      <Text h3 style={{ textAlign: 'center', paddingBottom: 10 }}>
        Data from the last {timespan}
      </Text>
      {graphPoints.length ? (
        <LineChart
          style={{ height: 220, width: contentWidth }}
          data={graphPoints.map((p) => p.value)}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{ stroke: 'rgb(134, 65, 244)' }}
        >
          <Grid />
        </LineChart>
      ) : (
        <Text>No points to show</Text>
      )}
    </View>
  )
}
