// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Figma from './Main/Figma';
import Form2 from './src6/Form2';
import Form3 from './src8/Form3';
import TabPage from './src15/TabPage';
import Common from './src12/Common';
import ChangePassword from './src7/ChangePassword';
import Maintance from './src5/Maintance';
import Service from './src9/Service';
import ModalUiii from './src15/ModalUiii';
import Feedback from './src4/Feedback';





const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Figma} options={{headerShown:false}} />
        <Stack.Screen name="Back" component={Form2}  />
        <Stack.Screen name="Forget Password" component={Form3}  />
        <Stack.Screen name="Back1" component={TabPage} options={{headerShown:false}} />
        <Stack.Screen name="Common" component={Common} options={{headerShown:false}} />
        <Stack.Screen name="Change password" component={ChangePassword}  />
        <Stack.Screen name="Maintance" component={Maintance}  />
        <Stack.Screen name="Service" component={Service}  />
        <Stack.Screen name="ModalUiii" component={ModalUiii}  />
        <Stack.Screen name="Feedback" component={Feedback}  />
       
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;