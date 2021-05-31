import React from 'react'
import { View } from 'react-native'
import { Button, useTheme } from 'react-native-elements'
import useGlobalStyles from '../../hooks/useGlobalStyles'
import Graph from './Graph'
import SensorSelector from './SensorSelector'

export default function GraphTab() {
  const { horizontalPadding } = useGlobalStyles()
  const { theme } = useTheme()

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
      <Graph />
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'row',
          width: '100%',
          marginTop: 30,
        }}
      >
        <Button title="Day" />
        <Button title="Week" />
        <Button title="Month" />
      </View>
      <Button title="Download to CSV" containerStyle={{ marginTop: 30 }} />
      <SensorSelector onSelected={() => undefined} />
    </View>
  )
}
