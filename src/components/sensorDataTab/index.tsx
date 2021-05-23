import React from 'react'
import { View } from 'react-native'
import { useTheme } from 'react-native-elements'
import useGlobalStyles from '../../hooks/useGlobalStyles'
import SensorList from './SensorList'
import SystemStatus from './SystemStatus'

export default function SensorDataTab() {
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
      <SystemStatus />
      <SensorList />
    </View>
  )
}
