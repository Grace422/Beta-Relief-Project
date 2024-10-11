import  {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import  React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';


const Code = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = () => {
        console.log("password changed success");
    };
    return (
        <View style={styles.container}>
            <View style={styles.icons}>
                <View style={styles.circle}>
                    <MaterialIcons name='keyboard-arrow-left' size={24}/>
                </View>  
            </View>
            <Text style={{fontWeight: 450, fontSize: 26, marginLeft: 30, marginTop: 50}}>Code Verification</Text>
            <Text 
            style={{
                color: '#9A9A9A',
                fontSize: 16, 
                marginLeft: 30, 
                marginTop: 10,
                marginRight: 30,
                marginBottom: 60
                }}>Provide your email address for which you want to reset your password</Text>
            <View style={styles.inputField}>
                <Text style={styles.inputLabel}>Email Address</Text>
                <TextInput
                    style={[styles.input, styles.inputError]}
                    placeholder="Enter your email address"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Request Code</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{color: '#0071CE', alignSelf: 'center', marginTop: 20}}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    icons:{
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 50,
    }, 
    circle:{
        borderRadius: 10,
        backgroundColor: '#D9D9D9'
    }, button: {
        backgroundColor: '#0071CE',
        paddingVertical: 12,
        borderRadius: 25,
        alignItems: 'center',
        marginLeft: 25,
        marginRight: 25,
        marginTop: '70%',
    },
    buttonText: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: '700',
    },
    inputField: {
        marginBottom: 20,
    },
    inputLabel: {
        color: '#353535',
        fontSize: 15,
        marginLeft: 40,
        marginBottom: 5,
        paddingHorizontal: 5,
    },
    input: {
        height: 45,
        fontSize: 15,
        color: '#353535',
        borderColor: '#9CA3AF',
        opacity: 0.75,
        borderWidth: 1,
        padding: 12,
        borderRadius: 50,
        marginLeft: 25,
        marginRight: 25,
    },
  });

export default Code;