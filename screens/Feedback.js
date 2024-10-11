import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import Navbar from '../components/Navbar';
import { useNavigation } from '@react-navigation/native';




const Feedback = () => {
    const [email, setEmail] = useState('');
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.icons}>
                    <TouchableOpacity style={styles.circle} onPress={()=> navigation.navigate('Settings')}>
                        <MaterialIcons name='keyboard-arrow-left' size={24} />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 20, fontWeight: 500, fontSize: 18 }}>Feedback</Text>
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
                <TouchableOpacity 
                    style={{ backgroundColor: '#1A8FE3', padding: 10, borderRadius: 50, marginLeft: 60, marginRight: 60, marginTop: 80 }}
                    onPress={()=> navigation.navigate('Home')}>
                    <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold' }}>Publish</Text>
                </TouchableOpacity>
            </ScrollView>

            <Navbar />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1, 
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
        marginTop: 50,
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
        height: 200,
        padding: 10,
        borderColor: '#9CA3AF',
        borderWidth: 1,
        textAlignVertical: 'top',
        borderRadius: 20,
        marginLeft: 25,
        marginRight: 25,
    },

});

export default Feedback;