import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function SmallModal() {
  let[visivbleModal,setVisivbleModal]=useState(false)
  return (
    <View style={{margin:20,flex:1}}>
      <Text>Normal screen</Text>
      <Button title='show' onPress={()=>setVisivbleModal(!visivbleModal)}/>
      <Modal 
      transparent={true}
      visible={visivbleModal}
      >
      <View style={{backgroundColor:'#000000aa',flex:1,}}>
      <View style={{backgroundColor:'#ffffff',margin:100,padding: 80,}}>
      <Text>Modal screen </Text>
      <View>
      <Text>GFHDFJHDDVJH</Text>
      <Button title='hide' onPress={()=>setVisivbleModal(!visivbleModal)}/>
      </View>
      </View>
     
      </View>
      
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({})