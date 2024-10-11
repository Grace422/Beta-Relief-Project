import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Joi from 'joi-browser';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';



const RegisterForm = ({ onSubmit, isLogin }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const [errors, setErrors] = useState({});
    const navigation = useNavigation();

    const schema = isLogin ? Joi.object({
        email: Joi.string().email({ tlds: { allow: false } }).required().label('Email Address'),
        password: Joi.string().min(8).required().label('Password'),
    }) : Joi.object({
        email: Joi.string().email().required().error((errors) => {
            return {
                message: 'Email address must be a valid email',
            };
        }).label('Email Address'),
        password: Joi.string().min(8).required().error((errors) => {
            return {
                message: 'Password length must be of at least 8 characters long',
            };
        }).label('Password'),
    });

    const validate = () => {
        const data = isLogin ? { email, password } : { email, password };
        const { error } = schema.validate(data, { abortEarly: false });

        if (!error) return null;

        const validationErrors = {};
        for (let item of error.details) {
            validationErrors[item.path[0]] = item.message;
        }
        return validationErrors;
    };

    const handleSubmit = () => {
        const validationErrors = validate();
        if (validationErrors) {
            setErrors(validationErrors);
            return;
        }


        // Call the onSubmit callback with form data
        const data = isLogin ? { email, password } : { email, password };
        onSubmit(data);

        // Clear the form fields and errors after successful submission
        setEmail('');
        setPassword('');
        setErrors({});
    };

    const options = [
        { label: 'English', value: 'English' },
        { label: 'French', value: 'French' },
    ];
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSelect = (index, value) => {
        if (index >= 0 && index < options.length) {
            setSelectedValue(value);
        }
    };

    return (
        <View>
            <View style={styles.inputField}>
                <Text style={styles.inputLabel}>Email Address</Text>
                <Text style={{position: 'absolute', left: 150, color:'red'}}>*</Text>
                <TextInput
                    style={[styles.input, errors.email && styles.inputError]}
                    placeholder="Enter your email address"
                    value={email}
                    onChangeText={setEmail}
                />
                {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            </View>
            <View style={styles.inputField}>
                <Text style={styles.inputLabel}>Password</Text>
                <Text style={{position: 'absolute', left: 120, color:'red'}}>*</Text>
                <TextInput
                    style={[styles.input, errors.password && styles.inputError]}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={isPasswordShown}
                />
                {errors.password && <Text style={styles.errors}>{errors.password}</Text>}
                <TouchableOpacity  onPress={()=> setIsPasswordShown(!isPasswordShown)}>
                        {
                            isPasswordShown == true ? (
                                <Ionicons name='eye-off' size={24} style={styles.icon}/>
                            ):(
                                <Ionicons name='eye' size={24} style={styles.icon}/>
                            )
                        }
                       
                </TouchableOpacity>
                
                <View style={styles.inputfield}>
                    <Text style={styles.inputLabel}>Choose Language</Text>
                    <Text style={{position: 'absolute', left: 170, color:'red'}}>*</Text>
                    <RNPickerSelect
                            onValueChange={(value) => setSelectedValue(value)}
                            items={options}
                            style={{
                                iconContainer: styles.iconContainer,
                                inputIOS: styles.input,
                                inputAndroid: styles.input,
                            }}
                            useNativeAndroidPickerStyle={false}
                            Icon={() => {
                                return <MaterialIcons name="keyboard-arrow-down" size={24} style={styles.icons} />;
                            }}
                    /> 
                </View>
                <View style={{flexDirection:'row', marginVertical: 6}}>
                    <CheckBox 
                    containerStyle={{marginLeft: 28}}
                    checked={!isChecked}
                    onValueChange={setIsChecked}
                    onPress={() => setIsChecked(!isChecked)}
                    color={isChecked ? '#0071CE' : undefined}
                    />
                    <Text style={{marginLeft: -15, top: 15}}>Remember me</Text>
                </View>

                {isLogin && (
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text style={styles.labelLink}>Forget password?</Text>
                    </TouchableOpacity>
                )}
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>{isLogin ? 'Log in' : 'Sign up'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inputField: {
        marginBottom: 20,
    },
    inputfield:{
        marginTop: 20
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
    inputError: {
        borderColor: '#FF5757',
    },
    error: {
        fontSize: 12,
        color: '#FF5757',
        bottom: -18,
        left: 40,
        position: 'absolute'
    },
    errors: {
        fontSize: 12,
        color: '#FF5757',
        top: 70,
        left: 40,
        position: 'absolute'
    },
    button: {
        backgroundColor: '#0071CE',
        paddingVertical: 12,
        borderRadius: 25,
        alignItems: 'center',
        marginLeft: 25,
        marginRight: 25,
    },
    buttonText: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: '700',
    },
    labelLink: {
        fontSize: 14,
        color: '#0071CE',
        fontWeight: 'bold',
        marginLeft: '35%'
    },
    icon:{
        color: '#D3D3D3',
        right: 45,
        top: -35,
        position: 'absolute',
    },
    icons:{
        color: '#000000',
        right: 45,
        top: 10,
        position: 'absolute', 
    }
});

export default RegisterForm;
