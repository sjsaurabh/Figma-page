import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Button,
  Modal,
} from "react-native";
import React from "react";

export default function MyUi() {
  return (
    <ScrollView style={{flex:1, marginTop: StatusBar.currentHeight }}>
      <Modal
      transparent={true}
      >
        <View style={{justifyContent:"center",alignItems:"center",marginTop:400}}>
          <View>
            <Text>Hello Code  Dev</Text>
          </View>
        </View>
      </Modal>

      <View style={{flex:1,
     justifyContent:'flex-end'
    }}>
        <Button title="open Modal" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
