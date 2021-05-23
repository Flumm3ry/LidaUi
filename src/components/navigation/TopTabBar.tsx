import { ButtonGroup } from 'react-native-elements'
import React from 'react'
import { NavigationState, ParamListBase } from '@react-navigation/routers'
import { NavigationHelpers } from '@react-navigation/core'
import { MaterialTopTabNavigationEventMap } from '@react-navigation/material-top-tabs/lib/typescript/src/types'

interface TopAppBarProps {
  state: NavigationState
  navigation: NavigationHelpers<ParamListBase, MaterialTopTabNavigationEventMap>
}

export default function TobTabBar({ state, navigation }: TopAppBarProps) {
  return (
    <ButtonGroup
      selectedIndex={state.index}
      onPress={(index: number) => {
        navigation.navigate(state.routeNames[index])
      }}
      buttons={['Sensor Data', 'Graph', 'System Logs']}
    />
  )
}
