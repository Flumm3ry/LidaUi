import { delay } from 'lodash'
import React from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'
import { Button, Text } from 'react-native-elements'
import { resolve } from 'url'
import { MyApi } from '../../data/myApi'

const container: StyleProp<ViewStyle> = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 14,
}

export default function SystemStatus() {
  const [online, setOnline] = React.useState<boolean | undefined>()
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    MyApi.createSensorData({
      body: JSON.stringify({ sensorName: 'domsmistake', value: 1 }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => setOnline(r.isRunning))
      .finally(() => setIsLoading(false))
  }, [])

  const handleButtonClick = () => {
    setIsLoading(true)

    MyApi.updateState({ isRunning: !online })
      .then((r) => setOnline(r.isRunning))
      .catch()
      .finally(() => setIsLoading(false))
  }

  return (
    <View style={container}>
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Text>System Status:</Text>
        {online !== undefined && <Text>{online ? 'Online' : 'Offline'}</Text>}
      </View>
      <Button
        title={isLoading ? 'Toggling Status' : 'Toggle Status'}
        disabled={isLoading}
        onPress={handleButtonClick}
      />
    </View>
  )
}
