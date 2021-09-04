import React from 'react'
import { Avatar, Divider, ListItem, Text, useTheme } from 'react-native-elements'
import { StyleProp, View, ViewStyle } from 'react-native'
import { GetSensorDataQueryDto } from '../../data/api/models'
import moment from 'moment'
import sensorNames from '../../constants/sensorNames'

interface SensorListProps {
  sensorData: GetSensorDataQueryDto[]
  lastPolled: Date | undefined
}

export default function SensorList({ sensorData, lastPolled }: SensorListProps) {
  const getValueFromList = (sensorName: string) =>
    sensorData?.filter((s) => s.sensorName === sensorName).find(() => true)?.value || '--'

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
      icon: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      value: `${getValueFromList(sensorNames.temperature)}\u00b0C`,
      colour: 'success',
    },
    {
      title: 'Oxygen Level',
      subTitle: '',
      icon: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      value: `${getValueFromList(sensorNames.oxygen)}%`,
      colour: 'success',
    },
    {
      title: 'Methane Level',
      subTitle: `${getValueFromList(sensorNames.methane)}ppm`,
      icon: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      value: `${getValueFromList(sensorNames.methane)}%`,
      colour: 'warning',
    },
    {
      title: 'Moisture Data',
      subTitle: 'TODO: High Saturation (Wet)',
      icon: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      value: `${getValueFromList(sensorNames.moisture)}%`,
      colour: 'success',
    },
    {
      title: 'Carbon Dioxide',
      subTitle: `${getValueFromList(sensorNames.carbon)}ppm`,
      icon: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      value: `${getValueFromList(sensorNames.carbon)}%`,
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
        {lastPolled && <Text>Last Polled {moment(lastPolled).fromNow()}</Text>}
      </View>
      <Divider />
      {list.map((l) => (
        <ListItem key={l.title} containerStyle={listItemStyle(l.colour)}>
          <Avatar source={{ uri: l.icon }} />
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
