import 'react-native-gesture-handler'
import React from 'react'
import { Image } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider, Header, Theme } from 'react-native-elements'
import TabNavigator from './src/components/navigation/TabNavigator'
import { NavigationContainer } from '@react-navigation/native'
import Logo from './assets/LidaLogo.png'

const theme: Theme = {
  colors: {
    primary: '#004BA6',
    black: '#000000',
    grey0: '#5E5E60',
    grey1: '#313134',
    success: '#009876',
    warning: '#F6A623',
    error: '#DE415A',
  },
  ButtonGroup: {
    containerStyle: { borderRadius: 15 },
    textStyle: { color: '#5E5E60' },
    buttonStyle: { backgroundColor: '#19191B' },
    selectedTextStyle: { color: '#FFFFFF' },
    selectedButtonStyle: { backgroundColor: '#5E5E60' },
  },
  Button: {
    containerStyle: { borderRadius: 10 },
  },
  Header: {
    backgroundColor: '#313134',
  },
  Text: {
    style: { color: '#FFFFFF' },
  },
  ListItem: {
    containerStyle: {
      width: '100%',
      backgroundColor: '#5E5E60',
    },
  },
  ListItemSubtitle: {
    style: { color: '#FFFFFF' },
  },
  Divider: {
    style: { marginTop: 5, marginBottom: 5, backgroundColor: '#5E5E60' },
  },
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Header centerComponent={<Image source={Logo} style={{ width: 170, height: 66 }} />} />
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
