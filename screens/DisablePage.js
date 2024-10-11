import  {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import  React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const DisablePage = () => {
    const navigation = useNavigation();
    const hanleSubmit = () => {
        console.log('Next page');
    }
    return(
        <View style={styles.container}>
             <View style={styles.icons}>
                <TouchableOpacity style={styles.circle} onPress={()=> navigation.navigate('Welcome')}>
                    <MaterialIcons name='keyboard-arrow-left' size={24}/>
                </TouchableOpacity>
                <FontAwesome name='volume-up' size={24} style={{marginLeft: '80%', color:'#0071CE'}}/>
            </View>

            <Text style={{alignSelf:'center', fontWeight: 700, fontSize: 20, marginTop: 10}}>Are you disabled? Let us know</Text>
            <Text style={{
                alignSelf:'center', 
                fontSize: 16, 
                marginTop: 20,
                marginLeft: 10,
                width: '90%'}}>
                    To get the best experience with 
                    <Text style={{color:'#0071CE'}}> betaRelief </Text>
                    ; let us know if you have any disability.</Text>

            <View style={styles.boxes}>
                <TouchableOpacity style={styles.filled}>
                    <Text style={{color:'white', textAlign: 'center'}}>Vision Impairment</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.empty}>
                    <Text style={{color:'#0071CE', textAlign: 'center'}}>None</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.filled}>
                    <Text style={{color:'white', textAlign: 'center'}}>Intellectual Disablity</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.empty}>
                    <Text style={{color:'#0071CE', textAlign: 'center'}}>Orphanage</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.filled}>
                    <Text style={{color:'white', textAlign: 'center'}}>Physical Disablity</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.empty}>
                    <Text style={{color:'#0071CE', textAlign: 'center'}}>Disable</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.empty}>
                    <Text style={{color:'#0071CE', textAlign: 'center'}}>Deaf</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.empty}>
                    <Text style={{color:'#0071CE', textAlign: 'center'}}>Social</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.filled}>
                    <Text style={{color:'white', textAlign: 'center'}}>Other</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={()=> navigation.navigate('Login')} style={{backgroundColor: '#0071CE', borderRadius: 50, padding: 15, width: '80%', marginLeft: 45, marginTop: '30%'}}>
                <Text style={{color: 'white', alignSelf:'center', fontSize: 18, fontWeight: 500}}>Contiue/Skip</Text>
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
        backgroundColor: '#D9D9D9',
        marginLeft: 6
    },
    filled:{
        backgroundColor: '#0071CE',
        borderRadius: 5,
        padding: 15,
        width: '30%',
        justifyContent: 'center',
        marginBottom: '10%'
    },
    empty:{
        backgroundColor: 'white',
        borderRadius: 5,
        borderColor: '#0071CE',
        borderWidth: 1,
        padding: 15,
        width: '30%',
        justifyContent: 'center',
        marginBottom: '10%'
    },
    boxes:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 30
    }
  });
export default DisablePage;