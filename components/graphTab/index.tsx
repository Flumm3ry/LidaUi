import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import Graph from './Graph'

export default function GraphTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Graph />
      <Button title="Download to CSV" />
    </View>
  )
}
