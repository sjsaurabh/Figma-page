// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// export default function RadioButton() {
//   return (
//     <View>
//       <Text>RadioButton</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})

import React, { useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

export default function App() {

    const [radioButtons, setRadioButtons] = useState([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Option 1',
            value: 'option1'
        },
        {
            id: '2',
            label: 'Option 2',
            value: 'option2'
        },
        {
            id: '3',
            label: 'Option 3',
            value: 'option 3'
        }
    ]);

    function onPressRadioButton(rba) {
        setRadioButtons(rba);
    }

    return (
        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={onPressRadioButton} 
        />
    );

}