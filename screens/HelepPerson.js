import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Navbar from '../components/Navbar';
import { useNavigation } from '@react-navigation/native';


const Help = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={{ flexDirection: 'row', marginLeft: '10%' }}>
                        <Text style={{ fontWeight: 600, fontSize: 16, marginRight: 37 }}>Helep Person</Text>
                        <FontAwesome5 name='plus-circle' size={24} style={{ color: '#0071CE', top: 10 }} />
                        <TouchableOpacity onPress={()=> navigation.navigate('Notification')}>
                            <Text style={{ fontWeight: 600, fontSize: 16, marginLeft: 35 }}>Notification</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', borderWidth: 1, top: 12, borderRadius: 8, borderColor: '#D9D9D9', alignSelf: 'center' }}>
                        <View style={{ width: '50%', borderWidth: 2, borderColor: '#0071CE' }}></View>
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

                    <TouchableOpacity 
                        style={{ flexDirection: 'row', borderRadius: 18, borderWidth: 1, borderColor: '#D9D9D9', marginLeft: 15, marginRight: 15, marginTop: 15 }}
                        onPress={() => navigation.navigate('Donate')}>
                        <Image
                            source={require('../assets/H1.png')}
                            style={{ width: 100, height: 100, borderBottomLeftRadius: 8, borderTopLeftRadius: 8 }} />
                        <View style={{ marginLeft: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#0071CE' }}>Financial</Text>
                                <Text style={{ color: '#0071CE', marginLeft: 90 }}>OrgName</Text>
                            </View>
                            <Text style={{ color: '#9A9A9A', width: 200 }}>I am Support to Victims Anglophone Crisis in Bamenda</Text>

                            <View style={{ width: '75%', borderWidth: 1, top: 12, borderRadius: 8, borderColor: '#D9D9D9', backgroundColor: 'rgba(26, 143, 227, 0.3)' }}>
                                <View style={{ width: '50%', borderWidth: 2, borderColor: '#0071CE' }}>

                                </View>
                            </View>
                            <Text style={{ right: -170, color: '#9A9A9A' }}>50%</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#9A9A9A' }}> <Text style={{ color: '#0071CE' }}>300</Text> Donators</Text>
                                <Text style={{ color: '#9A9A9A', marginLeft: 20 }}> <Text style={{ color: 'red' }}>2</Text> Days Left</Text>
                                <Entypo name='share' style={{ top: 4, right: 5, position: 'absolute', color: '#0071CE' }} />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={{ flexDirection: 'row', borderRadius: 18, borderWidth: 1, borderColor: '#D9D9D9', margin: 15 }}
                        onPress={() => navigation.navigate('Donate')}>
                        <Image
                            source={require('../assets/H2.png')}
                            style={{ width: 100, height: 100, borderBottomLeftRadius: 8, borderTopLeftRadius: 8 }} />
                        <View style={{ marginLeft: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#009951' }}>Medical</Text>
                                <Text style={{ color: '#0071CE', marginLeft: 90 }}>OrgName</Text>
                            </View>
                            <Text style={{ color: '#9A9A9A', width: 200 }}>I am Support to Victims Anglophone Crisis in Bamenda</Text>

                            <View style={{ width: '75%', borderWidth: 1, top: 12, borderRadius: 8, borderColor: '#D9D9D9', backgroundColor: 'rgba(26, 143, 227, 0.3)' }}>
                                <View style={{ width: '25%', borderWidth: 2, borderColor: 'red' }}>

                                </View>
                            </View>
                            <Text style={{ right: -170, color: '#9A9A9A' }}>25%</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#9A9A9A' }}> <Text style={{ color: '#0071CE' }}>300</Text> Donators</Text>
                                <Text style={{ color: '#9A9A9A', marginLeft: 8 }}> <Text style={{ color: '#0071CE' }}>14</Text> Days Left</Text>
                                <Entypo name='share' style={{ top: 4, right: 5, position: 'absolute', color: '#0071CE' }} />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={{ flexDirection: 'row', borderRadius: 18, borderWidth: 1, borderColor: '#D9D9D9', marginLeft: 15, marginRight: 15, marginBottom: 15 }}
                        onPress={() => navigation.navigate('Donate')}>
                        <View style={{ marginLeft: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#0071CE' }}>Financial</Text>
                                <Text style={{ color: '#0071CE', marginLeft: 180 }}>OrgName</Text>
                            </View>
                            <Text style={{ color: '#9A9A9A', width: 300 }}>I am Support to Victims Anglophone Crisis in Bamenda</Text>

                            <View style={{ width: '80%', borderWidth: 1, top: 12, borderRadius: 8, borderColor: '#D9D9D9', backgroundColor: 'rgba(26, 143, 227, 0.3)' }}>
                                <View style={{ width: '50%', borderWidth: 2, borderColor: '#0071CE' }}>

                                </View>
                            </View>
                            <Text style={{ right: -260, color: '#9A9A9A' }}>50%</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#9A9A9A' }}> <Text style={{ color: '#0071CE' }}>300</Text> Donators</Text>
                                <Text style={{ color: '#9A9A9A', marginLeft: 110 }}> <Text style={{ color: '#0071CE' }}>14</Text> Days Left</Text>
                                <Entypo name='share' style={{ top: 4, right: 5, position: 'absolute', color: '#0071CE' }} />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={{ flexDirection: 'row', borderRadius: 18, borderWidth: 1, borderColor: '#D9D9D9', marginLeft: 15, marginRight: 15, marginBottom: 15 }}
                        onPress={() => navigation.navigate('Donate')}>
                        <Image
                            source={require('../assets/H3.png')}
                            style={{ width: 100, height: 100, borderBottomLeftRadius: 8, borderTopLeftRadius: 8 }} />
                        <View style={{ marginLeft: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#009951' }}>Housing</Text>
                                <Text style={{ color: '#0071CE', marginLeft: 90 }}>OrgName</Text>
                            </View>
                            <Text style={{ color: '#9A9A9A', width: 200 }}>I am Support to Victims Anglophone Crisis in Bamenda</Text>

                            <View style={{ width: '75%', borderWidth: 1, top: 12, borderRadius: 8, borderColor: '#D9D9D9', backgroundColor: 'rgba(26, 143, 227, 0.3)' }}>
                                <View style={{ width: '25%', borderWidth: 2, borderColor: 'red' }}>

                                </View>
                            </View>
                            <Text style={{ right: -170, color: '#9A9A9A' }}>25%</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#9A9A9A' }}> <Text style={{ color: '#0071CE' }}>300</Text> Donators</Text>
                                <Text style={{ color: '#9A9A9A', marginLeft: 8 }}> <Text style={{ color: '#0071CE' }}>14</Text> Days Left</Text>
                                <Entypo name='share' style={{ top: 4, right: 5, position: 'absolute', color: '#0071CE' }} />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={{ flexDirection: 'row', borderRadius: 18, borderWidth: 1, borderColor: '#D9D9D9', marginLeft: 15, marginRight: 15, marginBottom: 15 }}
                    onPress={() => navigation.navigate('Donate')}>
                        <Image
                            source={require('../assets/H1.png')}
                            style={{ width: 100, height: 100, borderBottomLeftRadius: 8, borderTopLeftRadius: 8 }} />
                        <View style={{ marginLeft: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#0071CE' }}>Financial</Text>
                                <Text style={{ color: '#0071CE', marginLeft: 90 }}>OrgName</Text>
                            </View>
                            <Text style={{ color: '#9A9A9A', width: 200 }}>I am Support to Victims Anglophone Crisis in Bamenda</Text>

                            <View style={{ width: '75%', borderWidth: 1, top: 12, borderRadius: 8, borderColor: '#D9D9D9', backgroundColor: 'rgba(26, 143, 227, 0.3)' }}>
                                <View style={{ width: '25%', borderWidth: 2, borderColor: 'red' }}>

                                </View>
                            </View>
                            <Text style={{ right: -170, color: '#9A9A9A' }}>25%</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#9A9A9A' }}> <Text style={{ color: '#0071CE' }}>300</Text> Donators</Text>
                                <Text style={{ color: '#9A9A9A', marginLeft: 8 }}> <Text style={{ color: '#0071CE' }}>14</Text> Days Left</Text>
                                <Entypo name='share' style={{ top: 4, right: 5, position: 'absolute', color: '#0071CE' }} />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={{ flexDirection: 'row', borderRadius: 18, borderWidth: 1, borderColor: '#D9D9D9', marginLeft: 15, marginRight: 15, marginBottom: 15 }}
                        onPress={() => navigation.navigate('Donate')}>
                        <View style={{ marginLeft: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#0071CE' }}>Financial</Text>
                                <Text style={{ color: '#0071CE', marginLeft: 180 }}>OrgName</Text>
                            </View>
                            <Text style={{ color: '#9A9A9A', width: 300 }}>I am Support to Victims Anglophone Crisis in Bamenda</Text>

                            <View style={{ width: '80%', borderWidth: 1, top: 12, borderRadius: 8, borderColor: '#D9D9D9', backgroundColor: 'rgba(26, 143, 227, 0.3)' }}>
                                <View style={{ width: '50%', borderWidth: 2, borderColor: '#0071CE' }}>

                                </View>
                            </View>
                            <Text style={{ right: -260, color: '#9A9A9A' }}>50%</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#9A9A9A' }}> <Text style={{ color: '#0071CE' }}>300</Text> Donators</Text>
                                <Text style={{ color: '#9A9A9A', marginLeft: 110 }}> <Text style={{ color: '#0071CE' }}>14</Text> Days Left</Text>
                                <Entypo name='share' style={{ top: 4, right: 5, position: 'absolute', color: '#0071CE' }} />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={{ flexDirection: 'row', borderRadius: 18, borderWidth: 1, borderColor: '#D9D9D9', marginLeft: 15, marginRight: 15, marginBottom: 15 }}
                        onPress={() => navigation.navigate('Donate')}>
                        <Image
                            source={require('../assets/H2.png')}
                            style={{ width: 100, height: 100, borderBottomLeftRadius: 8, borderTopLeftRadius: 8 }} />
                        <View style={{ marginLeft: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#009951' }}>Medical</Text>
                                <Text style={{ color: '#0071CE', marginLeft: 90 }}>OrgName</Text>
                            </View>
                            <Text style={{ color: '#9A9A9A', width: 200 }}>I am Support to Victims Anglophone Crisis in Bamenda</Text>

                            <View style={{ width: '75%', borderWidth: 1, top: 12, borderRadius: 8, borderColor: '#D9D9D9', backgroundColor: 'rgba(26, 143, 227, 0.3)' }}>
                                <View style={{ width: '25%', borderWidth: 2, borderColor: '#0071CE' }}>

                                </View>
                            </View>
                            <Text style={{ right: -170, color: '#9A9A9A' }}>25%</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#9A9A9A' }}> <Text style={{ color: '#0071CE' }}>300</Text> Donators</Text>
                                <Text style={{ color: '#9A9A9A', marginLeft: 8 }}> <Text style={{ color: '#0071CE' }}>14</Text> Days Left</Text>
                                <Entypo name='share' style={{ top: 4, right: 5, position: 'absolute', color: '#0071CE' }} />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={{ flexDirection: 'row', borderRadius: 18, borderWidth: 1, borderColor: '#D9D9D9', marginLeft: 15, marginRight: 15, marginBottom: 15 }}
                        onPress={() => navigation.navigate('Donate')}>
                        <Image
                            source={require('../assets/H2.png')}
                            style={{ width: 100, height: 100, borderBottomLeftRadius: 8, borderTopLeftRadius: 8 }} />
                        <View style={{ marginLeft: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#009951' }}>Medical</Text>
                                <Text style={{ color: '#0071CE', marginLeft: 90 }}>OrgName</Text>
                            </View>
                            <Text style={{ color: '#9A9A9A', width: 200 }}>I am Support to Victims Anglophone Crisis in Bamenda</Text>

                            <View style={{ width: '75%', borderWidth: 1, top: 12, borderRadius: 8, borderColor: '#D9D9D9', backgroundColor: 'rgba(26, 143, 227, 0.3)' }}>
                                <View style={{ width: '25%', borderWidth: 2, borderColor: '#0071CE' }}>

                                </View>
                            </View>
                            <Text style={{ right: -170, color: '#9A9A9A' }}>25%</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#9A9A9A' }}> <Text style={{ color: '#0071CE' }}>300</Text> Donators</Text>
                                <Text style={{ color: '#9A9A9A', marginLeft: 8 }}> <Text style={{ color: '#0071CE' }}>14</Text> Days Left</Text>
                                <Entypo name='share' style={{ top: 4, right: 5, position: 'absolute', color: '#0071CE' }} />
                            </View>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </View>

            <Navbar HelepPerson={true} />

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
export default Help;