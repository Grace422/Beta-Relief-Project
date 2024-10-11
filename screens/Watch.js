import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Watch = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={{ top: 50, marginBottom: -20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <MaterialIcons name='keyboard-arrow-left' size={24} style={{ color: 'white' }} />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 110, color: 'white', fontSize: 19, fontWeight: 'bold', marginBottom: 8 }}>Watch the impact</Text>
                </View>
                <TextInput placeholder='search campaign'
                    style={{ borderRadius: 50, marginRight: 40, marginLeft: 40, backgroundColor: 'white', paddingLeft: 30 }}
                />
                <EvilIcons name='search' size={24} style={{ position: 'absolute', top: 39, left: 45 }} />

            </View>
            <View style={styles.body}>
                <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
                    <Text style={{ fontSize: 24, fontWeight: 600, marginLeft: 25, marginTop: 10 }}>Watch Now</Text>

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 5 }}>
                        <Image source={require('../assets/Video_1.png')} style={styles.video} />
                        <Image source={require('../assets/Video_2.png')} style={styles.video} />
                        <Image source={require('../assets/Video_4.png')} style={styles.video} />
                        <Image source={require('../assets/Video_3 (2).png')} style={styles.video} />
                        <Image source={require('../assets/Video_2.png')} style={styles.video} />
                        <Image source={require('../assets/Video_4.png')} style={styles.video} />
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
    video: {
        width: 140,
        height: 200,
        marginLeft: 30,
        marginTop: 20,
        borderRadius: 8,
    },
})
export default Watch;