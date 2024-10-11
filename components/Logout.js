import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const Logout = ({ visible }) => {
    const navigation = useNavigation();
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
        <View style={styles.container}>
            <View style={styles.content}>
            <View style={styles.icons}>
                <TouchableOpacity style={styles.circle} onPress={()=> navigation.navigate('Settings')}>
                    <MaterialIcons name='keyboard-arrow-left' size={24} />
                </TouchableOpacity>
            </View>
            <Image source={require('../assets/logout.png')} style={{ width: 200, height: 200, top: 70, alignSelf: 'center' }} />
            <Text style={{ color: 'red', fontSize: 23, fontWeight: 500, marginTop: 100, textAlign: 'center' }}>Are you sure you want to LogOut</Text>
            <Text style={{ fontSize: 14, color: '#D9D9D9', marginTop: 10, textAlign: 'center' }}>we dey here to support you if you need anything</Text>

            <TouchableOpacity 
                style={{ backgroundColor: '#0071CE', borderRadius: 50, padding: 15, marginTop: 45, marginLeft: 50, marginRight: 50 }}
                onPress={()=> navigation.navigate('Login')}>
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 600, fontSize: 18 }}>ok</Text>
            </TouchableOpacity>
            </View>
        </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    icons: {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 10,
    },
    circle: {
        borderRadius: 10,
        backgroundColor: '#D9D9D9',
        marginLeft: 10
    },
    content: {
        width: 400,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },
})
export default Logout;