import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Button, useTheme } from 'react-native-elements'
import useGlobalStyles from '../../hooks/useGlobalStyles'
import { useAppSelector } from '../../states/reduxHooks'
import { systemLogsSelector } from '../../states/selectors'
import LogList from './LogList'

export default function SystemLogTab() {
  const { horizontalPadding } = useGlobalStyles()
  const { theme } = useTheme()
  const { sensorLogs, motorLogs, state } = useAppSelector(systemLogsSelector)

  const [selection, setSelection] = React.useState<'S' | 'M'>('M')

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
      {state === 'fulfilled' ? (
        <>
          <LogList motorLogs={motorLogs} sensorLogs={sensorLogs} selection={selection} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              width: '100%',
              marginTop: 50,
              marginBottom: 20,
            }}
          >
            <Button title="Motor" onPress={() => setSelection('M')} />
            <Button title="Motion Sensor" onPress={() => setSelection('S')} />
          </View>
        </>
      ) : (
        <ActivityIndicator size="large" color="white" />
      )}
    </View>
  )
}
