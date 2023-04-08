import { StyleSheet, Text, View,StatusBar, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'

import DateTimePickerModal from "react-native-modal-datetime-picker";
export default function DatePicker() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (date) => {
    console.warn("A time has been picked: ", date);
    hideTimePicker();
  };

  return (
    <View style={{flex:1, marginTop: StatusBar.currentHeight,justifyContent:"center",alignItems:"center" }}>
      <Text>DatePickerffffdddddddddddddd</Text>
      <TouchableOpacity 
      style={{
       width:"50%",
       height:50,
       borderWidth:1,
       borderRadius:20,
       justifyContent:"center",
       alignItems:"center"
      }} onPress={()=>{
        showDatePicker()
      }}
      >
      <Text>DatePicker</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        width:"50%",
        height:50,
        borderWidth:1,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        marginTop:15
       }}
       onPress={()=>{
        showTimePicker()
      }}
       >
      <Text>TimePicker</Text>
      </TouchableOpacity>
      <DateTimePickerModal
      isVisible={isDatePickerVisible}
      mode="date"
      onConfirm={handleDateConfirm}
      onCancel={hideDatePicker}
    />
      <DateTimePickerModal
      isVisible={isTimePickerVisible}
      mode="time"
      onConfirm={handleTimeConfirm}
      onCancel={hideTimePicker}
    />
    </View>
  )
}

const styles = StyleSheet.create({

})