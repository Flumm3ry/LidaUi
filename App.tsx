import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {ThemeProvider} from 'react-native-elements'

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <View style={styles.container}>
          <Text>Peter</Text>
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
