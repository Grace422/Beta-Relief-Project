import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import Navbar from '../components/Navbar';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';




const PostEvent = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const options = [
        { label: 'Douala', value: 'Cameroon' },
        { label: 'Yaounde', value: 'Cameroon' },
        { label: 'Buea', value: 'Cameroon' },
        { label: 'Bamenda', value: 'Cameroon' },
        { label: 'South', value: 'Cameroon' },
    ];
    const handlePress = () => {
        console.log(`Road State update !!!`);
    };
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSelect = (index, value) => {
        if (index >= 0 && index < options.length) {
            setSelectedValue(value);
        }
    };

    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={styles.scrollView}>

                <View style={styles.icons}>
                    <View style={styles.circle}>
                        <MaterialIcons name='keyboard-arrow-left' size={24} />
                    </View>
                    <Text style={{ marginLeft: 20, fontWeight: 500, fontSize: 18 }}>Post Event</Text>
                </View>
                <Text style={{ fontSize: 18, fontWeight: 600, marginLeft: 30, marginTop: 20, marginBottom: 10 }}>Event Details</Text>
                <View style={styles.inputField}>
                    <Text style={styles.inputLabel}>Event Title</Text>
                    <Text style={{ position: 'absolute', left: 120, color: 'red' }}>*</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Event Title"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.inputField}>
                    <Text style={styles.inputLabel}>Location</Text>
                    <Text style={{ position: 'absolute', left: 110, color: 'red' }}>*</Text>
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
                            return <MaterialIcons name="keyboard-arrow-down" size={24} style={{ position: 'absolute', color: '#D9D9D9', bottom: -35, right: 50, color: '#1A8FE3', }} />;
                        }}
                    />
                </View>

                <View style={styles.inputField}>
                    <Text style={styles.inputLabel}>Event Date</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Date"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <EvilIcons name="calendar" size={24} style={styles.icon1} />
                </View>

                <View style={styles.inputField}>
                    <Text style={styles.inputLabel}>Event Description</Text>
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

                <View style={{ backgroundColor: '#1A8FE3', padding: 10, borderRadius: 50, marginLeft: 60, marginRight: 60, marginTop: 50 }}>
                    <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold' }}>Publish</Text>
                </View>
            </ScrollView>


            <Navbar />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
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
        marginBottom: 10,
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
        right: 45,
        top: 38,
        color: '#1A8FE3',
        position: 'absolute',
    }
});

export default PostEvent;