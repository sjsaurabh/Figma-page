import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <View style={styles.HOMETOP}>
      <Image 
      style={{width:"100%",height:undefined}}
      source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW9JFxHQsCNaEnVCUxgRk-DRC78OkCLjQjvA&usqp=CAU'}}
      />
      <Text style={styles.mainHeaderr}>Welcome to Home</Text>
      <Text style={styles.mainHeaderr}>Exalogic Consultant</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    HOMETOP:{

    }
})