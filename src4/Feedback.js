import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function Feedback() {
  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
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
            padding: 10,
          }}
        >
          <View style={{ marginLeft: 25 }}>
            <Text style={{ color: "white" }}>9:44 AM</Text>
          </View>
          <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
            <View>
              <FontAwesome5 name="signal" size={15} color="black" />
            </View>
            <Text> </Text>
            <View>
              <Entypo name="signal" size={15} color="black" />
            </View>
            <Text> </Text>
            <View>
              <FontAwesome5 name="battery-half" size={15} color="black" />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 19,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
              justifyContent: "center",
            }}
          >
            <AntDesign name="arrowleft" size={26} color="white" />
            <Text style={{ color: "white", marginLeft: 5, fontSize: 15 }}>
              Maintenance Request
            </Text>
          </View>
          <View>
          
          </View>
        </View>
      </View>
      <View></View>
      <Text></Text>
      <View style={{ marginLeft: 25 }}>
        <Text style={{ color: "black", fontWeight: "600" }}>
          How satisfied you with our service
        </Text>
      </View>
      <View></View>
      <Text></Text>

      <View
        style={{
          backgroundColor: "grey",
          width: "90%",
          height: 100,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
          justifyContent: "space-evenly",
          borderWidth: 2,
          alignSelf: "center",
        }}
      >
        <Entypo name="emoji-happy" size={56} color="black" />
        <Entypo name="emoji-neutral" size={56} color="white" />
        <Entypo name="emoji-sad" size={26 + 30} color="white" />
      </View>

      <View></View>
      <Text></Text>

      <View>
        <Text style={{ marginLeft: 20 }}>Comments(if any</Text>
      </View>
      <View></View>
      <Text></Text>

      <View
        style={{
          width: "90%",
          height: 150,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
          justifyContent: "space-evenly",
          borderWidth: 1,
          alignSelf: "center",
        }}
      ></View>
      <View></View>
      <Text></Text>
      <View
        style={{
          width: "90%",
          height: 40,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 220,
          justifyContent: "center",
          borderWidth: 1,
          alignSelf: "center",
          backgroundColor: "grey",
        }}
      >
        <Ionicons name="chevron-forward" size={26} color="green" />
        <Text> Submit</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
