import React from 'react'
import { View } from 'react-native'
import { Button, useTheme } from 'react-native-elements'
import useGlobalStyles from '../../hooks/useGlobalStyles'
import LogList from './LogList'

export default function SystemLogTab() {
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
      <LogList />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
        }}
      >
        <Button title="Motor" />
        <Button title="Motion Sensor" />
      </View>
    </View>
  )
}
