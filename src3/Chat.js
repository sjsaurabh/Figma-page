import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'
export default function Chat() {
  return (
    <View  style={{ marginTop: StatusBar.currentHeight }}>
    <View
    style={{
      width: "100%",
      height: 80,
      backgroundColor: "#636e72",
    }}
  >
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding:10
      }}
    >
      <View style={{marginLeft:20}} >
        <Text style={{color:"white"}}>9:41 AM</Text>
      </View>
      <View style={{ flexDirection: "row", paddingHorizontal:10 }}>
       <View>
       <FontAwesome5 name='signal' size={15} color='black'/>
       </View>
       <Text>  </Text>
       <View>
       <Entypo name='signal' size={15} color='black'/>
       </View>
       <Text>  </Text>
       <View>
       <FontAwesome5 name='battery-half' size={15} color='black'/>
       </View>
       
      </View>
    </View>
    <View style={{flexDirection:'row', justifyContent:"space-between",marginHorizontal:19}}>
    <View style={{flexDirection:'row',alignItems:"center",marginLeft:10,justifyContent:"center"}}> 
    <AntDesign name="arrowleft" size={26} color="white"  /> 
    <Text style={{ color: "white",marginLeft:5,fontSize:15}}>My Enquire</Text>
     </View>
       <View>
       
      <AntDesign name='search1' color="white" size={15}/>
       </View>
      
    </View>
  </View>
  <View></View>

  <View style={{flexDirection:"row",alignItems:"center", justifyContent:"space-between" ,paddingHorizontal:20, marginTop:15,}}>
  <View style={{flexDirection:"row"}}>
   <Text style={{fontSize:20}}>KHIDM</Text> 
   <Text style={{color:"green",fontSize:20}}>A</Text> 
   <Text style={{fontSize:20}}>H</Text> 
    <Text style={{marginLeft:10,fontSize:20}} >Hi there!</Text>
   
   </View>
    
   <View>
   <Fontisto name='email' size={25} color="black"/>
   </View>
  </View>

  <View style={{marginLeft:27,marginTop:20}}>
  <Text style={{fontSize:16,fontWeight:"500"}}>Welcome to Khidmah! How Can Help You Today?</Text>
  </View>

  <View style={{width:"90%",backgroundColor:'grey',height:0.5,margin:20,}}></View>
    
  <View style={{marginLeft:25,marginTop:15,}}>
  <View style={{width:"80%",height:130,backgroundColor:'grey',borderRadius:5}}>
  <Text style={{padding:18,color:"white",elevation:9}}>Lorem ipsum  sed do  eiusmod is can tempor incididunt ut  et dolore magna aliqua. Ut enim ad minim veniam, quis   nostrud  exercitation ullamco laboris nisi ut aliquip ex ea</Text>
  </View>
  </View>

  <View style={{marginLeft:90,marginTop:15,}}>
  <View style={{width:"90%",height:100,backgroundColor:'black',borderRadius:5}}>
  <Text style={{padding:18,color:"white",elevation:9}}>Lorem ipsum sed do  eiusmod is can tempor inc sed itation sed doeiusmod tempor inc nisi ut </Text>
  </View>
  <View style={{flexDirection:'row',justifyContent:"space-between"}}
>
    <MaterialCommunityIcons name='check-all' size={25} color="grey"/>
    <Text style={{marginRight:33}}>10m</Text>
  </View>
  </View>
 
  <View style={{width:"90%",backgroundColor:'grey',height:0.5,margin:20,marginTop:110}}></View>



    </View>
  )
}

const styles = StyleSheet.create({})