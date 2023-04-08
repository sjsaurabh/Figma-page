import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
export default function MyUnit1() {
  return (
    <View  style={{ marginTop: StatusBar.currentHeight }}>
    <View
    style={{
      width: "100%",
      height: 125,
      backgroundColor: "#7f8c8d",
    }}
  >
   
    <View style={{flexDirection:'row', justifyContent:"space-between",margin:30,marginTop:80}}>
       <View>
       <Text style={{ color: "white",}}>
       My Unit
      </Text>
       </View>
       <View style={{flexDirection:'row',alignItems:"center",marginLeft:10,justifyContent:"center"}}> 
         <Text style={{ color: "white",marginRight:5}}>Unit 102</Text>
         <AntDesign name="down" size={16} color="white"  /> 
       </View>
    </View>
  </View>
  <></>
  <View>
    <Image
    style={{width:"100%" ,height:150}}
    source={{uri:'https://media.istockphoto.com/id/177520041/photo/manicured-home-and-yard.jpg?s=612x612&w=is&k=20&c=WcLqYDd78i8pk4cARMKCX6QiIPlS7mg4SFe5X4imcRQ='}}
    />
  </View>
  
  <View style={{width:"100%" ,height:80, backgroundColor:"#add3e6"}}>
  <Text style={{marginLeft:20,marginTop:20,fontSize:20}}>Al-SuFouh</Text>
  <View style={{flexDirection:'row',alignItems:'center'}}>
<View> 
<Text>   </Text></View>
 <EvilIcons name='location' size={15} color="black"/>
  <Text>Dubai,united Arab Emirates</Text>
  </View>
  </View>
  <View></View>


  <View style={{width:"90%" ,height:80,backgroundColor:"#FFB6C1",alignSelf:"center",marginTop:20,}}>
  <Text style={{marginTop:15,marginLeft:10}}> Total Service Request</Text>
  <Text style={{marginLeft:13,fontSize:20}}>41</Text>
  </View>
  <View style={{flexDirection:'row',alignItems:'center', justifyContent:"space-between",paddingHorizontal:20,marginTop:12,marginBottom:10}}>
  <View><Text style={{fontSize:20}}>Recent Requests</Text>
  </View>
  <View style={{flexDirection:'row',alignItems:'center'}}>
  <Text>See all</Text>
  <AntDesign name='down' size={10} color='black'/>
  </View>
  </View>

  <View></View>

  <View
      style={{
        width: "90%",
        height: 130,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        alignSelf: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 18,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: "30%",
              height: 30,
              backgroundColor: "#daa520",
              margin: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>In Progress</Text>
          </View>
          <View
            style={{
              width: "36%",
              height: 30,
              backgroundColor: "skyblue",
              margin: 15,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 15,
            }}
          >
            <Text>Ticket No: CBI</Text>
          </View>
        </View>
        <View style={{}}>
          <Text>16-08-2022</Text>
        </View>
      </View>
      <View style={{ marginLeft: 7 }}>
        <Text style={{ fontSize: 20 }}>Water Leakage Issue</Text>
      </View>
      <View style={{ marginLeft: 7 }}>
        <Text style={{}}>Tap seems to be jammed</Text>
      </View>
    </View>
    <View
      style={{
        width: "90%",
        height: 42,

        borderLeftWidth: 1,
        borderRightWidth: 1,
        alignSelf: "center",
        backgroundColor: "grey",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 10,
          paddingHorizontal: 10,
        }}
      >
        <Text>A 052</Text>
        <Text>View Details</Text>
      </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({})