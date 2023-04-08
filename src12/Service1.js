import { React, useState } from "react";
import { View, ScrollView, TextInput, Modal, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';

import RadioGroup from 'react-native-radio-buttons-group';

const Service1 = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const [radioButtons, setRadioButtons] = useState([

        {
            id: "1",
            label: "10:30-12:00",
            value: "option1",
        },

        {
            id: "2",
            label: "10:30-12:00",
            value: "option2",
        },

        {
            id: "3",
            label: "10:30-12:00",
            value: "option3",
        },

    ]);
    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }

  
    return (
        <View>
            <Modal
                transparent={true}
                visible={modalVisible}>
                <View style={styles.done}>
                    <View style={styles.Modal}>
                        <View style={styles.done1}>
                            <View style={styles.center}>
                                <MaterialIcons name="done" size={50} color="#FFFFFF" />
                            </View>
                        </View>
                        <View style={styles.center}>
                            <Text style={styles.done2}>Done</Text>
                            <Text style={styles.done3}>your request has been submitted!</Text>
                            <Text style={styles.done4}>Service Request no:#F12014</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.Touch} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.Text}>Continue</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={{
                    backgroundColor: "#D3D3D3",
                    marginTop: 10,
                    marginLeft: 20,
                    marginRight: 20,
                    paddingLeft: 30,
                    height: 40,
                    flexDirection: 'row',
                }}>
                    <View style={styles.container}>
                        <TextInput
                            placeholder="Emergency?"
                        />
                    </View>
                    <View style={styles.container1}>
                        <Ionicons name="call" size={20} />
                    </View>
                    <View style={styles.container}>
                        <Text >54678</Text>
                    </View>
                </View>
                <View style={styles.container3}>
                    <Text style={{ fontSize: 15 }}>Service Type</Text>
                </View>
                <View style={styles.container2}>
                    <View style={styles.container}>
                        <TextInput
                            placeholder="Air-Conditioning failure"
                        />
                    </View>
                </View>
                <View style={styles.container3}>
                    <Text style={{ fontSize: 15 }}>Issue Description</Text>
                </View>
                <View style={styles.container2}>
                    <View style={styles.container}>
                        <TextInput
                            placeholder="Water Leak"
                        />
                    </View>
                </View>
                <View style={styles.container3}>
                    <Text style={{ fontSize: 15 }}>Precise Location</Text>
                </View>
                <View style={styles.container2}>
                    <View style={styles.container}>
                        <TextInput
                            placeholder="Select"
                        />
                    </View>
                </View>
                <View style={{
                    paddingLeft: 35,
                    paddingTop: 10, flexDirection: 'row'
                }}>
                    <Text>Prefred Date</Text>
                    
                </View>


                <View style={{ marginLeft: 30 }}>
                    <RadioGroup
                        radioButtons={radioButtons}
                        onPress={onPressRadioButton}
                        layout="row"
                    />
                </View>

                <View style={styles.container3}>
                    <Text style={{ fontSize: 15 }}>Title</Text>
                </View>
                <View style={styles.container2}>
                    <View style={styles.container}>
                        <TextInput
                            placeholder="Water Leak"
                        />
                    </View>
                </View>
                <View style={styles.container3}>
                    <Text style={{ fontSize: 15 }}>
                        Caller Name
                    </Text>
                </View>
                <View style={styles.container2}>
                    <View style={styles.container}>
                        <TextInput
                            placeholder="Water Leak"
                        />
                    </View>
                </View>
                <View style={styles.container3}>
                    <Text style={{ fontSize: 15 }}>
                        Caller Mobile Number
                    </Text>
                </View>
                <View style={styles.container2}>
                    <View style={styles.container}>
                        <TextInput
                            placeholder="Water Leak"
                        />
                    </View>
                </View>
                <View style={styles.container3}>
                    <Text style={{ fontSize: 15 }}>
                        Description
                    </Text>
                </View>
                <View style={styles.container5}>
                    <View style={styles.container}>
                        <TextInput
                            placeholder=""
                        />
                    </View>
                </View>
                <View style={styles.container3}>
                    <Text>Attach Images/Video(Optional)</Text>
                </View>
                <View style={styles.container6}>
                    <TouchableOpacity
                        style={styles.container7}>
                        <Text>Attach Image/Video</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container6}>
                    <TouchableOpacity style={{
                        alignItems: "center", justifyContent: "center", padding: 10, backgroundColor: 'black', height: 50
                        , flexDirection: 'row'
                    }} onPress={() => setModalVisible(true)}>
                        <Ionicons name="chevron-forward-outline" color={'green'} size={20} style={{ marginRight: 20 }} />
                        <Text style={{ color: 'white' }}>Submit</Text>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: 'center',
        paddingRight: 170,
    },
    container1: {
        alignItems: "center",
        justifyContent: 'center',
        paddingRight: 10
    },
    container2: {
        marginLeft: 35,
        marginRight: 20,
        paddingLeft: 20,
        height: 40,
        flexDirection: 'row',
        borderWidth: 1,
        marginTop: 10
    },
    container3: {
        paddingLeft: 35,
        paddingTop: 10
    },
    container4: {
        paddingHorizontal: 40
    },
    container5: {
        marginLeft: 35,
        marginRight: 20,
        paddingLeft: 20,
        height: 100,
        flexDirection: 'row',
        borderWidth: 1,
        marginTop: 10
    },
    container6: {
        marginLeft: 35,
        marginRight: 20,
        marginTop: 30
    },
    container7: {
        alignItems: 'center',
        backgroundColor: 'pink',
        padding: 10
    },
    container8:
    {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: 'black',
        height: 50,
        flexDirection: 'row'
    },
    done: {
        backgroundColor: '#000000aa',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    done1: {
        width: 65,
        height: 65,
        backgroundColor: '#70BF42',
        borderRadius: 35,
        marginLeft: 123,
        marginRight: 123,
        marginTop: 45
    },
    center: {
        alignItems: "center",
        justifyContent: "center"
    },
    done2: {
        fontSize: 28,
        fontWeight: '700',
        color: '#000000',
        paddingTop: 26
    },
    done3: {
        fontSize: 14,
        fontWeight: '400',
        color: '#000000',
        paddingTop: 10
    },
    done4: {
        fontSize: 14,
        fontWeight: '400',
        color: '#000000',
        paddingTop: 10
    },
    Touch: {
        borderWidth: 1,
        borderColor: '#F5F5F7',
        backgroundColor: '#4D4A4D',
        alignItems: 'center',
        justifyContent: 'center',
        height: 53,
        marginTop: 25,
        marginLeft: 30,
        marginRight: 30,
        width: 250
    },
    Text: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    Modal: {
        width: 311,
        height: 332,
        marginTop: 70,
        marginLeft: 50,
        marginRight: 50,
        backgroundColor: '#FFFFFF'
    }
});
export default Service1;
