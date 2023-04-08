import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

export default function Form3({navigation}) {
  return (
    <ScrollView style={{ }}>
      <View
        style={{
          backgroundColor: "grey",
          width: "100%",
          height: 120,
          padding: 20,
        }}
      >
        
        <View
          style={{ flexDirection: "row", alignItems: "center", marginLeft: 5,marginTop:55 }}
        >
          <Ionicons
            name="arrow-back-outline"
            size={25}
            style={{}}
            color="pink"
          />
          <Text style={{ fontSize: 18, color: "white" }}> Forget Password</Text>
        </View>
      </View>
      <View style={{ padding: 28 }}>
        <Text
          style={{
            fontSize: 18,
            // color:'white'
          }}
        >
          Set the new password for your account so you can login and access all
          the features.
        </Text>
      </View>
      <View>
        <TextInput style={styles.TextInput} placeholder="Enter New Password" />
        <TextInput
          style={styles.TextInput}
          placeholder="Re-enter New Password"
        />
      </View>
      <View
        style={{
          backgroundColor: "grey",
          padding: 10,
          width: "80%",
          height: 50,
          alignSelf: "center",
          marginTop: 60,
        }}
      >
      <TouchableOpacity onPress={()=>navigation.navigate('Forget Password')}>
      <Text style={{ color: "white", textAlign: "center", marginTop: 5 }}>
      RESET PASSWORD
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
});
