import React from 'react'
import { View } from 'react-native'
import { Button, useTheme } from 'react-native-elements'
import useGlobalStyles from '../../hooks/useGlobalStyles'
import Graph from './Graph'

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
      <Button title="Download to CSV" />
    </View>
  )
}
