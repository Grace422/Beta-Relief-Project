import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import Navbar from '../components/Navbar';
import { useNavigation } from '@react-navigation/native';


const Home = () => {
    const [email, setEmail] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={{ top: 50, marginBottom: -20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('HelepPerson')}>
                        <MaterialIcons name='keyboard-arrow-left' size={24} style={{ color: 'white' }} />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 120, color: 'white', fontSize: 19, fontWeight: 'bold' }}>Payment</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View>
                    <Text style={{ fontSize: 14, fontWeight: 400, marginLeft: 35, marginTop: 24 }}>Select Payment Method</Text>
                    <View>
                        <View style={styles.inputField}>
                            <Text>MTN Momo</Text>
                            <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
                                {
                                    isChecked == true ? (
                                        <MaterialIcons name='radio-button-on' size={24} style={styles.icon} />
                                    ) : (
                                        <MaterialIcons name='radio-button-off' size={24} style={styles.icon} />
                                    )
                                }

                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputField}>
                            <Text style={{ color: 'orange' }}>Orange Money</Text>
                            <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
                                {
                                    isChecked == true ? (
                                        <MaterialIcons name='radio-button-on' size={24} style={styles.icon} />
                                    ) : (
                                        <MaterialIcons name='radio-button-off' size={24} style={styles.icon} />
                                    )
                                }

                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputField}>
                            <Text>Bank</Text>
                            <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
                                {
                                    isChecked == true ? (
                                        <MaterialIcons name='radio-button-on' size={24} style={styles.icon} />
                                    ) : (
                                        <MaterialIcons name='radio-button-off' size={24} style={styles.icon} />
                                    )
                                }

                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.inputField1}>
                    <Text style={styles.inputLabel1}>Phone Number</Text>
                    <Text style={{ position: 'absolute', left: 150, color: 'red' }}>*</Text>
                    <TextInput
                        style={[styles.input, styles.inputError]}
                        placeholder="Phone number"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Success')}>
                    <View style={{ backgroundColor: '#1A8FE3', padding: 10, borderRadius: 50, marginLeft: 60, marginRight: 60, marginTop: '50%' }}>
                        <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold' }}>Donate</Text>
                    </View>
                </TouchableOpacity>

            </View>

            <Navbar HelepPerson={true}/>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0071CE',
        flex: 1
    },
    inputField: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#CDCDCD',
        padding: 15,
        borderRadius: 10
    },
    inputField1: {
        marginTop: 15,
    },
    inputLabel1: {
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
    body: {
        backgroundColor: 'white',
        top: '10%',
        paddingTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flex: 1
    },
    top: {
        flexDirection: 'row',
        top: 60
    },
    box: {
        borderRadius: 8,
        marginLeft: 25,
        flexDirection: 'row',
        padding: 15,
    },
    icon: {
        color: '#D3D3D3',
        right: 5,
        top: -20,
        position: 'absolute',
    },
})
export default Home;