import { View, Text, StatusBar, Image } from "react-native";
import React from "react";

const DashBoard = () => {
  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
      <View
        style={{
          width: "100%",
          height: 135,
          backgroundColor: "#7f8c8d",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding:10
          }}
        >
          <View >
            <Text>12:05 AM</Text>
          </View>
          <View style={{ flexDirection: "row", }}>
            <Image
              style={{ width: 30, height: 30 }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/4630/4630358.png",
              }}
            />
            <Image
              style={{ width: 30, height: 30 }}
              source={{
                uri: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/1x/external-wifi-wayfinding-flaticons-lineal-color-flat-icons.png",
              }}
            />
            <Image
              style={{ width: 30, height: 30 }}
              source={{
                uri: "https://img.icons8.com/windows/1x/full-battery.png",
              }}
            />
          </View>
        </View>
        <View>
          <Text style={{ color: "white", marginTop: 50, marginLeft: 10 }}>
            Maintenance
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text>Service Requests</Text>
        <Text>Common Area Request</Text>
      </View>

      <View style={{ width: "100%", borderWidth: 1, marginTop: 20 }}></View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 20,
        }}
      >
        <Text>Resolved Request</Text>
        <Text style={{ color: "#b2bec3" }}>Resolved Request</Text>
        <Text> Filter</Text>
      </View>
      <View></View>
      <Text></Text>
      <View
        style={{
          width: "90%",
          height: 130,
          borderTopWidth: 1,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          alignSelf: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 18,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: "30%",
                height: 30,
                backgroundColor: "#daa520",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>In Progress</Text>
            </View>
            <View
              style={{
                width: "36%",
                height: 30,
                backgroundColor: "skyblue",
                margin: 15,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 15,
              }}
            >
              <Text>Ticket No: CBI</Text>
            </View>
          </View>
          <View style={{}}>
            <Text>16-08-2022</Text>
          </View>
        </View>
        <View style={{ marginLeft: 7 }}>
          <Text style={{ fontSize: 20 }}>Water Leakage Issue</Text>
        </View>
        <View style={{ marginLeft: 7 }}>
          <Text style={{}}>Tap seems to be jammed</Text>
        </View>
      </View>
      <View
        style={{
          width: "90%",
          height: 42,

          borderLeftWidth: 1,
          borderRightWidth: 1,
          alignSelf: "center",
          backgroundColor: "grey",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
            paddingHorizontal: 10,
          }}
        >
          <Text>A 052</Text>
          <Text>View Details</Text>
        </View>
      </View>
      <View></View>
      <Text></Text>
      <View
      style={{
        width: "90%",
        height: 130,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        alignSelf: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 18,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: "30%",
              height: 30,
              backgroundColor: "#daa520",
              margin: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>In Progress</Text>
          </View>
          <View
            style={{
              width: "36%",
              height: 30,
              backgroundColor: "skyblue",
              margin: 15,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 15,
            }}
          >
            <Text>Ticket No: CBI</Text>
          </View>
        </View>
        <View style={{}}>
          <Text>16-08-2022</Text>
        </View>
      </View>
      <View style={{ marginLeft: 7 }}>
        <Text style={{ fontSize: 20 }}>Water Leakage Issue</Text>
      </View>
      <View style={{ marginLeft: 7 }}>
        <Text style={{}}>Tap seems to be jammed</Text>
      </View>
    </View>
    <View
      style={{
        width: "90%",
        height: 42,

        borderLeftWidth: 1,
        borderRightWidth: 1,
        alignSelf: "center",
        backgroundColor: "grey",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 10,
          paddingHorizontal: 10,
        }}
      >
        <Text>A 052</Text>
        <Text>View Details</Text>
      </View>
    </View>
    </View>
  );
};

export default DashBoard;
