import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import HomepageItem from './components/HomepageItem';
import OrderButtons from "./components/OrderButtons";

export default function App() {
  return (
    <View style={styles.container}>
      <HomepageItem/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
