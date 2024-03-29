import React from 'react'
import { Divider, ListItem, Text, useTheme } from 'react-native-elements'
import { StyleProp, View, ViewStyle, Image, StyleSheet } from 'react-native'
import { GetSensorDataQueryDto } from '../../data/api/models'
import moment from 'moment'
import sensorNames from '../../constants/sensorNames'
import DatePicker from './DatePicker'

const Icons = {
  images: [
    require('../../../assets/resources/CelciusRounded.png'),
    require('../../../assets/resources/OxygenRounded.png'),
    require('../../../assets/resources/MethaneRounded.png'),
    require('../../../assets/resources/MoistureRounded.png'),
    require('../../../assets/resources/CarbonRounded.png'),
  ],
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 80,
    height: 80,
  },
})

interface SensorListProps {
  sensorData: GetSensorDataQueryDto[]
  dateSelected: number
  changeDateSelected(newDate: number): void
}

export default function SensorList({
  sensorData,
  dateSelected,
  changeDateSelected,
}: SensorListProps) {
  const getValueFromList = (sensorName: string) =>
    sensorData?.filter((s) => s.sensorName === sensorName).find(() => true)?.value || '--'

  const list: {
    title: string
    subTitle?: string
    value: string
    colour: 'success' | 'error' | 'warning'
  }[] = [
    {
      title: 'Temperature',
      subTitle: 'Thermophilic',
      value: `${getValueFromList(sensorNames.temperature)}\u00b0C`,
      colour: 'success',
    },
    {
      title: 'Oxygen Level',
      subTitle: '',
      value: `${getValueFromList(sensorNames.oxygen)}%`,
      colour: 'success',
    },
    {
      title: 'Methane Level',
      subTitle: `${getValueFromList(sensorNames.methane)}ppm`,
      value: `${getValueFromList(sensorNames.methane)}%`,
      colour: 'warning',
    },
    {
      title: 'Moisture Data',
      subTitle: 'TODO: High Saturation (Wet)',
      value: `${getValueFromList(sensorNames.moisture)}%`,
      colour: 'success',
    },
    {
      title: 'Carbon Dioxide',
      subTitle: `${getValueFromList(sensorNames.carbon)}ppm`,
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
      <View style={{ marginVertical: 5 }}>
        <Text>Showing newest data since {moment(dateSelected).fromNow()}...</Text>
      </View>
      <DatePicker onDateChanged={changeDateSelected} />
      <Divider />
      {list.map((l, index) => (
        <ListItem key={l.title} containerStyle={listItemStyle(l.colour)}>
          <Image style={styles.tinyLogo} source={Icons.images[index]} />
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
