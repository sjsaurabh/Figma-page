import { StyleSheet, Text, View,Button,Modal } from 'react-native'
import React from 'react'

export default function ModalUii() {
  return (
    <View style={styles.main}>
      
      <Modal
      transparent={true}
      >
        <View>
         <View style={{justifyContent:''}}>
         <Text>ModalUii</Text>

         </View>
        
        </View>
      </Modal>
      <View style={styles.buttonView}>
      <Button title='Open Model'/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex:1
    },
    buttonView:{
        flex:1,
       justifyContent:'flex-end'
       
    }

})