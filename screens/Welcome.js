import  {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import  React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
    const navigation = useNavigation();
    const hanlePress = () => {
        console.log('Next page');
    }
    const hanleSubmit = () => {
        console.log('Next page');
    }
    return (
        <View style={styles.container}>
            <View style={styles.icons}>
                <TouchableOpacity style={styles.circle} onPress={()=> navigation.navigate('Welcome')}>
                    <MaterialIcons name='keyboard-arrow-left' size={24}/>
                </TouchableOpacity>
                <FontAwesome name='volume-up' size={24} style={{marginLeft: '80%', color:'#0071CE'}}/>
            </View>

            <Image source={require('../assets/phoneAndHuman.png')} style={{width: '100%', height: '40%'}}/>

            <Text style={{color:'#0071CE', margin: 50, fontSize: 19, fontWeight: 500}}>MAKE WE CARRY YOU ENTER</Text>

            <TouchableOpacity 
                onPress={()=> navigation.navigate('DisablePage')} 
                style={{backgroundColor: '#0071CE', borderRadius: 50, padding: 15, width: '80%', marginLeft: 45}}>
                <Text style={{color: 'white', alignSelf:'center', fontSize: 18, fontWeight: 500}}>Sign in with email</Text>
            </TouchableOpacity>

            <Text style={{alignSelf:'center', marginTop: 20, color:'#0071CE'}}>Or</Text>

            <View style={styles.icon}>
                <Image style={styles.image} source={require('../assets/devicon_google.png')} resizeMode="contain" />
                <FontAwesome5 name='facebook' size={30} style={{marginLeft: 40, color: '#4267B2'}}/>
            </View>
           
            <Text style={{marginLeft: '25%' ,marginTop: 20}}>Don't have an account?</Text>

            <TouchableOpacity>
                <Text style={{left: 250,bottom: 20, color: '#0071CE'}}>Sign up</Text>
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
    },
    icon:{
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        marginTop: 30
    }
  });

export default Login;