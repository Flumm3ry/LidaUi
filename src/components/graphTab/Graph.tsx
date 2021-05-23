import React from 'react'
import { LineChart } from 'react-native-chart-kit'
import { Text } from 'react-native-elements'
import useGlobalStyles from '../../hooks/useGlobalStyles'

export default function Graph() {
  const { contentWidth } = useGlobalStyles()

  return (
    <>
      <Text>Temperature Graph</Text>
      <LineChart
        data={{
          labels: ['1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
          datasets: [
            {
              data: [
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
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        width={contentWidth}
        height={220}
      />
    </>
  )
}
