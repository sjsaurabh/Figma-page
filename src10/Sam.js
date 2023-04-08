import { StatusBar, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";
export default function Sam({navigation}) {
  return (
    <ScrollView style={{ marginTop: StatusBar.currentHeight }}>
      <View
        style={{
          backgroundColor: "grey",
          width: "100%",
          height: 120,
          padding: 20,
        }}
      >
        
        <View
          style={{ flexDirection: "row", alignItems: "center", marginLeft: 5 }}
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
      <TouchableOpacity onPress={()=>navigation.navigate('Change password')}>
      <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 25,
        elevation: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 15,
          elevation: 10,
        }}
      >
        <Ionicons
          name="chatbubble-outline"
          size={45}
          style={{ backgroundColor: "grey" }}
          color="black"
        />
        <Text style={{ marginLeft: 10, fontSize: 20 }}>Change Password</Text>
      </View>
      <View style={{ marginTop: 15 }}>
        <Ionicons name="chevron-forward" size={45} style={{}} color="black" />
      </View>
    </View>
      </TouchableOpacity>

      <View style={{ borderWidth: 0.2, marginVertical: 10 }}></View>
      <View style={{}}></View>
      <TouchableOpacity onPress={()=>navigation.navigate('Maintance')}>
      <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 25,
        elevation: 10,
      }}
      >
      <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
        elevation: 10,
      }}
      >
      <Ionicons
      name="key"
      size={45}
      style={{ backgroundColor: "grey" }}
      color="black"
      />
      <Text style={{ marginLeft: 10, fontSize: 20 }}>My Requests </Text>
      </View>
      <View style={{ marginTop: 15 }}>
      <Ionicons name="chevron-forward" size={45} style={{}} color="black" />
      </View>
      </View>
      </TouchableOpacity>
    <View></View>
    <View style={{ borderWidth: 0.2, marginVertical: 10 }}></View>
    <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginHorizontal: 25,
      elevation: 10,
    }}
  >
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
        elevation: 10,
      }}
    >
      <Ionicons
        name="chatbubble-ellipses-outline"
        size={45}
        style={{ backgroundColor: "grey" }}
        color="black"
      />
      <Text style={{ marginLeft: 10, fontSize: 20 }}>Chat WIth Us</Text>
    </View>
    <View style={{ marginTop: 15 }}>
      <Ionicons name="chevron-forward" size={45} style={{}} color="black" />
    </View>
  </View>
  <View style={{ borderWidth: 0.2, marginVertical: 10 }}></View>
  <View
  style={{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 25,
    elevation: 10,
  }}
>
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      marginTop: 15,
      elevation: 10,
    }}
  >
    <Ionicons
      name="document-outline"
      size={45}
      style={{ backgroundColor: "grey" }}
      color="black"
    />
    <Text style={{ marginLeft: 10, fontSize: 20 }}>My Document</Text>
  </View>
  <View style={{ marginTop: 15 }}>
    <Ionicons name="chevron-forward" size={45} style={{}} color="black" />
  </View>
</View>
<View style={{ borderWidth: 0.2, marginVertical: 10 }}></View>
<View
style={{
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginHorizontal: 25,
  elevation: 10,
}}
>
<View
  style={{
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    elevation: 10,
  }}
>
  <AntDesign
    name="questioncircleo"
    size={45}
    style={{ backgroundColor: "grey" }}
    color="black"
  />
  <Text style={{ marginLeft: 10, fontSize: 20 }}>My Requests</Text>
</View>
<View style={{ marginTop: 15 }}>
  <Ionicons name="chevron-forward" size={45} style={{}} color="black" />
</View>
</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
