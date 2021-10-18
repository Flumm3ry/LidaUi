import React from 'react'
import { ActivityIndicator, View, Image, StyleSheet } from 'react-native'
import { Button, useTheme } from 'react-native-elements'
import useGlobalStyles from '../../hooks/useGlobalStyles'
import { useAppSelector } from '../../states/reduxHooks'
import { systemLogsSelector } from '../../states/selectors'
import LogList from './LogList'
import motorIcon from '../../../assets/motorIcon.png'
import motionIcon from '../../../assets/motionIcon.png'
import { ScrollView } from 'react-native-gesture-handler'

export default function SystemLogTab() {
  const { horizontalPadding } = useGlobalStyles()
  const { theme } = useTheme()
  const { sensorLogs, motorLogs, state } = useAppSelector(systemLogsSelector)

  const [selection, setSelection] = React.useState<'S' | 'M'>('M')

  const styles = StyleSheet.create({
    systemButton: {
      borderRadius: 15,
      borderStyle: 'solid',
      borderColor: 'rgba(112, 112, 112, 1)',
      borderWidth: 2,
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: 'rgba(25, 25, 27, 1)',
    },
  })

  React.useEffect(() => {
    if (state === 'errored')
      alert('An unexpected error occurred, please restart the application to continue')
  }, [state])

  return (
    <ScrollView>
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
        {state !== 'loading' ? (
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
              <Button
                icon={<Image source={motorIcon} style={{ width: 40, height: 40, margin: 10 }} />}
                iconRight
                buttonStyle={styles.systemButton}
                title="Motor"
                onPress={() => setSelection('M')}
              />
              <Button
                icon={<Image source={motionIcon} style={{ width: 40, height: 40, margin: 10 }} />}
                iconRight
                buttonStyle={styles.systemButton}
                title="Motion Sensor"
                onPress={() => setSelection('S')}
              />
            </View>
          </>
        ) : (
          <ActivityIndicator size="large" color="white" />
        )}
      </View>
    </ScrollView>
  )
}
