import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import ModalSelect from '../components/ModalSelect';


const Settings = () => {
    const navigation = useNavigation();
    const [selectedValue, setSelectedValue] = useState(null);
    // const { colors } = useTheme();

    const options = [
        { label: 'English', value: 'English' },
        { label: 'French', value: 'French' },
        { label: 'Pidgin', value: 'Pidgin' },
    ];
    return (
        <View styles={styles.container}>
            <View style={styles.icons}>
                <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate('Home')}>
                    <MaterialIcons name='keyboard-arrow-left' size={24} />
                </TouchableOpacity>
                <Text style={{ marginLeft: 20, fontWeight: 500, fontSize: 18 }}>Settings</Text>
            </View>

            <View style={{ marginTop: 50, marginLeft: 30 }}>
                <TouchableOpacity style={styles.items} onPress={() => navigation.navigate('EditProfile')}>
                    <View style={styles.circles}>
                        <FontAwesome6 name='user' size={14} style={{ color: '#0071CE', }} />
                    </View>
                    <Text style={{ top: 5 }}>Edit Profile</Text>
                    <MaterialIcons name='keyboard-arrow-right' size={24} style={{ marginLeft: '50%', top: 4, color: '#0071CE', }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.items}>
                    <View style={styles.circles}>
                        <FontAwesome6 name='user' size={14} style={{ color: '#0071CE', }} />
                    </View>
                    <ModalSelect options={options} selectedValue={selectedValue} onSelect={setSelectedValue} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.items} onPress={() => navigation.navigate('Notification')}>
                    <View style={styles.circles}>
                        <FontAwesome6 name='user' size={14} style={{ color: '#0071CE', }} />
                    </View>
                    <Text style={{ top: 5 }}>Notifications</Text>
                    <MaterialIcons name='keyboard-arrow-right' size={24} style={{ marginLeft: '46%', top: 4, color: '#0071CE', }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.items}>
                    <View style={styles.circles}>
                        <FontAwesome6 name='user' size={14} style={{ color: '#0071CE', }} />
                    </View>
                    <Text style={{ top: 5 }}>Help</Text>
                    <MaterialIcons name='keyboard-arrow-right' size={24} style={{ marginLeft: '62%', top: 4, color: '#0071CE', }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.items} onPress={() => navigation.navigate('Feedback')}>
                    <View style={styles.circles}>
                        <FontAwesome6 name='user' size={14} style={{ color: '#0071CE', }} />
                    </View>
                    <Text style={{ top: 5 }}>Give Feedback</Text>
                    <MaterialIcons name='keyboard-arrow-right' size={24} style={{ marginLeft: '43%', top: 5, color: '#0071CE', }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.items}>
                    <View style={styles.circles}>
                        <FontAwesome6 name='user' size={14} style={{ color: '#0071CE', }} />
                    </View>
                    {/* <Text style={[styles.text, { color: colors.text }]}>
                        Current Theme: {theme === CustomDefaultTheme ? 'Light' : 'Dark'}
                    </Text>
                    <Button onPress={toggleTheme} title="Toggle Theme" /> */}
                    <Text style={{ top: 5 }}>Dark Mode</Text>
                    <MaterialCommunityIcons name='toggle-switch' size={34} style={{ marginLeft: '48%', top: 4, color: 'black', }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.items} onPress={() => navigation.navigate('Logout')}>
                    <View style={styles.circles}>
                        <MaterialCommunityIcons name='logout' size={14} style={{ color: 'red', }} />
                    </View>
                    <Text style={{ top: 5 }}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    icons: {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 50,
    },
    circle: {
        borderRadius: 10,
        backgroundColor: '#D9D9D9',
        marginLeft: 10
    },
    circles: {
        borderRadius: 50,
        backgroundColor: 'rgba(26, 143, 227, 0.15)',
        marginRight: 20,
        padding: 10,
    },
    items: {
        flexDirection: 'row',
        marginBottom: 25,
    },
})

export default Settings;