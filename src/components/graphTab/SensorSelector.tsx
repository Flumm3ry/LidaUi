import React from 'react'
import { View } from 'react-native'
import { Button, Text, Divider, useTheme } from 'react-native-elements'
import useGlobalStyles from '../../hooks/useGlobalStyles'

interface SensorSelectorProps {
  onSelected(key: string): void
}

export default function SensorSelector({ onSelected }: SensorSelectorProps) {
  const buttons = ['temp', 'oxyg', 'meth', 'moist', 'carb']

  const { horizontalPadding } = useGlobalStyles()

  const { theme } = useTheme()

  return (
    <View
      style={{
        width: `calc(100% + ${horizontalPadding * 2}px)`,
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
          {buttons.map((b) => (
            <Button key={b} title={b} onPress={() => onSelected(b)} />
          ))}
        </View>
      </View>
    </View>
  )
}
