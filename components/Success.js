import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native'
import React from 'react'
import Navbar from './Navbar';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';


const Success = ({ visible, onClose }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={onClose}
            >
               <View style={styles.modalOverlay}>
                <View style={styles.content}>
                    <TouchableOpacity style={styles.closeButton} onPress={() => navigation.navigate('Payment')}>
                        <AntDesign name='close' size={24} />
                    </TouchableOpacity>
                    <Image source={require('../assets/success (2).png')} style={{ width: 200, height: 200, top: 70, alignSelf: 'center' }} />
                    <Text style={{ color: 'red', fontSize: 23, fontWeight: 500, marginTop: 100, alignSelf: 'center' }}>Successful</Text>
                    <Text style={{ fontSize: 14, color: '#D9D9D9', marginTop: 10, alignSelf: 'center' }}>Thank you for making a donation</Text>

                    <TouchableOpacity
                        style={{ backgroundColor: '#0071CE', borderRadius: 50, padding: 15, marginTop: 45, marginLeft: 50, marginRight: 50 }}
                        onPress={() => navigation.navigate('Home')}>
                        <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 600, fontSize: 18 }}>ok</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Navbar HelepPerson={true} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modalOverlay:{
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 1
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 18,
    },
    closeButton: {
        color: 'white',
        top: 20,
        padding: 10,
    },
});

export default Success;