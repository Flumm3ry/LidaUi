import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import useGlobalPadding from '../../hooks/useGlobalPadding'
import Graph from './Graph'

export default function GraphTab() {
  const { horizontalPadding } = useGlobalPadding()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding,
      }}
    >
      <Graph />
      <Button title="Download to CSV" />
    </View>
  )
}
