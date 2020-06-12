import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Text>Hi</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
}
