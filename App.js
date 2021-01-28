import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text} from 'react-native';
import Navigation from './navigation';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Navigation />
      <StatusBar style="light" />
    </View>
  );
}
