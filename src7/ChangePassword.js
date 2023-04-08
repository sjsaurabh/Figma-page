import * as React from "react";

import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

const ChangePassword = () => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container3}>
        <Text style={{ fontSize: 15 ,marginLeft:35}}>Old Password</Text>
      </View>

      <View style={styles.container2}>
        <View style={styles.container}>
          <TextInput placeholder="Enter" />
        </View>
      </View>

      <View style={styles.container3}>
        <Text style={{ fontSize: 15 ,marginLeft:35 }}>New Password</Text>
      </View>

      <View style={styles.container2}>
        <View style={styles.container}>
          <TextInput placeholder="Enter" />
        </View>
      </View>

      <View style={styles.container3}>
        <Text style={{ fontSize: 15 ,marginLeft:35}}>Confirm Password</Text>
      </View>

      <View style={styles.container2}>
        <View style={styles.container}>
          <TextInput placeholder="Enter" />
        </View>
      </View>

      <View style={styles.container6}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            backgroundColor: "black",
            height: 50,
            flexDirection: "row",
          }}
        >
          <Ionicons
            name="chevron-forward-outline"
            color={"green"}
            size={20}
            style={{ marginRight: 20 }}
          />

          <Text style={{ color: "white" }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",

    justifyContent: "center",

    paddingRight: 170,
  },

  container2: {
    marginLeft: 35,

    marginRight: 20,

    paddingLeft: 20,

    height: 40,

    flexDirection: "row",

    borderWidth: 1,

    marginTop: 10,
  },

  container3: {
    paddingTop: 20,
  },

  container6: {
    marginLeft: 35,

    marginRight: 20,

    marginTop: 30,
  },
});

export default ChangePassword;
