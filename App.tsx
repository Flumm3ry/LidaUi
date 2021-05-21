import 'react-native-gesture-handler'
import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider, Header, Theme } from 'react-native-elements'
import TabNavigator from './components/navigation/TabNavigator'
import { NavigationContainer } from '@react-navigation/native'

const theme: Theme = {
  colors: {
    primary: 'blue',
  },
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <View>
            <Header centerComponent={{ text: 'LIDA2', style: { color: '#fff' } }} />
            <TabNavigator />
            <Text>AGggGGGG</Text>
          </View>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
