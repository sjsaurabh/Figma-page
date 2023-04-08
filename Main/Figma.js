import React from "react";

import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Figma= ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          style={{ height: 150, width: 210 }}
          source={{ uri: "https://www.khidmah.com/images/og-image.jpg" }}
        />
      </View>
      <View style={{ marginHorizontal: 30 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
           PLEASE CONTACT KHIDMAH TEAM 
          {"\n"}
        </Text>
        
        <Text style={{ marginTop: 20 }}>
          Enter your Details 
        </Text>
       
      </View>
      <View>
        <TextInput
          style={{
            height: 40,

            marginLeft: 30,

            marginRight: 30,

            marginTop: 20,

            borderWidth: 1,

            paddingLeft: 15,
          }}
          placeholder="First Name"
        />
        
        <TextInput
          style={{
            height: 40,

            marginLeft: 30,

            marginRight: 30,

            marginTop: 15,

            borderWidth: 1,

            paddingLeft: 15,
          }}
          placeholder="Last Name"
        />
       
        <TextInput
          style={{
            height: 40,

            marginLeft: 30,

            marginRight: 30,

            marginTop: 15,

            borderWidth: 1,

            paddingLeft: 15,
          }}
          placeholder="Mobile No"
        />
       
        <TextInput
          style={{
            height: 40,

            marginLeft: 30,

            marginRight: 30,

            marginTop: 15,

            borderWidth: 1,

            paddingLeft: 15,
          }}
          placeholder="Email"
        />
      </View>
      <View style={{ paddingTop: 20, marginLeft: 30, marginRight: 30 }}>
        <TouchableOpacity
          style={{
            alignItems: "center",

            backgroundColor: "pink",

            padding: 10,
          }}
        >
           <Text>Attach Tenacy Contract</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 20, marginLeft: 30, marginRight: 30 }}>
        
        <TouchableOpacity
          style={{
            alignItems: "center",

            backgroundColor: "black",

            padding: 15,
          }}
          onPress={() => navigation.navigate("Back")}
        >
          <Text style={{ color: "white", fontSize: 15 }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Figma;
