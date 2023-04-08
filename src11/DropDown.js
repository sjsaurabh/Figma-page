import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

export default function DropDown() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View style={{ margin: 20 }}>
      <Text>SDFGHJKL</Text>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Sql" value="sql" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({});
