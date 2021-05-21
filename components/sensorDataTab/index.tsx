import React from 'react'
import { View } from 'react-native'
import SensorList from './SensorList'
import SystemStatus from './SystemStatus'

export default function SensorDataTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SystemStatus />
      <SensorList />
    </View>
  )
}
