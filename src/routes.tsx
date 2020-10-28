import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Home from './pages/Tab/Home';
import Information from './pages/Tab/Information';
import Notification from './pages/Tab/Notification';

import MoreInformation from './pages/Stack/MoreInformation';

const Stack = createStackNavigator();

function StackInformationToMoreInformation() {
   return (
      <Stack.Navigator initialRouteName="Information">
         <Stack.Screen name="Information" component={Information} />
         <Stack.Screen name="MoreInformation" component={MoreInformation} />
      </Stack.Navigator>
   );
}

export default function Routes() {
   const Tab = createMaterialBottomTabNavigator();

   return (
      <NavigationContainer>
         <Tab.Navigator initialRouteName="Home" screenOptions={{ tabBarColor: '#2AB5D1' }}>
            <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home', tabBarIcon: ({ color }) => <Feather name="home" color={color} size={24} /> }} />
            <Tab.Screen name="Information" component={StackInformationToMoreInformation} options={{ tabBarLabel: 'Information', tabBarIcon: ({ color }) => <Feather name="info" color={color} size={24} /> }} />
            <Tab.Screen name="Notification" component={Notification} options={{ tabBarLabel: 'Notification', tabBarIcon: ({ color }) => <Feather name="bell" color={color} size={24} /> }} />
         </Tab.Navigator>
      </NavigationContainer>
   );
}
