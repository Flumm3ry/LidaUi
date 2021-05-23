import React from 'react'
import { View } from 'react-native'
import useGlobalPadding from '../../hooks/useGlobalPadding'
import SensorList from './SensorList'
import SystemStatus from './SystemStatus'

export default function SensorDataTab() {
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
      <SystemStatus />
      <SensorList />
    </View>
  )
}
