import { TabBar, Tab } from "@ui-kitten/components";

export default function TobTabBar ({state, navigation}) {
  return (
    <TabBar
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <Tab title='Sensor Data'/>
      <Tab title='Graph'/>
      <Tab title='System Log'/>
    </TabBar>
  )
}
