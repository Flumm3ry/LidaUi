import React from 'react'
import { View, Text } from 'react-native'
import { Button, useTheme } from 'react-native-elements'
import useGlobalStyles from '../../hooks/useGlobalStyles'
import { useAppDispatch, useAppSelector } from '../../states/reduxHooks'
import { systemLogsSelector } from '../../states/selectors'
import { fetchLogs } from '../../states/systemLogsSlice'
import LogList from './LogList'

export default function SystemLogTab() {
  const { horizontalPadding } = useGlobalStyles()
  const { theme } = useTheme()
  const { sensorLogs, motorLogs } = useAppSelector(systemLogsSelector)

  const [selection, setSelection] = React.useState<'S' | 'M'>('M')
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(fetchLogs())
  }, [dispatch])

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
    </View>
  )
}
