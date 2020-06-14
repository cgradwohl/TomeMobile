import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';

import { Header } from 'react-native-elements';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const LibraryScreen = () => (
  <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Library Screen</Text>
  </SafeAreaView>
);

const TomeScreen = () => (
  <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Tome Screen</Text>
  </SafeAreaView>
);

const QueueScreen = () => (
  <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Queue Screen</Text>
  </SafeAreaView>
);

const Router = () => (
  <Tab.Navigator>
    <Tab.Screen name="Library" component={LibraryScreen} />
    <Tab.Screen name="Tome" component={TomeScreen} />
    <Tab.Screen name="Queue" component={QueueScreen} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Header
        leftComponent={{ icon: 'menu', color: 'green' }}
        centerComponent={{ text: 'MY TITLE', style: { color: 'green' } }}
        rightComponent={{ icon: 'home', color: 'green' }}
      />
      <Router />
    </NavigationContainer>
  );
}
