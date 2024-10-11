import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Urgent = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={{ top: 50, marginBottom: -20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <MaterialIcons name='keyboard-arrow-left' size={24} style={{ color: 'white' }} />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 80, color: 'white', fontSize: 19, fontWeight: 'bold', marginBottom: 8 }}>Urgent Donations</Text>
                </View>
                <TextInput placeholder='search campaign'
                    style={{ borderRadius: 50, marginRight: 30, marginLeft: 30, backgroundColor: 'white', paddingLeft: 30 }}
                />
                <EvilIcons name='search' size={24} style={{ position: 'absolute', top: 39, left: 35 }} />

            </View>
            <View style={styles.body}>
                <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row' }}>
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

                    <TouchableOpacity 
                        style={{ borderRadius: 18, borderWidth: 1, borderColor: '#D9D9D9', marginLeft: 15, marginRight: 15, marginTop: 15 }}
                        onPress={() => navigation.navigate('EventDetails')}>
                        <Image
                            source={require('../assets/U1.png')}
                            style={{ width: '100%', height: 150, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ marginTop: 10 }}>Massive donation to  to Victims  dd  Anglo phone Crisis in Bamenda</Text>
                            <Text style={{ color: '#9A9A9A', width: 300 }}>I am Support to Victims Anglophone Crisis in Bamenda</Text>

                            <View style={{ flexDirection: 'row', marginBottom: 25 }}>
                                <Text style={{ color: '#9A9A9A' }}> <Text style={{ color: '#0071CE' }}>20,000XAF</Text> fund raised</Text>
                                <Text style={{ color: '#9A9A9A', marginLeft: 40 }}> <Text style={{ color: '#0071CE' }}>300</Text> Donators</Text>
                            </View>

                            <View style={styles.line}>
                                <View style={{ width: '60%', borderWidth: 2, borderColor: '#0071CE', borderRadius: 8 }}></View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <ScrollView horizontal={true} contentContainerStyle={styles.scrollView1} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('DonorDetailsTwo')}>
                            <View style={{ borderRadius: 8, backgroundColor: 'white', width: 150 }}>
                                <Image
                                    source={require('../assets/pic1.png')} style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                                <Text style={{ fontSize: 10, marginTop: 5, marginBottom: 3 }}>IDPNgo Bakwa</Text>
                                <FontAwesome name='check-circle' size={11} style={{ color: '#0071CE', position: 'absolute', top: 86, left: 80, marginTop: 5 }} />
                                <Text style={{ marginBottom: 3 }}>Support to Victims Anglophone Crisis in Bamenda</Text>
                                <View style={{ height: 10, width: 140, borderRadius: 8, backgroundColor: 'rgba(26, 143, 227, 0.3)' }}>
                                    <View style={{ height: 10, width: '80%', borderRadius: 8, backgroundColor: 'blue' }}></View>

                                </View>
                                <Text style={{ fontSize: 10 }}>Collected <Text style={{ color: '#0071CE' }}>XAF 24,000,000</Text> </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('DonorDetailsTwo')}>
                            <View style={{ borderRadius: 8, backgroundColor: 'white', width: 150 }}>
                                <Image
                                    source={require('../assets/pic1.png')} style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                                <Text style={{ fontSize: 10, marginTop: 5, marginBottom: 3 }}>IDPNgo Bakwa</Text>
                                <FontAwesome name='check-circle' size={11} style={{ color: '#0071CE', position: 'absolute', top: 86, left: 80, marginTop: 5 }} />
                                <Text style={{ marginBottom: 3 }}>Support to Victims Anglophone Crisis in Bamenda</Text>
                                <View style={{ height: 10, width: 140, borderRadius: 8, backgroundColor: 'rgba(26, 143, 227, 0.3)' }}>
                                    <View style={{ height: 10, width: '80%', borderRadius: 8, backgroundColor: 'blue' }}></View>

                                </View>
                                <Text style={{ fontSize: 10 }}>Collected <Text style={{ color: '#0071CE' }}>XAF 24,000,000</Text> </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('DonorDetailsTwo')}>
                            <View style={{ borderRadius: 8, backgroundColor: 'white', width: 150 }}>
                                <Image
                                    source={require('../assets/pic1.png')} style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                                <Text style={{ fontSize: 10, marginTop: 5, marginBottom: 3 }}>IDPNgo Bakwa</Text>
                                <FontAwesome name='check-circle' size={11} style={{ color: '#0071CE', position: 'absolute', top: 86, left: 80, marginTop: 5 }} />
                                <Text style={{ marginBottom: 3 }}>Support to Victims Anglophone Crisis in Bamenda</Text>
                                <View style={{ height: 10, width: 140, borderRadius: 8, backgroundColor: 'rgba(26, 143, 227, 0.3)' }}>
                                    <View style={{ height: 10, width: '80%', borderRadius: 8, backgroundColor: 'blue' }}></View>

                                </View>
                                <Text style={{ fontSize: 10 }}>Collected <Text style={{ color: '#0071CE' }}>XAF 24,000,000</Text> </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('DonorDetailsTwo')}>
                            <View style={{ borderRadius: 8, backgroundColor: 'white', width: 150 }}>
                                <Image
                                    source={require('../assets/pic1.png')} style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                                <Text style={{ fontSize: 10, marginTop: 5, marginBottom: 3 }}>IDPNgo Bakwa</Text>
                                <FontAwesome name='check-circle' size={11} style={{ color: '#0071CE', position: 'absolute', top: 86, left: 80, marginTop: 5 }} />
                                <Text style={{ marginBottom: 3 }}>Support to Victims Anglophone Crisis in Bamenda</Text>
                                <View style={{ height: 10, width: 140, borderRadius: 8, backgroundColor: 'rgba(26, 143, 227, 0.3)' }}>
                                    <View style={{ height: 10, width: '80%', borderRadius: 8, backgroundColor: 'blue' }}></View>

                                </View>
                                <Text style={{ fontSize: 10 }}>Collected <Text style={{ color: '#0071CE' }}>XAF 24,000,000</Text> </Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>

                    <TouchableOpacity 
                        style={{ borderRadius: 18, borderWidth: 1, borderColor: '#D9D9D9', marginLeft: 15, marginRight: 15, marginTop: 15 }}
                        onPress={() => navigation.navigate('EventDetails')}>
                        <Image
                            source={require('../assets/U1.png')}
                            style={{ width: '100%', height: 150, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ marginTop: 10 }}>Massive donation to  to Victims  dd  Anglo phone Crisis in Bamenda</Text>
                            <Text style={{ color: '#9A9A9A', width: 300 }}>I am Support to Victims Anglophone Crisis in Bamenda</Text>

                            <View style={{ flexDirection: 'row', marginBottom: 25 }}>
                                <Text style={{ color: '#9A9A9A' }}> <Text style={{ color: '#0071CE' }}>20,000XAF</Text> fund raised</Text>
                                <Text style={{ color: '#9A9A9A', marginLeft: 40 }}> <Text style={{ color: '#0071CE' }}>300</Text> Donators</Text>
                            </View>

                            <View style={styles.line}>
                                <View style={{ width: '60%', borderWidth: 2, borderColor: '#0071CE', borderRadius: 8 }}></View>
                            </View>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </View>


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
        flex: 1
    },
    scrollView: {
        paddingBottom: '30%',
    },
    scrollView1: {
        marginLeft: 15,
        marginTop: 25
    },
    line: {
        width: '75%',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#D9D9D9',
        backgroundColor: 'rgba(26, 143, 227, 0.3)',
        top: -10,
        marginBottom: 20
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
export default Urgent;