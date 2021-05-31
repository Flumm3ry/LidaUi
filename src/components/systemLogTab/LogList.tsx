import React from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'
import { Divider, ListItem, Text, useTheme } from 'react-native-elements'

export default function LogList() {
  const logList = [
    'Motor 1, 10:00am Thur, April 15',
    'Motor 1, 10:00am Thur, April 15',
    'Motor 1, 10:00am Thur, April 15',
    'Motor 1, 10:00am Thur, April 15',
    'Motor 1, 10:00am Thur, April 15',
    'Motor 1, 10:00am Thur, April 15',
    'Motor 1, 10:00am Thur, April 15',
    'Motor 1, 10:00am Thur, April 15',
  ]

  const { theme } = useTheme()

  const listItemStyle = (index: number): StyleProp<ViewStyle> => ({
    backgroundColor: index % 2 ? theme.colors?.grey1 : theme.colors?.grey0,
    borderColor: theme.colors?.grey0,
    borderWidth: 2,
  })

  return (
    <View style={{ width: '100%' }}>
      <Text>Log Times of Motor Turn</Text>
      <Divider />
      {logList.map((l, i) => (
        <ListItem key={l} containerStyle={listItemStyle(i)}>
          <ListItem.Content>
            <ListItem.Title>Motor 1, 10:00am Thur, April 15</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  )
}
