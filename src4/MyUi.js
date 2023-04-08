import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './Dashboard';
import MyUnit from './MyUnit';
import Requests from './Requests';
import More from './More';

import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator();

export default function MyUiFifth() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Dashbord') {
            iconName = 'view-dashboard-outline'
          } else if (route.name === 'Myunit') {
            // iconName = focused ? 'ios-list' : 'ios-list';
            iconName =  'home';
          }
          else if (route.name === 'More') {
            iconName = focused ? 'indent-more' : 'indent-more';
          }
          else if (route.name === 'Requests') {
            iconName = "request-page"
          }

          // You can return any component that you like here!
          if (iconName === "view-dashboard-outline") {
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />
            
          }else if(iconName==="ios-list") {
            return <Ionicons name={iconName} size={size} color={color} />;
          
          }
          else if(iconName==="request-page") {
            return <MaterialIcons name={iconName} size={size} color={color} />;
          
          }
          else {
            return <Foundation name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
      
      >
        <Tab.Screen name="Dashbord" component={Dashboard} options={{headerShown:false}}/>
        <Tab.Screen name="Myunit" component={MyUnit} />
        <Tab.Screen name="Requests" component={Requests} />
        <Tab.Screen name="More" component={More} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}