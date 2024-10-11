import  {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import  React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import RegisterForm from '../components/RegistrationForm';
import { useNavigation } from '@react-navigation/native';



const Login = () => {
    const navigation = useNavigation();
    const hanlePress = () => {
        console.log('Next page');
    }
    const handleSubmit = ({ email, password }) => {
        console.log(`\nEmail address: ${email}\nPassword: ${password}\n`);
    };
    return (
        <View style={styles.container}>
            <View style={styles.icons}>
                <TouchableOpacity style={styles.circle} onPress={()=> navigation.navigate('DisablePage')}>
                    <MaterialIcons name='keyboard-arrow-left' size={24}/>
                </TouchableOpacity>
                <FontAwesome name='volume-up' size={24} style={{marginLeft: '80%', color:'#0071CE'}}/>
            </View>

            <Image source={require('../assets/Group 6.png')} style={{width: '30%', height: '20%', alignSelf:'center'}}/>

            <Text style={{color:'#0071CE', marginTop: 10, marginBottom: 30, marginLeft: 100, fontSize: 24, fontWeight: 500}}>Start your journey</Text>

            <RegisterForm onSubmit={handleSubmit} isLogin={true} />   
           
            <Text style={{marginLeft: '25%' ,marginTop: 20}}>Don't have an account?</Text>

            <TouchableOpacity onPress={()=> hanlePress()}>
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