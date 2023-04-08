import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function DashBoard() {
  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
      <Text style={{ marginLeft: 30 }}>9:41</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ fontSize: 25 }}>KHIDMAH</Text>

        <View style={{ flexDirection: "row" }}>
        <Ionicons name="notifications" size={24} color="black" />
        <MaterialIcons name="quick-contacts-mail" size={24} color="black" />
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: 280,
          backgroundColor: "red",
        }}
      >
        <Text style={{ color: "grey", paddingHorizontal: 17 }}>Hi</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 5,
          }}
        >
          <View>
            <Text
              style={{ color: "white", paddingHorizontal: 10, fontSize: 22 }}
            >
              Muhhmaed
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "white", paddingHorizontal: 10 }}>
              Unit 102
            </Text>
            <Entypo name="chevron-down" size={24} color="black" />
          </View>
        </View>
        <View style={{ margin: 15, marginLeft: 11 }}>
          <Text style={{ color: "white" }}> Requests Overview</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingHorizontal: 30,
          }}
        >
          <View
            style={{
              width: 125,
              height: 70,
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 5,
            }}
          >
            <View
              style={{
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 30 }}>03</Text>
              <Text style={{ color: "white" }}>OpenIssues </Text>
            </View>
          </View>
          <View></View>
          <View
            style={{
              width: 125,
              height: 70,
              borderColor: "#FFA500",
              borderWidth: 1,
              borderRadius: 5,
            }}
          >
            <View
              style={{
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#FFA500", fontSize: 30 }}>03</Text>
              <Text style={{ color: "white" }}>Inprogress</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              paddingHorizontal: 30,
            }}
          >
            <View
              style={{
                width: 125,
                height: 70,
                borderColor: "green",
                borderWidth: 1,
                borderRadius: 5,
              }}
            >
              <View
                style={{
                  alignSelf: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "green", fontSize: 30 }}>22</Text>
                <Text style={{ color: "white" }}>Closed </Text>
              </View>
            </View>
            <View></View>
            <View
              style={{
                width: 125,
                height: 70,
                borderColor: "skyblue",
                borderWidth: 1,
                borderRadius: 5,
              }}
            >
              <View
                style={{
                  alignSelf: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "skyblue", fontSize: 30 }}>03</Text>
                <Text style={{ color: "white" }}>Cancel </Text>
              </View>
            </View>
          </View>
        </View>
        <View></View>
      </View>

      <View></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 25,
        }}
      >
        <View>
          <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
            Recent Requests
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>See all </Text>
          <Ionicons name="chevron-forward-outline" size={18} color="black" />
        </View>
      </View>
      <></>
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
        <></>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
