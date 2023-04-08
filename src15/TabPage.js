import * as React from 'react';
import { Text, View ,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Myuiipage from './Request';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
import DashBoard from '../src/DashBoard';
import MyUnit1 from '../src2/MyUnit1';
import Sam from '../src10/Sam';
import Feedback from '../src4/Feedback';





const Tab = createBottomTabNavigator();

export default function TabPage() {
  return (
   
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'DashBord') {
            iconName = 'home-outline'
          }
           else if (route.name === 'MyUnit1') {
            iconName =  'ios-list-outline';
          }
           else if (route.name === ' ') {
            return(
                <View style={{marginTop:-60,width:39,height:40,borderRadius:5,backgroundColor:"#3eeebc",alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity onPress={()=>{}}>
                <AntDesign name='plus' size={25} color='white'/>
                </TouchableOpacity>
                 
                </View>
            )
          }
           else if (route.name === 'Request') {
            iconName =  'ios-list-circle';
          }
           else if (route.name === 'More') {
            iconName =  'file-tray-full';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'skyblue',
        tabBarInactiveTintColor: 'white',
        tabBarStyle:{
            backgroundColor:"#5f5f5f",
            height:77
        },
        tabBarLabelStyle:{
            fontSize:14,
            paddingBottom:14
        },
        tabBarIconStyle:{
            marginTop:15
        }
      })}
     
      
      >
        <Tab.Screen name="DashBord" component={DashBoard} options={{headerShown:false}}  />
        <Tab.Screen name="MyUnit1" component={MyUnit1} options={{headerShown:false}}  />
        <Tab.Screen name=' ' component={Feedback} options={{headerShown:false}} />
        <Tab.Screen name="Request" component={Myuiipage} options={{headerShown:false}} />
        <Tab.Screen name="More" component={Sam}options={{headerShown:false}}  />
      </Tab.Navigator>
    
  );
}