import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import Navbar from '../components/Navbar';
import { useNavigation } from '@react-navigation/native';


const Notification = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={{ flexDirection: 'row', marginLeft: '10%' }}>
                        <TouchableOpacity onPress={()=> navigation.navigate('HelepPerson')}>
                            <Text style={{ fontWeight: 600, fontSize: 16, marginRight: 37 }}>Helep Person</Text>
                        </TouchableOpacity>
                        <FontAwesome5 name='plus-circle' size={24} style={{ color: '#0071CE', top: 10 }} />
                        <Text style={{ fontWeight: 600, fontSize: 16, marginLeft: 35 }}>Notification</Text>
                    </View>
                    <View style={{ width: '100%', borderWidth: 1, top: 12, borderRadius: 8, borderColor: '#D9D9D9' }}>
                        <View style={{ width: '50%', borderWidth: 2, borderColor: '#0071CE', left: 180 }}></View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        <View style={styles.box}>
                            <Text style={{ color: 'white' }}>All (25)</Text>
                        </View>
                        <View style={styles.boxs}>
                            <Text>Financial</Text>
                        </View>
                        <View style={styles.boxs}>
                            <Text>Medical</Text>
                        </View>
                        <View style={styles.boxs}>
                            <Text>other</Text>
                        </View>
                    </View>

                    <Text style={{ marginTop: 30, marginLeft: 25, marginBottom: 8 }}>Today: <Text style={{ color: '#9A9A9A' }}>8th November 2022</Text> </Text>
                    <View style={{ flexDirection: 'row', borderRadius: 18, borderWidth: 1, borderColor: '#D9D9D9', marginLeft: 15, marginRight: 15, marginTop: 15, padding: 5 }}>
                        <Image
                            source={require('../assets/success.png')}
                            style={{ width: 70, height: 70, left: 15 }} />
                        <View style={{ marginLeft: 30 }}>
                            <Text style={{ top: 10 }}>Donate Successful</Text>
                            <Text style={{ color: '#9A9A9A', width: 200, fontSize: 12, top: 14 }}>Your donation was very helpful. the children will be very happy</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', borderRadius: 18, borderWidth: 1, borderColor: '#D9D9D9', marginLeft: 15, marginRight: 15, marginTop: 15, padding: 5 }}>
                        <Image
                            source={require('../assets/notif.png')}
                            style={{ width: 70, height: 70, left: 15 }} />
                        <View style={{ marginLeft: 30 }}>
                            <Text style={{ top: 10 }}>Campaign Available</Text>
                            <Text style={{ color: '#9A9A9A', width: 200, fontSize: 12, top: 14 }}>Your donation was very helpful. the children will be very happy</Text>
                        </View>
                    </View>
                    <Text style={{ color: '#9A9A9A', marginTop: 30, marginLeft: 25, marginBottom: 8 }}>5th November 2022</Text>

                    <View style={{ flexDirection: 'row', borderRadius: 18, borderWidth: 1, borderColor: '#D9D9D9', marginLeft: 15, marginRight: 15, marginTop: 15, padding: 5 }}>
                        <Image
                            source={require('../assets/notif.png')}
                            style={{ width: 70, height: 70, left: 15 }} />
                        <View style={{ marginLeft: 30 }}>
                            <Text style={{ top: 10 }}>New Feature Updated!</Text>
                            <Text style={{ color: '#9A9A9A', width: 200, fontSize: 12, top: 14 }}>Your donation was very helpful. the children will be very happy</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', borderRadius: 18, borderWidth: 1, borderColor: '#D9D9D9', marginLeft: 15, marginRight: 15, marginTop: 15, padding: 5 }}>
                        <Image
                            source={require('../assets/failure.png')}
                            style={{ width: 70, height: 70, left: 15 }} />
                        <View style={{ marginLeft: 30 }}>
                            <Text style={{ top: 10 }}>Donate Denied</Text>
                            <Text style={{ color: '#9A9A9A', width: 200, fontSize: 12, top: 14 }}>Your donation was very helpful. the children will be very happy</Text>
                        </View>
                    </View>
                    <Text style={{ color: '#9A9A9A', marginTop: 30, marginLeft: 25, marginBottom: 8 }}>1th November 2022</Text>

                    <View style={{ flexDirection: 'row', borderRadius: 18, borderWidth: 1, borderColor: '#D9D9D9', marginLeft: 15, marginRight: 15, marginTop: 15, padding: 5 }}>
                        <Image
                            source={require('../assets/notif.png')}
                            style={{ width: 70, height: 70, left: 15 }} />
                        <View style={{ marginLeft: 30 }}>
                            <Text style={{ top: 10 }}>Donate Successful</Text>
                            <Text style={{ color: '#9A9A9A', width: 200, fontSize: 12, top: 14 }}>Your donation was very helpful. the children will be very happy</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', borderRadius: 18, borderWidth: 1, borderColor: '#D9D9D9', marginLeft: 15, marginRight: 15, marginTop: 15, padding: 5 }}>
                        <Image
                            source={require('../assets/success.png')}
                            style={{ width: 70, height: 70, left: 15 }} />
                        <View style={{ marginLeft: 30 }}>
                            <Text style={{ top: 10 }}>Donate Successful</Text>
                            <Text style={{ color: '#9A9A9A', width: 200, fontSize: 12, top: 14 }}>Your donation was very helpful. the children will be very happy</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', borderRadius: 18, borderWidth: 1, borderColor: '#D9D9D9', marginLeft: 15, marginRight: 15, marginTop: 15, padding: 5 }}>
                        <Image
                            source={require('../assets/success.png')}
                            style={{ width: 70, height: 70, left: 15 }} />
                        <View style={{ marginLeft: 30 }}>
                            <Text style={{ top: 10 }}>Donate Successful</Text>
                            <Text style={{ color: '#9A9A9A', width: 200, fontSize: 12, top: 14 }}>Your donation was very helpful. the children will be very happy</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', borderRadius: 18, borderWidth: 1, borderColor: '#D9D9D9', marginLeft: 15, marginRight: 15, marginTop: 15, padding: 5 }}>
                        <Image
                            source={require('../assets/success.png')}
                            style={{ width: 70, height: 70, left: 15 }} />
                        <View style={{ marginLeft: 30 }}>
                            <Text style={{ top: 10 }}>Donate Successful</Text>
                            <Text style={{ color: '#9A9A9A', width: 200, fontSize: 12, top: 14 }}>Your donation was very helpful. the children will be very happy</Text>
                        </View>
                    </View>

                </ScrollView>
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
    body: {
        backgroundColor: 'white',
        top: '10%',
        paddingTop: 10,
    },
    scrollView: {
        paddingBottom: '50%',
    },
    box: {
        borderRadius: 50,
        marginLeft: 25,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#0071CE',
        borderWidth: 1,
        borderColor: '#0071CE'
    },
    boxs: {
        borderRadius: 50,
        marginLeft: 20,
        flexDirection: 'row',
        paddingTop: 8,
        paddingLeft: 8,
        paddingRight: 8,
        borderWidth: 1,
        borderColor: '#0071CE'
    },

})
export default Notification;