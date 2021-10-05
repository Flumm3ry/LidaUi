import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Button, Text, Divider, useTheme } from 'react-native-elements'
import sensorNames from '../../constants/sensorNames'
import useGlobalStyles from '../../hooks/useGlobalStyles'

interface SensorSelectorProps {
  onSelected(key: string): void
}

export default function SensorSelector({ onSelected }: SensorSelectorProps) {
  const buttons = [
    sensorNames.temperature,
    sensorNames.oxygen,
    sensorNames.methane,
    sensorNames.moisture,
    sensorNames.carbon,
  ]

  const Icons = {
    images: [
      require('../../../assets/resources/CarbonRounded.png'),
      require('../../../assets/resources/CelciusRounded.png'),
      require('../../../assets/resources/MethaneRounded.png'),
      require('../../../assets/resources/MoistureRounded.png'),
      require('../../../assets/resources/OxygenRounded.png'),
    ],
  }

  const { horizontalPadding } = useGlobalStyles()

  const { theme } = useTheme()

  const styles = StyleSheet.create({
    sensorIconButton: {
      borderRadius: 15,
      backgroundColor: 'black',
      margin: 10,
    },
  })

  return (
    <View
      style={{
        marginHorizontal: -horizontalPadding,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      <View style={{ backgroundColor: theme.colors?.grey1, alignSelf: 'flex-end', width: '100%' }}>
        <Text style={{ textAlign: 'center' }}>Click to Load Data</Text>
        <Divider />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
          }}
        >
          {buttons.map((b, index) => (
            <Button
              buttonStyle={styles.sensorIconButton}
              icon={<Image source={Icons.images[index]} style={{ width: 80, height: 80 }} />}
              key={b}
              onPress={() => onSelected(b)}
            />
          ))}
        </View>
      </View>
    </View>
  )
}
