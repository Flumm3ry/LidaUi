import React from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'
import { Divider, ListItem, Text } from 'react-native-elements'

const listItemStyle: StyleProp<ViewStyle> = {
  width: '100%',
  backgroundColor: '',
}

export default function LogList() {
  return (
    <View style={{ width: '100%' }}>
      <Text>Log Times of Motor Turn</Text>
      <Divider />
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
