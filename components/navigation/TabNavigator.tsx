import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import React from "react"
import GraphTab from "../graphTab"
import SensorDataTab from "../sensorDataTab"
import SystemLogTab from "../systemLogTab"
import TopTabBar from './TopTabBar'

const {Navigator, Screen} = createMaterialTopTabNavigator()

export default function TabNavigator () {
  return (
  <Navigator tabBar={props => <TopTabBar {...props} />}>
    <Screen name='SensorData' component={SensorDataTab}/>
    <Screen name='Graph' component={GraphTab}/>
    <Screen name='SystemLog' component={SystemLogTab}/>
  </Navigator>)
}
