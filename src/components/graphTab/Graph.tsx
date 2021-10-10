import React from 'react'
import { View } from 'react-native'
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import { Text, useTheme } from 'react-native-elements'
import useGlobalStyles from '../../hooks/useGlobalStyles'
import moment from 'moment'

interface GraphProps {
  graphPoints: { timestamp: number; value: number }[]
  sensorName: string
  timespan: string
}

export default function Graph({ graphPoints, sensorName, timespan }: GraphProps) {
  const { contentWidth } = useGlobalStyles()

  const { theme } = useTheme()

  const contentInset = { top: 20, bottom: 20 }

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
      <View style={{ height: 200, width: contentWidth }}>
        {graphPoints.length > 1 ? (
          <>
            <View style={{ flexDirection: 'row' }}>
              <YAxis
                data={graphPoints.map((gp) => gp.value)}
                contentInset={contentInset}
                svg={{
                  fill: 'white',
                  fontSize: 10,
                }}
                numberOfTicks={4}
              />
              <LineChart
                style={{ height: 200, width: contentWidth }}
                data={graphPoints.map((p) => p.value)}
                contentInset={contentInset}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
              >
                <Grid />
              </LineChart>
            </View>
            <XAxis
              style={{ marginHorizontal: -10 }}
              data={graphPoints.map((gp) => gp.value)}
              formatLabel={(_, index) =>
                index === 0 || index === graphPoints.length - 1
                  ? moment(graphPoints[index].timestamp).format('D/M/YY H:m')
                  : ''
              }
              contentInset={{ left: 35, right: 35 }}
              svg={{ fontSize: 10, fill: 'white' }}
            />
          </>
        ) : (
          <Text>Not enough data in this timespan to display a graph</Text>
        )}
      </View>
    </View>
  )
}
