import { ButtonGroup } from 'react-native-elements'
import React from 'react'
import { NavigationState, ParamListBase } from '@react-navigation/routers'
import { NavigationProp } from '@react-navigation/core'

interface TopAppBarProps {
  state: NavigationState
  navigation: NavigationProp<ParamListBase>
}

export default function TobTabBar({ state, navigation }: TopAppBarProps) {
  return (
    <ButtonGroup
      selectedIndex={state.index}
      onPress={(index) => {
        console.log(state.routeNames[index])
        navigation.navigate(state.routeNames[index])
      }}
      buttons={['Sensor Data', 'Graph', 'System Logs']}
    />
  )
}
