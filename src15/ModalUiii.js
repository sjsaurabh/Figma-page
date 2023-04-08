import {
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker'
import { Picker } from "@react-native-picker/picker";
import RadioGroup from "react-native-radio-buttons-group";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Modal } from "react-native";
import { Pressable } from "react-native";
import { Image } from "react-native";

export default function ModalUiii() {
  const [selectedLanguage, setSelectedLanguage] = useState('sql');
  const [modalVisible, setModalVisible] = useState(false);
  const [radioButtons, setRadioButtons] = useState([
    {
      id: "1", // acts as primary key, should be unique and non-empty string
      label: "10:30-12:00",
      value: "option1",
    },
    {
      id: "2",
      label: "10:30-12:00",
      value: "option2",
    },
    {
      id: "3",
      label: "10:30-12:00",
      value: "option3",
    },
  ]);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }
  return (
    <ScrollView style={{}}>
      <View>
      <Modal transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <Image
        style={{width:40,height:40}}
        source={{uri:"https://i.pinimg.com/736x/28/7e/b9/287eb9afb75e8642eca326f25a2d8128.jpg"}}
        />
        <Text style={styles.modalText}>Done</Text>
          <Text>Your Request has been submitted</Text>
           <Text>Service Request no. #57132</Text>
           <TouchableOpacity onPress={()=>setModalVisible(false)}>
           
           <Text style={{backgroundColor:'grey',fontSize:20,textAlign:"center",marginTop:10}}>continue</Text>
           </TouchableOpacity>
        </View>
    </View>
      </Modal>
      </View>
      <View
        style={{
          backgroundColor: "grey",
          width: "100%",
          height: 120,
          padding: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 3,
            marginTop: 30,
          }}
        >
          <Ionicons
            name="arrow-back-outline"
            size={25}
            style={{}}
            color="pink"
          />
          <Text style={{ fontSize: 18, color: "white" }}>
            {" "}
            New Common Area Request
          </Text>
        </View>
      </View>
      <View></View>
      <Text></Text>
      <View
        style={{
          backgroundColor: "#f1f2f6",
          width: "90%",
          height: 50,
          alignSelf: "center",
          borderWidth: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}
      >
        <View>
          <Text>Emergency?</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome5
            name="phone-square-alt"
            size={27}
            color="#20c997"
            style={{}}
          />
          <Text> 8005566</Text>
        </View>
      </View>

      <View style={{ marginVertical: 10 }}>
        <Text style={{ marginLeft: 18, marginVertical: 10 }}>Service Type</Text>
        <View
          style={{
            width: "90%",
            height: 55,
            borderWidth: .2,
            alignSelf: "center",
          }}
        >
          <View
            style={{
              //marginLeft: 25,
              //marginRight:25
              // paddingHorizontal: 10,
              marginBottom: 5,
            }}
           >
          
           
            
           
        <Picker
        style={{
          marginBottom: 10
        }}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label="Java" value="java" style={{fontSize:20,fontWeight:"400"}} />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Sql" value="sql" />
         </Picker>
            
            
          </View>
        </View>
      </View>

      <View style={{ marginVertical: 10 }}>
        <Text style={{ marginLeft: 18, marginVertical: 10 }}>
          Issue Description
        </Text>
        <View
          style={{
            width: "90%",
            height: 45,
            borderWidth: 1,
            alignSelf: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 5,
              paddingHorizontal: 10,
            }}
          >
            <Text>Water leak</Text>
            <Ionicons name="chevron-down" size={27} color="#20c997" />
          </View>
        </View>
      </View>

      <View style={{ marginVertical: 10 }}>
        <Text style={{ marginLeft: 18, marginVertical: 10 }}>
          Precise Location
        </Text>
        <View
          style={{
            width: "90%",
            height: 45,
            borderWidth: 1,
            alignSelf: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 5,
              paddingHorizontal: 10,
            }}
          >
            <Text>Select</Text>
            <Ionicons name="chevron-down" size={27} color="#20c997" />
          </View>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 15 }}>Prefred Date</Text>
          <Text style={{ fontSize: 20 }}>May 2021</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <View>
            <Text>Wed</Text>
            <Text style={{ textAlign: "center" }}>19</Text>
          </View>
          <View>
            <Text>Thu</Text>
            <Text style={{ textAlign: "center" }}>20</Text>
          </View>
          <View>
            <Text>Fri</Text>
            <Text style={{ textAlign: "center" }}>19</Text>
          </View>
          <View>
            <Text>Sat</Text>
            <Text style={{ textAlign: "center" }}>22</Text>
          </View>
          <View>
            <Text>Sun</Text>
            <Text style={{ textAlign: "center" }}>23</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 15,
          marginLeft: 10,
        }}
      >
        <RadioGroup
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
          layout="row"
        />
      </View>

      <View style={{ marginVertical: 10 }}>
        <Text style={{ marginLeft: 18, marginVertical: 10 }}>Description</Text>
        <View
          style={{
            width: "90%",
            height: 145,
            borderWidth: 1,
            alignSelf: "center",
            borderColor: "grey",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 5,
              paddingHorizontal: 10,
            }}
          ></View>
        </View>
      </View>
      <View>
        <Text style={{ marginLeft: 21, marginVertical: 15 }}>
          Attach Images/Video(Option)
        </Text>
        <View
          style={{
            width: "90%",
            height: 45,
            alignSelf: "center",
            borderColor: "grey",
            backgroundColor: "#ffcccc",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 5,
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ textAlign: "center", marginLeft: 85, marginTop: 7 }}>
              Attach Images/Videos
            </Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            width: "80%",
            height: 45,
            flexDirection: "row",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            marginLeft: 40,
          }} 
          onPress={()=>setModalVisible(!modalVisible)}
        >
          <Text> </Text>
          <Ionicons name="chevron-forward-outline" size={27} color="#20c997" />
          <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
            SUMMIT
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    borderWidth: 1,
    padding: 10,
    width: "80%",
    height: 45,
    margin: 15,
    alignSelf: "center",
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 40,
    backgroundColor: 'white',
    width: 265,
      height: 220,
    // borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    margin: 15,
    textAlign: 'center',
    fontSize:30
  },
});
