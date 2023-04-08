import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Form2({ navigation }) {
  return (
    <ScrollView style={{marginTop:StatusBar.currentHeight}}>
      

      
     <View style={{marginTop:75}}>
     <Image
     style={{width:160,height:60,marginLeft:140}}
     source={{uri:'https://www.khidmah.com/images/logo.png'}}
     />
     </View>
     <View style={{marginTop:80}}>
     <Text style={{alignSelf:"center"}}>ACCOUNT LOGIN</Text>
     <TextInput
     placeholder='Username'
     style={{
        borderWidth:1,
        width:'80%',
        alignSelf:'center',
        marginTop:25,
        height:50,
        textAlign:"center"
    }}
     />
     <TextInput
     placeholder='password'
     style={{
        borderWidth:1,
        width:'80%',
        alignSelf:'center',
        marginTop:25,
        height:50,
        textAlign:"center"
    }}
     />
    <TouchableOpacity onPress={() => navigation.navigate("Forget Password")}>
    <Text  style={{marginLeft:229}}>forget password ?</Text>
    </TouchableOpacity>
     <View style={{marginTop:20
    }}>
    
     <TouchableOpacity style={{backgroundColor:"black",width:"70%",height:65,flexDirection:"row",alignItems:"center",alignContent:"center",justifyContent:"center",marginLeft:60,}}
     onPress={() => navigation.navigate("Back1")}
     >
     <Text>     </Text><Ionicons name='chevron-forward-outline' size={27} color="#20c997"/>
     <Text  style={{color:"white",textAlign:"center",fontSize:20}}>SIGN IN</Text>
     </TouchableOpacity>
     </View>
     </View>
     <View style={{marginTop:60}}>
     <Image
     style={{width:260,height:140,marginLeft:200}}
     source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73AQRrnPPrWQUH53fp0Ao6JtXVnOum6ipEw&usqp=CAU'}}
     />
     </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})