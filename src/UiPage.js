import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashBoard from './DashBoard';
import MyUnit from './MyUnit';
import Request from './Request';
import More from './More';


const Tab = createBottomTabNavigator();

export default function UiPage() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="DashBoard" component={DashBoard}  options={{headerShown :false}}  />
        <Tab.Screen name="My Unit" component={MyUnit} />
        <Tab.Screen name="Request" component={Request} />
        <Tab.Screen name="More" component={More} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}