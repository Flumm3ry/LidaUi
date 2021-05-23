import React from 'react'
import { Avatar, ListItem } from 'react-native-elements'
import { StyleProp, ViewStyle, Text, View } from 'react-native'

const listItemStyle: StyleProp<ViewStyle> = {
  width: '100%',
}

export default function SensorList() {
  return (
    <View style={{ width: '100%' }}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>Sensor Data</Text>
        <Text>Last Polled 4:00PM</Text>
      </View>
      <ListItem style={listItemStyle}>
        <Avatar
          source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
        />
        <ListItem.Content>
          <ListItem.Title>Temperature</ListItem.Title>
          <ListItem.Subtitle>Thermophilic</ListItem.Subtitle>
        </ListItem.Content>
        <Text>{'43\u00b0C'}</Text>
      </ListItem>
      <ListItem style={listItemStyle}>
        <Avatar
          source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
        />
        <ListItem.Content>
          <ListItem.Title>Oxygen Level</ListItem.Title>
        </ListItem.Content>
        <Text>70%</Text>
      </ListItem>
      <ListItem style={listItemStyle}>
        <Avatar
          source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
        />
        <ListItem.Content>
          <ListItem.Title>Methane Level</ListItem.Title>
          <ListItem.Subtitle>70ppm</ListItem.Subtitle>
        </ListItem.Content>
        <Text>0.007%</Text>
      </ListItem>
      <ListItem style={listItemStyle}>
        <Avatar
          source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
        />
        <ListItem.Content>
          <ListItem.Title>Moisture Data</ListItem.Title>
          <ListItem.Subtitle>High Saturation (Wet)</ListItem.Subtitle>
        </ListItem.Content>
        <Text>86.67%</Text>
      </ListItem>
      <ListItem style={listItemStyle}>
        <Avatar
          source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
        />
        <ListItem.Content>
          <ListItem.Title>Carbon Dioxide</ListItem.Title>
          <ListItem.Subtitle>450ppm</ListItem.Subtitle>
        </ListItem.Content>
        <Text>0.045%</Text>
      </ListItem>
    </View>
  )
}
