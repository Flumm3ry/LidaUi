import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import LogList from './LogList'

export default function SystemLogTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>System Logs</Text>
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
