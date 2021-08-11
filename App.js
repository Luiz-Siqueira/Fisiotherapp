import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Route from './src/route';

export default function App() {
  return (
    <NavigationContainer>
      <Route/>
    </NavigationContainer>
  );
}