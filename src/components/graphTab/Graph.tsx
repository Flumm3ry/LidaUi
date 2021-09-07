import React from 'react'
import { View } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { Text, useTheme } from 'react-native-elements'
import useGlobalStyles from '../../hooks/useGlobalStyles'

interface GraphProps {
  graphPoints: { label: string; value: number }[]
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
      <LineChart
        data={{
          labels: graphPoints.map((p) => p.label),
          datasets: [
            {
              data: graphPoints.map((p) => p.value),
            },
          ],
        }}
        chartConfig={{
          backgroundColor: theme.colors?.grey1,
          backgroundGradientFrom: theme.colors?.grey1,
          backgroundGradientTo: theme.colors?.grey1,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#1daebf',
          },
        }}
        width={contentWidth}
        height={220}
      />
    </View>
  )
}
