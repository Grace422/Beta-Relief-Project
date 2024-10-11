import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons'
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';



const EditProfile = () => {
    const navigation = useNavigation();
    const options = [
        { label: 'Douala', value: 'Cameroon' },
        { label: 'Yaounde', value: 'Cameroon' },
        { label: 'Buea', value: 'Cameroon' },
        { label: 'Bamenda', value: 'Cameroon' },
        { label: 'South', value: 'Cameroon' },
    ];
    const option = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
    ];
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSelect = (index, value) => {
        if (index >= 0 && index < options.length) {
            setSelectedValue(value);
        }
    };
    return (
        <View styles={styles.container}>
            <View style={styles.icons}>
                <TouchableOpacity style={styles.circle} onPress={()=> navigation.navigate('Settings')}>
                    <MaterialIcons name='keyboard-arrow-left' size={24} />
                </TouchableOpacity>
                <Text style={{ marginLeft: 20, fontWeight: 500, fontSize: 18 }}>Edit Profile</Text>
            </View>

            <View style={{ marginTop: 20, marginLeft: 30 }}>
                <View>
                    <View style={styles.circle1}>
                        <FontAwesome6 name='user' size={34} style={{ color: 'black', }} />
                    </View>
                </View>
            </View>
            <TextInput
                style={styles.input}
                placeholder='Full name'
            />
            <TextInput
                style={styles.input}
                placeholder='Email'
            />
            <MaterialCommunityIcons name='email-box' size={24} style={{ position: 'absolute', color: '#D9D9D9', bottom: 360, right: 60 }} />
            <TextInput
                style={styles.input}
                placeholder='Phone Number'
            />
            <RNPickerSelect
                onValueChange={(value) => setSelectedValue(value)}
                items={options}
                placeholder={{ value: null, label: 'Location/Address', color: '#D9D9D9' }}
                style={{
                    iconContainer: styles.iconContainer,
                    inputIOS: styles.input,
                    inputAndroid: styles.input,
                }}
                useNativeAndroidPickerStyle={false}
                Icon={() => {
                    return <MaterialIcons name="keyboard-arrow-down" size={24} style={{ position: 'absolute', color: '#D9D9D9', bottom: -50, right: 60 }} />;
                }}
            />
            <TextInput
                style={styles.input}
                placeholder='ID Card Number'
            />
            <RNPickerSelect
                onValueChange={(value) => setSelectedValue(value)}
                items={option}
                placeholder={{ value: null, label: 'Gender', color: '#D9D9D9' }}
                style={{
                    iconContainer: styles.iconContainer,
                    inputIOS: styles.input,
                    inputAndroid: styles.input,
                }}
                useNativeAndroidPickerStyle={false}
                Icon={() => {
                    return <MaterialIcons name="keyboard-arrow-down" size={24} style={{ position: 'absolute', color: '#D9D9D9', bottom: -53, right: 60 }} />;
                }}
            />

            <TouchableOpacity style={{ backgroundColor: '#0071CE', borderRadius: 50, padding: 15, marginTop: 35, marginLeft: 50, marginRight: 50 }}>
                <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 600, fontSize: 18 }}>Verify Account</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    icons: {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 50,
    },
    circle: {
        borderRadius: 10,
        backgroundColor: '#D9D9D9',
        marginLeft: 10
    },
    circle1: {
        borderRadius: 50,
        backgroundColor: '#D9D9D9',
        marginLeft: '35%',
        padding: 30,
        width: 90
    },
    circles: {
        borderRadius: 50,
        backgroundColor: 'rgba(26, 143, 227, 0.15)',
        marginRight: 20,
        padding: 10,
    },
    input: {
        borderWidth: 1,
        borderRadius: 50,
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 15,
        borderColor: '#D9D9D9'
    },
})

export default EditProfile;