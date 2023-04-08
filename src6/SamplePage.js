import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function MyUi() {
    const [UserName, setUserName] = useState('');
    const [password, setPassword] = useState('');
  return (
    <ScrollView>
    <View style={{marginTop:StatusBar.currentHeight, width:"80%",
    height:"100%",}}>
     <View style={{alignSelf:"center",marginTop:80}}>
     <Image
     style={{width:160,height:60,marginLeft:80}}
     source={{uri:'https://www.khidmah.com/images/logo.png'}}
     />
      
     </View>
     <View></View>
     <Text></Text>
     <View  style={{marginTop:80}}>
     <Text style={{alignSelf:"center",marginLeft:40}}>ACCOUNT LOGIN</Text>
     </View>
     <View style={{alignSelf:"center", width:"80%",
     height:"100%",}}
     >
     <TextInput 
     style={styles.input}
     placeholder='Username' 
     placeholderTextColor="#003f5c"
     onChangeText={(email) => setUserName(email)}
     />
     <TextInput 
     style={styles.input}
     placeholder='password'
     placeholderTextColor="#003f5c"
     secureTextEntry={true}
     onChangeText={(password) => setPassword(password)}
     />
     
     </View>
     <View>
     
     <Text style={{marginLeft:150}}>forget jj password ?</Text>
     </View>
     <View>
     
     <Text style={{marginLeft:150}}>forget jj password ?</Text>
     </View>
     <View style={{alignSelf:"center"}}>
     <Image
     style={{width:150,height:100}}
     source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73AQRrnPPrWQUH53fp0Ao6JtXVnOum6ipEw&usqp=CAU'}}
     />
     
     </View>
     </View>
     </ScrollView>
     )
}

const styles = StyleSheet.create({
    input:{
    //  backgroundColor:"grey",
     marginTop:20,
     width:"120%",
     height:45,
     borderRadius:1,
     borderWidth:1,
     textAlign:"center",

     marginLeft:20
    }
})