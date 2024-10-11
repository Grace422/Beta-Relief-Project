import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Navbar from '../components/Navbar';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import { Events } from '../Data/Events';


const Home = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const route = useRoute();
    // const { id } = route.params;

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3000/Events/${event.id}');
            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []); 
      
    

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image
                    source={require('../assets/logoWhite.png')}
                    style={{ width: 130, height: 50, marginLeft: 30 }} />
                <Ionicons name='search' size={24} style={{ color: 'white', top: 12, marginLeft: 140 }} />
            </View>
            <View style={styles.body}>
                <ScrollView showsVerticalScrollIndicator={false} vertical={true} contentContainerStyle={styles.scrollView}>
                    <View>
                        <Text style={{ fontSize: 14, fontWeight: 500, marginLeft: 25, top: -4 }}>Events/Trainings</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {data.map((event) => (
                            <LinearGradient
                                colors={['rgba(26, 143, 227, 0.3)', 'rgba(26, 143, 227, 1.0)']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.gradient}
                                keyExtractor={event.id}
                                renderItem={this.renderEvents}
                                data={Events}
                            >
                                <TouchableOpacity style={styles.box} onPress={()=> navigation.navigate('Events')}>

                                    <Image
                                        source={{ uri: event.image }}
                                        style={{ width: 100, height: 90, top: 15, left: -10 }} />
                                    <View style={{ left: 100, top: 15, left: 10 }}>
                                        <Text style={{ fontSize: 15 }}>{event.title}</Text>
                                        <Text style={{ fontSize: 15 }}>{event.desc}</Text>
                                        <View style={{ backgroundColor: '#330065', borderRadius: 18, padding: 6, width: 100, height: 30, marginTop: 8 }}>
                                            <Text style={{ color: 'white', alignSelf: 'center' }}>{event.author}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                            </LinearGradient>
                             ))}

                            {/* <LinearGradient
                                colors={['rgba(26, 143, 227, 0.3)', 'rgba(26, 143, 227, 1.0)']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.gradient}
                            >
                                <TouchableOpacity style={styles.box} onPress={()=> navigation.navigate('Events')}>

                                    <Image
                                        source={require('../assets/redcross.png')}
                                        style={{ width: 100, height: 90, top: 15, left: -10 }} />
                                    <View style={{ left: 100, top: 15, left: 10 }}>
                                        <Text style={{ fontSize: 15 }}>HIV/AIDS</Text>
                                        <Text style={{ fontSize: 15 }}>Education for youths in</Text>
                                        <View style={{ backgroundColor: '#330065', borderRadius: 18, padding: 6, width: 100, height: 30, marginTop: 8 }}>
                                            <Text style={{ color: 'white', alignSelf: 'center' }}>Donai sempai</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                            </LinearGradient>

                            <LinearGradient
                                colors={['rgba(26, 143, 227, 0.3)', 'rgba(26, 143, 227, 1.0)']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.gradient}
                            >
                                <TouchableOpacity style={styles.box} onPress={()=> navigation.navigate('Events')}>

                                    <Image
                                        source={require('../assets/booksAndHands.png')}
                                        style={{ width: 100, height: 90, top: 15, left: -10 }} />
                                    <View style={{ left: 100, top: 15, left: 10 }}>
                                        <Text style={{ fontSize: 15 }}>HIV/AIDS''HIV/AIDS</Text>
                                        <Text style={{ fontSize: 15 }}>Education for youths in</Text>
                                        <View style={{ backgroundColor: '#330065', borderRadius: 18, padding: 6, width: 100, height: 30, marginTop: 8 }}>
                                            <Text style={{ color: 'white', alignSelf: 'center' }}>Donai sempai</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                            </LinearGradient>

                            <LinearGradient
                                colors={['rgba(26, 143, 227, 0.3)', 'rgba(26, 143, 227, 1.0)']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.gradient}
                            >
                                <TouchableOpacity style={styles.box} onPress={()=> navigation.navigate('Events')}>

                                    <Image
                                        source={require('../assets/redcross.png')}
                                        style={{ width: 100, height: 90, top: 15, left: -10 }} />
                                    <View style={{ left: 100, top: 15, left: 10 }}>
                                        <Text style={{ fontSize: 15 }}>HIV/AIDS''HIV/AIDS</Text>
                                        <Text style={{ fontSize: 15 }}>Education for youths in</Text>
                                        <View style={{ backgroundColor: '#330065', borderRadius: 18, padding: 6, width: 100, height: 30, marginTop: 8 }}>
                                            <Text style={{ color: 'white', alignSelf: 'center' }}>Donai sempai</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                            </LinearGradient> */}
                        </ScrollView>

                        <Text style={{ fontSize: 14, fontWeight: 500, marginLeft: 25, top: 35 }}>Featured Donations</Text>

                        <ScrollView style={styles.scrollView2} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 25 }} onPress={()=> navigation.navigate('Urgent')}>
                                <View style={{ borderRadius: 8, backgroundColor: 'white', width: 150 }}>
                                    <Image
                                        source={require('../assets/pic1.png')} style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                                    <Text style={{ fontSize: 10, marginTop: 5, marginBottom: 3 }}>IDPNgo Bakwa</Text>
                                    <FontAwesome name='check-circle' size={11} style={{ color: '#0071CE', position: 'absolute', top: 86, left: 80, marginTop: 5 }} />
                                    <Text style={{ marginBottom: 3 }}>Support to Victims Anglophone Crisis in Bamenda</Text>
                                    <View style={{ height: 10, width: 140, borderRadius: 8, backgroundColor: 'rgba(26, 143, 227, 0.3)' }}>
                                        <View style={{ height: 10, width: '30%', borderRadius: 8, backgroundColor: 'red', }}></View>
                                    </View>
                                    <Text style={{ fontSize: 10 }}>Collected <Text style={{ color: '#0071CE' }}>XAF 24,000,000</Text> </Text>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={()=> navigation.navigate('Urgent')}>
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

                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={()=> navigation.navigate('Urgent')}>
                                <View style={{ borderRadius: 8, backgroundColor: 'white', width: 150 }}>
                                    <Image
                                        source={require('../assets/pic1.png')} style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                                    <Text style={{ fontSize: 10, marginTop: 5, marginBottom: 3 }}>IDPNgo Bakwa</Text>
                                    <FontAwesome name='check-circle' size={11} style={{ color: '#0071CE', position: 'absolute', top: 86, left: 80, marginTop: 5 }} />
                                    <Text style={{ marginBottom: 3 }}>Support to Victims Anglophone Crisis in Bamenda</Text>
                                    <View style={{ height: 10, width: 140, borderRadius: 8, backgroundColor: 'rgba(26, 143, 227, 0.3)' }}>
                                        <View style={{ height: 10, width: '30%', borderRadius: 8, backgroundColor: 'red' }}></View>

                                    </View>
                                    <Text style={{ fontSize: 10 }}>Collected <Text style={{ color: '#0071CE' }}>XAF 24,000,000</Text> </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={()=> navigation.navigate('Urgent')}>
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
                            style={{ flexDirection: 'row', marginLeft: 25, marginTop: 15 }}
                            onPress={()=> navigation.navigate('Watch')}>
                            <Text style={{ fontWeight: 'bold' }}>Watch the impact</Text>
                            <Text style={{ color: '#0071CE', left: 150 }}>See all</Text>
                        </TouchableOpacity>


                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginLeft: 18 }}>

                            <Image source={require('../assets/Video_1.png')} style={styles.video} />
                            <Image source={require('../assets/Video_2.png')} style={styles.video} />
                            <Image source={require('../assets/Video_1.png')} style={styles.video} />
                            <Image source={require('../assets/Video_2.png')} style={styles.video} />

                        </ScrollView>
                    </View>
                </ScrollView>

            </View>

            <Navbar Home={true}/>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0071CE',
        flex: 1
    },
    scrollView2: {
        marginTop: 50,
    },
    scrollView: {
        paddingBottom: '60%',
    },
    body: {
        backgroundColor: 'white',
        top: '10%',
        paddingTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
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
    gradient:{
        borderRadius: 8,
        marginLeft: 25,
    },
    video: {
        width: 100,
        height: 150,
        marginLeft: 10,
        marginTop: 20,
        borderRadius: 8,
    },
})
export default Home;