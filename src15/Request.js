import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function Request({navigation}) {
  return (
    <ScrollView style={{}}>
      <View style={{ backgroundColor: "grey", width: "100%", height: 125 }}>
        <Text style={{ color: "white", marginTop: 90, marginLeft: 20 }}>
          Maintance
        </Text>
      </View>
      <View>
        <Text style={{ marginVertical: 20, fontSize: 20, marginLeft: 20 }}>
          New Maintance Requests
        </Text>
      </View>
      <View></View>

      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View>
         <TouchableOpacity onPress={()=>navigation.navigate('Service')}>
         <Text>Service Request</Text>
         </TouchableOpacity>
          <View
            style={{
              borderColor: "black",
              borderWidth: 1,
              width: "30%",
              marginLeft: 30,
              marginTop: 10,
            }}
          ></View>
        </View>
        <Text style={{ color: "#000000aa" }}>Common Area Requests</Text>
      </View>
      <View
        style={{
          borderRadius: 1,
          width: "90%",
          height: 230,
          borderWidth: 1,
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          <Image
            style={{
              width: 80,
              height: 80,
              backgroundColor: "steelblue",
              borderRadius: 40,
              borderWidth: 1,
            }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1530/1530297.png",
            }}
          />
          <Image
            style={{
              width: 80,
              height: 80,
              backgroundColor: "steelblue",
              borderRadius: 40,
              borderWidth: 1,
            }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/385/385989.png",
            }}
          />
          <Image
            style={{
              width: 80,
              height: 80,
              backgroundColor: "steelblue",
              borderRadius: 40,
              borderWidth: 1,
            }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/9602/9602773.png",
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingRight: 145,
            marginTop: 20,
          }}
        >
          <View style={{ marginLeft: 20 }}>
            <Image
              style={{
                width: 80,
                height: 80,
                backgroundColor: "steelblue",
                borderRadius: 40,
                borderWidth: 1,
              }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2855/2855899.png",
              }}
            />
          </View>
          <View style={{ marginLeft: 50 }}>
            <Image
              style={{
                width: 80,
                height: 80,
                backgroundColor: "steelblue",
                borderRadius: 40,
                borderWidth: 1,
              }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/1554/1554168.png",
              }}
            />
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <View style={{ marginLeft: 25 }}>
          <Text>Open Request</Text>
          <View
            style={{
              borderColor: "black",
              borderWidth: 1,
              width: "30%",
              marginLeft: 30,
              marginTop: 10,
            }}
          ></View>
        </View>
        <View style={{ marginLeft: 35 }}>
          <Text style={{ color: "#000000aa" }}>Resolve Requests</Text>
        </View>
      </View>
      <View
        style={{
          borderRadius: 1,
          width: "90%",
          height: 160,
          alignSelf: "center",
          marginTop: 20,
          borderTopWidth:1,
          borderRightWidth:1,
          borderLeftWidth:1,
        }}
      >
        <View style={{ flexDirection: "row", margin: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{backgroundColor:"#B48409"}}>In Progress</Text>
            <Text style={{ marginLeft: 10 ,backgroundColor:"#707070"}}>Ticket No.CBI</Text>
          </View>
          <View>
            <Text style={{ marginLeft: 75 }}>16-08-2022</Text>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 20, marginLeft: 15 }}>
            Water Leakage Issue
          </Text>
          <Text style={{ marginLeft: 15 }}>Tap seems to be jammers</Text>
        </View>
      </View>
      <View
        style={{
          width: "90%",
          height: 50,
          alignSelf: "center",
          backgroundColor: "#F4F6F9",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal:10,
          borderBottomWidth:1,
          borderRightWidth:1,
          borderLeftWidth:1,
        }}
      >
        <Text style={{}}>A 052</Text>
        <Text>View Details</Text>
      </View>
      
      <View
        style={{
          borderRadius: 1,
          width: "90%",
          height: 160,
          alignSelf: "center",
          marginTop: 20,
          borderTopWidth:1,
          borderRightWidth:1,
          borderLeftWidth:1,
        }}
      >
        <View style={{ flexDirection: "row", margin: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{backgroundColor:"#B48409"}}>In Progress</Text>
            <Text style={{ marginLeft: 10 ,backgroundColor:"#707070"}}>Ticket No.CBI</Text>
          </View>
          <View>
            <Text style={{ marginLeft: 75 }}>16-08-2022</Text>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 20, marginLeft: 15 }}>
            Water Leakage Issue
          </Text>
          <Text style={{ marginLeft: 15 }}>Tap seems to be jammers</Text>
        </View>
      </View>
      <View
        style={{
          width: "90%",
          height: 50,
          alignSelf: "center",
          backgroundColor: "#F4F6F9",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal:10,
          borderBottomWidth:1,
          borderRightWidth:1,
          borderLeftWidth:1,
        }}
      >
        <Text style={{}}>A 052</Text>
        <Text>View Details</Text>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
