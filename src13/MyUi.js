import { StyleSheet, Text, View ,Modal,Button, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
export default function MyUi() {
  const[modalVisible,setModalVisible]=useState(false)
  return (
    <View>
    <Modal
    transparent={true}
    visible={modalVisible}
    >
    <View style={styles.container}>
    <View style={styles.container1}>
    <View style={styles.Filter}>
    <Text style={styles.header}>filter</Text>
    <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)} style={styles.touch}>
    <Entypo name='cross' size={20} color='black'/>
    </TouchableOpacity>
    </View>
    <View>
      <Text>DFGHJK</Text>
      </View>
    </View>
    </View>
    
    
    </Modal>
    <View style={{marginTop:20,}}>
    
      <View style={{width:"100%",backgroundColor:"grey",height:100}}>
      <Text style={{marginTop:60,marginLeft:20}}>Maintenance</Text>
      </View>
      <View>
      <Text style={{marginTop:20,marginLeft:20,fontSize:20}}>New Maintenance Requests</Text>
      <View style={{flexDirection:'row' ,justifyContent:"space-around",marginTop:15}}>
      <View style={{width:"40%",borderWidth:0.3,height:30}}>
      <Text style={{textAlign:'center',marginTop:5}}>Service Request</Text>
      </View>
      <View style={{width:"40%",borderWidth:0.3,height:30}}>
      <Text style={{textAlign:'center',marginTop:5}}>Common Area Request</Text>
      </View>
      <View>
      <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
      <Text>filter</Text>
      </TouchableOpacity>
      
      </View>
      

      </View>
      </View>
      <View></View>
      <View style={styles.main}>
        
      <View style={styles.buttonView}>
      <Button title='Open Model'/>
      
      </View>
      </View>
      </View>
      </View>
      )
}

const styles = StyleSheet.create({
    main:{
        flex:1
    },
    buttonView:{
       width:'30%',
       justifyContent:'center',
       alignItems:'center',
       marginTop:420,
       marginLeft:150
       
    },
    container:{
      flex:1,
      backgroundColor:"#000000aa"
    },
    container1:{
      width:416,
      height:700,
      backgroundColor:"#ffffff",
      marginTop:90
    },
    header:{
      fontSize:20,
      fontWeight:'700',
      paddingTop:29,
      paddingLeft:28,
    },
    Filter:{
      flexDirection:'row',
      borderWidth:1,
      height:78,
      width:414,
      borderColor:'#D9D9D9'
    },
    touch:{
      paddingTop:29,
      paddingLeft:294
    }
})