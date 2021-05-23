import React from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'
import { Button, Text } from 'react-native-elements'

const container: StyleProp<ViewStyle> = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}

export default function SystemStatus() {
  return (
    <View style={container}>
      <View>
        <Text>System Status:</Text>
        <Text>Online</Text>
      </View>
      <Button title="Pause System" />
    </View>
  )
}
