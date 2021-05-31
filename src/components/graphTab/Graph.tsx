import React from 'react'
import { View } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { Text, useTheme } from 'react-native-elements'
import useGlobalStyles from '../../hooks/useGlobalStyles'

export default function Graph() {
  const { contentWidth } = useGlobalStyles()

  const { theme } = useTheme()

  return (
    <View
      style={{ backgroundColor: theme.colors?.grey1, padding: 30, borderRadius: 20, marginTop: 30 }}
    >
      <Text h2 style={{ textAlign: 'center' }}>
        Temperature Graph
      </Text>
      <Text h3 style={{ textAlign: 'center', paddingBottom: 10 }}>
        07/04/21 - 15/04/21
      </Text>
      <LineChart
        data={{
          labels: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
            '00',
          ],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
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
