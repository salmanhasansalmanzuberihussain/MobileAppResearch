import React, {useState} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { createNavigationContainerRef } from "@react-navigation/native"
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator()

function ProfileNav () {
   return (
      <Stack.Navigator initialRoutName="Profile">
         <Stack.Screen name="Profile" component={ProfileScreen} />
         <Stack.Screen name="Options" component={OptionsScreen} />
      </Stack.Navigator>
   );
}

const Tab = createBottomTabNavigator();

function TabNav (props) {
  const hide = props.routeName != "Profile"
   return (
      <Tab.Navigator initialRouteName="Home">
         <Tab.Screen name="Home" component={HomeScreen} />
         <Tab.Screen name="ProfileNav" component={ProfileNav} options={{
          headerShown: false,
          tabBarStyle: { display: hide ? "none" : "flex" }
        }} />
      </Tab.Navigator>
   );
}





function OptionsScreen() {
  return <View></View>
}

const ref = createNavigationContainerRef();

export default function App() {
  const [routeName, setRouteName] = useState();

  return (
    <NavigationContainer
      ref={ref}
      onReady={() => {
        setRouteName(ref.getCurrentRoute().name)
      }}
      onStateChange={async () => {
        const previousRouteName = routeName;
        const currentRouteName = ref.getCurrentRoute().name;
        setRouteName(currentRouteName);
      }}
    >
       <TabNav routeName={routeName} />
     </NavigationContainer>
  );
}
