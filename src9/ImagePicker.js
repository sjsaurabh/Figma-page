import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'

export default function ImagePicker() {
  return (
    <View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
      <Text>ImagePicker</Text>
      <TouchableOpacity style={{backgroundColor:"grey",width:'30%',height:50}}>
       <Text>Open Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity>
       <Text> open Gallery</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})