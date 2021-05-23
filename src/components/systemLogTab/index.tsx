import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import useGlobalPadding from '../../hooks/useGlobalPadding'
import LogList from './LogList'

export default function SystemLogTab() {
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
