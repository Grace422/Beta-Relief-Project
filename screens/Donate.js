import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import Navbar from '../components/Navbar';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const AskHelp = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                style={styles.contain}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} // Adjust if needed
            >
                <View style={styles.body}>

                    <View style={styles.icons}>
                        <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate('HelepPerson')}>
                            <MaterialIcons name='keyboard-arrow-left' size={24} />
                        </TouchableOpacity>
                        <Text style={{ marginLeft: 20, fontWeight: 500, fontSize: 18 }}>Helep Person</Text>
                    </View>
                    <Text style={{ color: '#0071CE', fontWeight: 'bold', fontSize: 32, alignSelf: 'center', marginTop: '35%' }}>Wetin you dey donate</Text>
                    <View style={{ marginTop: 70 }}>
                        <TouchableOpacity style={styles.inputField} onPress={() => navigation.navigate('DonorDetailsOne')}>
                            <Text style={styles.inputLabel}>Money</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.inputField} onPress={() => navigation.navigate('DonorDetailsTwo')}>
                            <Text style={styles.inputLabel}>Other</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </KeyboardAvoidingView>


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
    body: {
        // maxHeight: '100%',
        // flex: 1
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
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#CDCDCD',
        padding: 10,
        borderRadius: 10
    },
    inputLabel: {
        alignSelf: 'center'
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

export default AskHelp;