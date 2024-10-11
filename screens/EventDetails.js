import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const EventDetails = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.icon} onPress={()=> navigation.navigate('Urgent')}>
                <View style={styles.circle1}>
                    <MaterialIcons name='keyboard-arrow-left' size={24} style={{color: 'black'}}/>
                </View>
            </TouchableOpacity>
            <Image source={require('../assets/EV.png')} style={styles.image} />

            <View style={{ flexDirection: 'row', margin: 10, marginLeft: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 500, marginRight: 20 }}>Simbock Yaounde</Text>
                <Text><Text style={{ fontSize: 14, color: '#0071CE', top: 5 }}>300</Text> Registerd</Text>
                <Text style={{ fontSize: 14, color: '#0071CE', marginLeft: 20, top: 4 }}>14-10-2024</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <View style={styles.circle}>
                    <MaterialCommunityIcons name='home-minus' size={34} style={styles.icons} />
                </View>
                <View style={{ top: 17 }}>
                    <Text>Organisation</Text>
                    <Text style={{ fontSize: 10 }}>Verified</Text>
                </View>
                <View style={styles.follow}>
                    <Text style={{ color: '#0071CE' }}>Follow</Text>
                </View>
            </View>

            <Text style={{ fontSize: 20, fontWeight: 500, marginLeft: 20, marginTop: 15 }}>Mental Health Education all the children</Text>
            <Text style={{ marginLeft: 20, marginTop: 30, fontSize: 18 }}>Story</Text>
            <Text style={{ marginLeft: 20, marginTop: 15 }}>Massa eu tincidunt viverra quis scelerisque sit sollicitudin condimentum. Interdum risus at praesent dui. Eget convallis vitae mauris id feugiat tortor scelerisque.
                <Text style={{ color: '#0071CE' }}>Read more...</Text> </Text>

            <TouchableOpacity 
                style={{ backgroundColor: '#0071CE', borderRadius: 50, padding: 15, marginTop: 15, marginLeft: 50, marginRight: 50 }}
                onPress={() => navigation.navigate('DonorDetailsOne')}>
                <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 600, fontSize: 18 }}>Donate</Text>
            </TouchableOpacity>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: '100%',
        height: '40%'
    },
    icon: {
        position: 'absolute',
        top: 100,
    },
    circle1: {
        borderRadius: 10,
        backgroundColor: '#D9D9D9',
        marginLeft: 10
    },
    icons: {
        color: '#0071CE',
        alignSelf: 'center'
    },
    circle: {
        borderRadius: 50,
        backgroundColor: '#D9D9D9',
        marginLeft: 20,
        marginTop: 10,
        padding: 10,
        marginRight: 30
    },
    follow: {
        borderColor: '#0071CE',
        borderWidth: 2,
        borderRadius: 30,
        alignSelf: 'center',
        paddingLeft: 30,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 30,
        marginLeft: 50,
        top: 5
    },
})
export default EventDetails;