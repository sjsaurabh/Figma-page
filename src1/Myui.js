import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashBoard from './DashBoard';
import Myunit from './Myunit';
import Request from './Request';
import More from './More';



const Tab = createBottomTabNavigator();

export default function Myui() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarStyle:{
          backgroundColor:"black"
        }
      }}>
    
        <Tab.Screen name="Dashborad" component={DashBoard} options={{
          headerShown:false,
        tabBarIcon:({focused})=>{
          return(
            <Image
            
            style={{width:35,height:35,
            tintColor:focused?'red':"green"
            }}
            source={require('./img/dashbord.png')}
            />
          )
        }
        }}/>
        <Tab.Screen name="myunit" component={Myunit} 
        options={{
          headerShown:false,
         
          tabBarIcon:({focused})=>{
            return(
              <Image
              style={{width:40,height:40, tintColor:focused?'red':"green"}}
              source={require('./img/Home.png')}
              />
            )
          }

        }}/>
       
        <Tab.Screen name="Request" component={Request}
        options={{
          tabBarIcon:({focused})=>{
            return(
              <Image
              style={{width:30,height:30 , tintColor:focused?'red':"green"}}
              source={require('./img/request.png')}
              />
            )
          }

        }}
        />
        <Tab.Screen name="More" component={More} 
        options={{
          tabBarIcon:({focused})=>{
            return(
              <Image
              style={{width:40,height:40 , tintColor:focused?'red':"green"}}
              source={require('./img/menu.png')}
              />
            )
          }

        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}