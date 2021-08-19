import React from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'
import { Divider, ListItem, Text, useTheme } from 'react-native-elements'
import { SystemLogDTO } from '../../states/systemLogsSlice'

interface LogListProps {
  sensorLogs: SystemLogDTO[]
  motorLogs: SystemLogDTO[]
  selection: 'S' | 'M'
}

export default function LogList({ sensorLogs, motorLogs, selection }: LogListProps) {
  const { theme } = useTheme()

  const listItemStyle = (index: number): StyleProp<ViewStyle> => ({
    backgroundColor: index % 2 ? theme.colors?.grey1 : theme.colors?.grey0,
    borderColor: theme.colors?.grey0,
    borderWidth: 2,
  })

  const currentLogs = selection === 'M' ? motorLogs : sensorLogs

  return (
    <View style={{ width: '100%' }}>
      <Text>Log Times of {selection === 'M' ? 'Motor Turns' : 'Sensor Triggers'} Turn</Text>
      <Divider />
      {currentLogs.map((l, i) => (
        <ListItem key={`${l.name}-${l.dateTime}`} containerStyle={listItemStyle(i)}>
          <ListItem.Content>
            <ListItem.Title>{`${l.name}, ${l.dateTime}`}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  )
}
