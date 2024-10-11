import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, Touchable } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const Events = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={{ top: 50, marginBottom: -20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                        <MaterialIcons name='keyboard-arrow-left' size={24} style={{ color: 'white' }} />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 120, color: 'white', fontSize: 19, fontWeight: 'bold', marginBottom: 8 }}>Events</Text>
                </View>
                <TextInput placeholder='search campaign'
                    style={{ borderRadius: 50, marginRight: 30, marginLeft: 30, backgroundColor: 'white', paddingLeft: 30 }}
                />
                <EvilIcons name='search' size={24} style={{ position: 'absolute', top: 39, left: 35 }} />

            </View>
            <View style={styles.body}>
                <ScrollView contentContainerStyle={styles.scrollView}>
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



                    <View style={{ flexWrap: 'wrap', flexDirection: 'row', marginLeft: 30, marginTop: 20, marginBottom: 10 }}>
                        <View style={{ marginBottom: 15 }}>
                            <TouchableOpacity style={{ borderRadius: 8, backgroundColor: 'white', width: 150 }} onPress={() => navigation.navigate('EventDetails')}>
                                <Image
                                    source={require('../assets/pic1.png')} style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                                <Text style={{ fontSize: 10, marginTop: 5, marginBottom: 3 }}>IDPNgo Bakwa</Text>
                                <FontAwesome name='check-circle' size={11} style={{ color: '#0071CE', position: 'absolute', top: 86, left: 80, marginTop: 5 }} />
                                <Text style={{ marginBottom: 3 }}>Support to Victims Anglophone Crisis in Bamenda</Text>
                                <Text style={{ fontSize: 10 }}>Collected <Text style={{ color: '#0071CE' }}>XAF 24,000,000</Text> </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ borderRadius: 8, backgroundColor: 'white', width: 150, marginLeft: 20 }}>
                                <Image
                                    source={require('../assets/pic1.png')} style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                                <Text style={{ fontSize: 10, marginTop: 5, marginBottom: 3 }}>IDPNgo Bakwa</Text>
                                <FontAwesome name='check-circle' size={11} style={{ color: '#0071CE', position: 'absolute', top: 86, left: 80, marginTop: 5 }} />
                                <Text style={{ marginBottom: 3 }}>Support to Victims Anglophone Crisis in Bamenda</Text>
                                <Text style={{ fontSize: 10 }}>Collected <Text style={{ color: '#0071CE' }}>XAF 24,000,000</Text> </Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ borderRadius: 8, backgroundColor: 'white', width: 150 }}>
                                <Image
                                    source={require('../assets/pic1.png')} style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                                <Text style={{ fontSize: 10, marginTop: 5, marginBottom: 3 }}>IDPNgo Bakwa</Text>
                                <FontAwesome name='check-circle' size={11} style={{ color: '#0071CE', position: 'absolute', top: 86, left: 80, marginTop: 5 }} />
                                <Text style={{ marginBottom: 3 }}>Support to Victims Anglophone Crisis in Bamenda</Text>
                                <Text style={{ fontSize: 10 }}>Collected <Text style={{ color: '#0071CE' }}>XAF 24,000,000</Text> </Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ borderRadius: 8, backgroundColor: 'white', width: 150, marginLeft: 20 }}>
                                <Image
                                    source={require('../assets/pic1.png')} style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                                <Text style={{ fontSize: 10, marginTop: 5, marginBottom: 3 }}>IDPNgo Bakwa</Text>
                                <FontAwesome name='check-circle' size={11} style={{ color: '#0071CE', position: 'absolute', top: 86, left: 80, marginTop: 5 }} />
                                <Text style={{ marginBottom: 3 }}>Support to Victims Anglophone Crisis in Bamenda</Text>
                                <Text style={{ fontSize: 10 }}>Collected <Text style={{ color: '#0071CE' }}>XAF 24,000,000</Text> </Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', borderRadius: 18, borderWidth: 1, borderColor: '#D9D9D9', marginRight: 15, marginBottom: 15, marginTop: 15 }}>
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
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ borderRadius: 8, backgroundColor: 'white', width: 150 }}>
                                <Image
                                    source={require('../assets/pic1.png')} style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                                <Text style={{ fontSize: 10, marginTop: 5, marginBottom: 3 }}>IDPNgo Bakwa</Text>
                                <FontAwesome name='check-circle' size={11} style={{ color: '#0071CE', position: 'absolute', top: 86, left: 80, marginTop: 5 }} />
                                <Text style={{ marginBottom: 3 }}>Support to Victims Anglophone Crisis in Bamenda</Text>
                                <Text style={{ fontSize: 10 }}>Collected <Text style={{ color: '#0071CE' }}>XAF 24,000,000</Text> </Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ borderRadius: 8, backgroundColor: 'white', width: 150, marginLeft: 20 }}>
                                <Image
                                    source={require('../assets/pic1.png')} style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                                <Text style={{ fontSize: 10, marginTop: 5, marginBottom: 3 }}>IDPNgo Bakwa</Text>
                                <FontAwesome name='check-circle' size={11} style={{ color: '#0071CE', position: 'absolute', top: 86, left: 80, marginTop: 5 }} />
                                <Text style={{ marginBottom: 3 }}>Support to Victims Anglophone Crisis in Bamenda</Text>
                                <Text style={{ fontSize: 10 }}>Collected <Text style={{ color: '#0071CE' }}>XAF 24,000,000</Text> </Text>
                            </View>
                        </View>
                    </View>


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
export default Events;