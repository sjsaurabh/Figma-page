import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
export default function MyUi() {
  return (
    <ScrollView style={{marginTop:StatusBar.currentHeight}}>
      
      <View style={{marginTop:25}}>
     <Image
     style={{width:160,height:60,marginLeft:140}}
     source={{uri:'https://www.khidmah.com/images/logo.png'}}
     />
     </View>
     <View>
     <TextInput 
     placeholder='FirstName'
     style={{
        borderWidth:1,
        width:'80%',
        alignSelf:'center',
        marginTop:25,
        height:50,
        // textAlign:"center"
        padding: 10,
    }}
     />
     <TextInput
     placeholder='LastName'
     style={{
        borderWidth:1,
        width:'80%',
        alignSelf:'center',
        marginTop:25,
        height:50,
        padding: 10,
    }}
     />
     <TextInput
     placeholder='Mobile'
     style={{
        borderWidth:1,
        width:'80%',
        alignSelf:'center',
        marginTop:25,
        height:50,
        padding: 10,
    }}
     />
     <TextInput
     placeholder='Email'
     style={{
        borderWidth:1,
        width:'80%',
        alignSelf:'center',
        marginTop:25,
        height:50,
        padding: 10,
    }}
     />
     <Text  style={{
        // borderWidth:1,
        width:'80%',
        alignSelf:'center',
        marginTop:28,
        height:50,
        padding: 13,
        textAlign:"center",
        backgroundColor:"#ffcccc"
    }}>Attach Tency Contract</Text>
     </View>
     <View style={{marginTop:20
     }}>
     
      <TouchableOpacity style={{backgroundColor:"black",width:"80%",height:65,flexDirection:"row",alignItems:"center",alignContent:"center",justifyContent:"center",marginLeft:40,}}>
      <Text>     </Text><Ionicons name='chevron-forward-outline' size={27} color="#20c997"/>
      <Text  style={{color:"white",textAlign:"center",fontSize:20}}>SUMMIT</Text>
      </TouchableOpacity>
      </View>
      
      <View style={{}}>
      <Image
      style={{width:260,height:140,marginLeft:200}}
      source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73AQRrnPPrWQUH53fp0Ao6JtXVnOum6ipEw&usqp=CAU'}}
      />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})