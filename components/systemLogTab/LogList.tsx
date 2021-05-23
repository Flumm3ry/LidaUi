import React from 'react'
import { View, Text, StyleProp, ViewStyle } from 'react-native'
import { ListItem } from 'react-native-elements'

const listItemStyle: StyleProp<ViewStyle> = {
  width: '100%',
}

export default function LogList() {
  return (
    <View style={{ width: '100%' }}>
      <Text>Log Times of Motor Turn</Text>
      <ListItem style={listItemStyle}>
        <ListItem.Content>
          <ListItem.Title>Motor 1, 10:00am Thur, April 15</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem style={listItemStyle}>
        <ListItem.Content>
          <ListItem.Title>Motor 1, 10:00am Thur, April 15</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem style={listItemStyle}>
        <ListItem.Content>
          <ListItem.Title>Motor 1, 10:00am Thur, April 15</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem style={listItemStyle}>
        <ListItem.Content>
          <ListItem.Title>Motor 1, 10:00am Thur, April 15</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem style={listItemStyle}>
        <ListItem.Content>
          <ListItem.Title>Motor 1, 10:00am Thur, April 15</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem style={listItemStyle}>
        <ListItem.Content>
          <ListItem.Title>Motor 1, 10:00am Thur, April 15</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem style={listItemStyle}>
        <ListItem.Content>
          <ListItem.Title>Motor 1, 10:00am Thur, April 15</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem style={listItemStyle}>
        <ListItem.Content>
          <ListItem.Title>Motor 1, 10:00am Thur, April 15</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </View>
  )
}
