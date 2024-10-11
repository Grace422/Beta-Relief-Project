import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons'
import Navbar from '../components/Navbar';
import { Dimensions } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';




const DonorDetailsOne = () => {
    const navigation = useNavigation();

    const option = [
        { label: 'Yaounde', value: 'Cameroon' },
        { label: 'Douala', value: 'Cameroon' },
    ];
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSelect = (index, value) => {
        if (index >= 0 && index < options.length) {
            setSelectedValue(value);
        }
    };
    const [email, setEmail] = useState('');

    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={styles.scrollView}>

                <View style={styles.icons}>
                    <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate('Donate')}>
                        <MaterialIcons name='keyboard-arrow-left' size={24} />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 20, fontWeight: 500, fontSize: 18 }}>Helep Person</Text>
                </View>

                <Text style={{ fontSize: 18, fontWeight: 600, marginLeft: 30, marginTop: 20, marginBottom: 10 }}>Donor Details</Text>
                
                <View style={styles.inputField}>
                    <Text style={styles.inputLabel}>Donor Name</Text>
                    <Text style={{ position: 'absolute', left: 140, color: 'red' }}>*</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your company title"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.inputField}>
                    <Text style={styles.inputLabel}>Location</Text>
                    <Text style={{ position: 'absolute', left: 110, color: 'red' }}>*</Text>
                    <RNPickerSelect
                        onValueChange={(value) => setSelectedValue(value)}
                        items={option}
                        placeholder={{ value: null, label: 'Location', color: '#D9D9D9' }}
                        style={{
                            iconContainer: styles.iconContainer,
                            inputIOS: styles.input,
                            inputAndroid: styles.input,
                        }}
                        useNativeAndroidPickerStyle={false}
                        Icon={() => {
                            return <MaterialIcons name="keyboard-arrow-down" size={24} style={{ position: 'absolute', color: '#D9D9D9', bottom: -34, right: 45, color: '#1A8FE3' }} />;
                        }}
                    />
                </View>

                <View style={styles.inputField}>
                    <Text style={styles.inputLabel}>Donation Amount</Text>
                    <Text style={{ position: 'absolute', left: 170, color: 'red' }}>*</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Category"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Foundation name="dollar" size={24} style={styles.icon1} />
                </View>

                <View style={styles.inputField}>
                    <Text style={styles.inputLabel}>Story/Explanation</Text>
                    <TextInput
                        style={styles.story}
                        placeholder="Tell us about the story of a campaign"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.inputField}>
                    <Text style={styles.inputLabel}>Phone Number</Text>
                    <Text style={{ position: 'absolute', left: 150, color: 'red' }}>*</Text>
                    <TextInput
                        style={[styles.input, styles.inputError]}
                        placeholder="Name of Funraiser"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <TouchableOpacity 
                    style={{ backgroundColor: '#1A8FE3', padding: 10, borderRadius: 50, marginLeft: 60, marginRight: 60, marginTop: 50 }}
                    onPress={() => navigation.navigate('Payment')}>
                    <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold' }}>Donate</Text>
                </TouchableOpacity>
            </ScrollView>


            <Navbar HelepPerson={true}/>
        </View>

    );
}
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: width,
        height: height,
        flex: 1
    },
    scrollView: {
        paddingBottom: '60%',
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
    inputField: {
        marginBottom: 20,
    },
    inputLabel: {
        color: '#353535',
        fontSize: 15,
        marginLeft: 40,
        marginBottom: 5,
        paddingHorizontal: 5,
    },
    input: {
        height: 45,
        fontSize: 15,
        color: '#353535',
        borderColor: '#9CA3AF',
        opacity: 0.75,
        borderWidth: 1,
        padding: 12,
        borderRadius: 50,
        marginLeft: 25,
        marginRight: 25,
    },
    story: {
        height: 100,
        padding: 10,
        borderColor: '#9CA3AF',
        borderWidth: 1,
        textAlignVertical: 'top',
        borderRadius: 20,
        marginLeft: 25,
        marginRight: 25,
    },
    icon1: {
        color: '#000000',
        right: 45,
        top: 35,
        color: '#1A8FE3',
        position: 'absolute',
    }
});

export default DonorDetailsOne;