import  {View, Text,  StyleSheet, TouchableOpacity } from 'react-native'
import  React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';





const Navbar = ({ BetaFund, SeekHelp, Home, HelepPerson, Settings }) => {
    const navigation = useNavigation();
    const startNavigation = () => {
        navigation.navigate('Home')
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('BetaFund')}>
                <MaterialCommunityIcons name="heart-circle" style={[styles.icon, BetaFund && styles.active]}/>
                <Text style={[styles.text, BetaFund && styles.active]}> BetaFund </Text>                
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('AskHelp')}>
                <MaterialCommunityIcons  name="hand-extended" style={[styles.icon, SeekHelp && styles.active]}/>
                <Text style={[styles.text, SeekHelp && styles.active]}> Seek Help </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <MaterialCommunityIcons name='home-minus' style={[styles.icon, Home && styles.active]}/>
                <Text style={[styles.text, Home && styles.active]}> Home </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('HelepPerson')}>
                <MaterialCommunityIcons name="hand-heart" style={[styles.icon, HelepPerson && styles.active]}/>
                <Text style={[styles.text, HelepPerson && styles.active]}> Helep Person </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('Settings')}>
                <Ionicons name="settings-outline" style={[styles.icon, Settings && styles.active]}/>
                <Text style={[styles.text, Settings && styles.active]}> Settings </Text>
            </TouchableOpacity>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        justifyContent: 'space-between',
        paddingVertical: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: 'rgba(217, 217, 217, 0.8)',
        paddingRight: '10%',
        position: 'absolute',
        bottom: 0,
        flex: 1
    },
    icon:{
        fontSize: 24,
        alignSelf: 'center',
        marginLeft: 10,
        color: '#9A9A9A',
    },
    text:{
        fontSize: 13,
        marginLeft: 10,
        color: '#9A9A9A',
    },
    active:{
        color: '#41B5CF',
    }
})
export default Navbar;