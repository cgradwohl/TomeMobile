/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Button,
  Header,
  Overlay,
} from 'react-native-elements';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const LibraryScreen = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Library Screen</Text>
    <Button title="Go To Splash" onPress={() => navigation.navigate('Splash')} />
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

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Library" component={LibraryScreen} />
    <Tab.Screen name="Tome" component={TomeScreen} />
    <Tab.Screen name="Queue" component={QueueScreen} />
  </Tab.Navigator>
);

const Splash = () => (
  <SafeAreaView>
    <Text>Splash</Text>
  </SafeAreaView>
);

const Register = () => (
  <SafeAreaView>
    <Text>Register</Text>
  </SafeAreaView>
);

const Login = () => (
  <SafeAreaView>
    <Text>Register</Text>
  </SafeAreaView>
);

const ForgotPassword = () => (
  <SafeAreaView>
    <Text>ForgotPassword</Text>
  </SafeAreaView>
);

const AppNavigator = () => <TabNavigator />;

const Router = () => (
  <Stack.Navigator initialRouteName="AppNavigator">
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    <Stack.Screen name="AppNavigator" component={AppNavigator} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default function App() {
  const [active, setActive] = useState(false);

  const SettingsMenu = () => (
    <Overlay
      isVisible={active}
      onBackdropPress={() => setActive(!active)}
      overlayStyle={{
        width: '80%',
        height: '75%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <>
        <Text>Settings Menu!</Text>
        <Button
          buttonStyle={{
            backgroundColor: 'black',
            color: 'white',
          }}
          title="Log Out"
        />
      </>
    </Overlay>
  );

  const SettingsMenuButton = () => (
    <Button
      buttonStyle={{
        backgroundColor: 'black',
      }}
      icon={(
        <Icon
          color="white"
          name="ios-menu"
          size={20}
        />
      )}
      onPress={() => setActive(!active)}
    />
  );

  return (
    <NavigationContainer>
      <Header
        backgroundColor="black"
        centerComponent={{ text: 'Tome.', style: { color: 'white' } }}
        rightComponent={<SettingsMenuButton />}
      />
      <SettingsMenu />
      <Router />
    </NavigationContainer>
  );
}
