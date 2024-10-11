import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons'
import { FontAwesome6 } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import Navbar from '../components/Navbar';
import { Dimensions } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';




const AskHelp = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const option = [
        { label: 'Yaounde', value: 'Cameroon' },
        { label: 'Douala', value: 'Cameroon' },
    ];
    const options = [
        { label: 'Public', value: 'Public' },
        { label: 'Private', value: 'Private' },
    ];
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSelect = (index, value) => {
        if (index >= 0 && index < options.length) {
            setSelectedValue(value);
        }
    };

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                style={styles.contain}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} // Adjust if needed
            >
                <ScrollView style={styles.body} contentContainerStyle={styles.scrollView}>

                    <View style={styles.icons}>
                        <View style={styles.circle}>
                            <MaterialIcons name='keyboard-arrow-left' size={24} />
                        </View>
                        <Text style={{ marginLeft: 20, fontWeight: 500, fontSize: 18 }}>Ask Help</Text>
                    </View>
                    <Text style={{ fontSize: 18, fontWeight: 400, marginLeft: 20, marginTop: 20, marginBottom: 10 }}>Helep Request Details</Text>
                    <View style={styles.inputField}>
                        <Text style={styles.inputLabel}>Title</Text>
                        <Text style={{ position: 'absolute', left: 80, color: 'red' }}>*</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your company title"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.inputField}>
                        <Text style={styles.inputLabel}>Category</Text>
                        <Text style={{ position: 'absolute', left: 110, color: 'red' }}>*</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Category"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <MaterialIcons name="keyboard-arrow-down" size={24} style={styles.icon1} />
                    </View>
                    <View style={styles.inputField}>
                        <Text style={styles.inputLabel}>Total Fund Required</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="0"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <Foundation name="dollar" size={24} style={styles.icon1} />
                    </View>
                    <View style={styles.inputField}>
                        <Text style={styles.inputLabel}>Donation Expired Date</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Donation Expired Date"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <FontAwesome6 name="calendar" size={24} style={styles.icon1} />
                    </View>
                    <View style={styles.inputField}>
                        <Text style={styles.inputLabel}>Story</Text>
                        <TextInput
                            style={styles.story}
                            placeholder="Tell us about the story of a campaign"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <Text style={{ marginLeft: 20, fontWeight: 600, margin: 10 }}>Donation Recipient Details</Text>
                    <View style={styles.inputField}>
                        <Text style={styles.inputLabel}>Name of Fundraiser(People/Organisation)</Text>
                        <Text style={{ position: 'absolute', left: 330, color: 'red' }}>*</Text>
                        <TextInput
                            style={[styles.input, styles.inputError]}
                            placeholder="Name of Funraiser"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.inputField}>
                        <Text style={styles.inputLabel}>Name of Patient(People/Organisation)</Text>
                        <Text style={{ position: 'absolute', left: 310, color: 'red' }}>*</Text>
                        <TextInput
                            style={[styles.input, styles.inputError]}
                            placeholder="Name of Patient"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.inputField}>
                        <Text style={styles.inputLabel}>Phone Number</Text>
                        <Text style={{ position: 'absolute', left: 150, color: 'red' }}>*</Text>
                        <TextInput
                            style={[styles.input, styles.inputError]}
                            placeholder="Phone Number"
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
                                return <MaterialIcons name="keyboard-arrow-down" size={24} style={{ position: 'absolute', color: '#D9D9D9', bottom: -38, right: 50 }} />;
                            }}
                        />
                    </View>

                    <View style={{borderWidth: 1, padding: 70, margin: 10, borderStyle: 'dotted', borderRadius: 8, marginLeft: 25, marginRight: 25, backgroundColor: 'rgba(26, 143, 227, 0.3)'}}>
                        <Text style={{alignSelf: 'center'}}>Add Photo</Text>
                        <AntDesign name='plus' style={{position: 'absolute', top: 50, left: 150}}/>
                    </View>

                    <View style={styles.inputField}>
                        <Text style={styles.inputLabel}>Post Type</Text>
                        <Text style={{ position: 'absolute', left: 120, color: 'red' }}>*</Text>
                        <RNPickerSelect
                            onValueChange={(value) => setSelectedValue(value)}
                            items={options}
                            placeholder={{ value: null, label: 'Is the post public or private', color: '#D9D9D9' }}
                            style={{
                                iconContainer: styles.iconContainer,
                                inputIOS: styles.input,
                                inputAndroid: styles.input,
                            }}
                            useNativeAndroidPickerStyle={false}
                            Icon={() => {
                                return <MaterialIcons name="keyboard-arrow-down" size={24} style={{ position: 'absolute', color: '#D9D9D9', bottom: -38, right: 50 }} />;
                            }}
                        />
                    </View>

                    <View style={{backgroundColor: '#1A8FE3', padding: 10, borderRadius: 50, marginLeft: 60, marginRight: 60, marginTop: 30}}>
                        <Text style={{color: 'white', alignSelf: 'center', fontWeight: 'bold'}}>Publish</Text>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>


            <Navbar SeekHelp={true} />
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
    body: {
        maxHeight: '100%',
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
    },
    scrollView: {
        paddingBottom: '30%'
    },
});

export default AskHelp;