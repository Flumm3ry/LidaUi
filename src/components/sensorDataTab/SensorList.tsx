import React from 'react'
import { Avatar, Divider, ListItem, Text, useTheme } from 'react-native-elements'
import { StyleProp, View, ViewStyle } from 'react-native'
import tempIcon from '../../../assets/resources/Celciuslog.png'
import oxygenIcon from '../../../assets/resources/oxygen2x.png'
import methaneIcon from '../../../assets/resources/methane2x.png'
import moistureIcon from '../../../assets/resources/moisture2x.png'
import carbonIcon from '../../../assets/resources/carbon2x.png'

export default function SensorList() {
  const list: {
    title: string
    subTitle?: string
    icon: string
    value: string
    colour: 'success' | 'error' | 'warning'
  }[] = [
    {
      title: 'Temperature',
      subTitle: 'Thermophilic',
      icon: tempIcon,
      value: '43\u00b0C',
      colour: 'success',
    },
    {
      title: 'Oxygen Level',
      subTitle: '',
      icon: oxygenIcon,
      value: '70%',
      colour: 'success',
    },
    {
      title: 'Methane Level',
      subTitle: '70ppm',
      icon: methaneIcon,
      value: '0.007%',
      colour: 'warning',
    },
    {
      title: 'Moisture Data',
      subTitle: 'High Saturation (Wet)',
      icon: moistureIcon,
      value: '86.67%',
      colour: 'success',
    },
    {
      title: 'Carbon Dioxide',
      subTitle: '450ppm',
      icon: carbonIcon,
      value: '0.045%',
      colour: 'error',
    },
  ]

  const { theme } = useTheme()

  const listItemStyle = (
    backgroundColor: 'success' | 'error' | 'warning'
  ): StyleProp<ViewStyle> => ({
    marginBottom: 10,
    backgroundColor: theme.colors ? theme.colors[backgroundColor] : undefined,
  })

  return (
    <View style={{ width: '100%' }}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>Sensor Data</Text>
        <Text>Last Polled 4:00PM</Text>
      </View>
      <Divider />
      {list.map((l) => (
        <ListItem key={l.title} containerStyle={listItemStyle(l.colour)}>
          <Avatar imageProps={{ resizeMode: 'contain' }} size={80} source={{ uri: l.icon }} />
          <ListItem.Content>
            <ListItem.Title>{l.title}</ListItem.Title>
            <ListItem.Subtitle>{l.subTitle}</ListItem.Subtitle>
          </ListItem.Content>
          <Text h4>{l.value}</Text>
        </ListItem>
      ))}
    </View>
  )
}
