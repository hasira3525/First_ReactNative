import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebaseinit';


function LoginField(p: any) {

    const stack = p.stack;

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    return (

        <View style={{ marginTop: 125 }}>

            {/*Your Email Field*/}
            <View style={{
                backgroundColor: 'white',
                borderRadius: 20,
                height: 50,
                marginHorizontal: 30,
                justifyContent: 'center',
                paddingLeft: 20,
            }}>
                <TextInput placeholder='Your Email' placeholderTextColor={'#000'}
                    onChangeText={(v) => setUserEmail(v)} // set parameter for email
                    style={{
                        fontSize: 14,
                        color: 'black'
                    }} />
            </View>

            {/*Password Field*/}
            <View style={{
                backgroundColor: 'white',
                borderRadius: 20,
                height: 50,
                marginHorizontal: 30,
                justifyContent: 'center',
                paddingLeft: 20,
                marginTop: 20,
            }}>
                <TextInput placeholder='Password' placeholderTextColor={'#000'}
                    onChangeText={(v) => setUserPassword(v)} // set parameter for password
                    secureTextEntry={true}
                    style={{
                        fontSize: 14,
                        color: 'black'
                    }} />
            </View>
            <SignInButton u_email={userEmail} u_password={userPassword} sb_stack={stack} />
            <Bottom stack={stack} />
        </View>
    );
}
function SignInButton(p: any) {

    const u_email = p.u_email;
    const u_password = p.u_password;

    const email = 'abc@gmail.com';
    const password = '123';

    function getUser() {
        getDocs(query(collection(db, 'Users'), where('Email', '==', u_email.toLowerCase()))).then(ds => {
            if (ds.size == 1) {
                const dt = ds.docs[0].data();
                if (dt.Password == u_password) {
                    p.sb_stack.navigate('Home')
                }
                else {
                    Alert.alert('Message', 'Incorrect Email or Password');
                }
            } else {
                Alert.alert('Message', "Can't find user!");
            }
        })
    }

    function goToHome() {
        getUser();
    }
    return (
        // Sign In Button
        <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <View style={{
                height: 70,
                flex: 1,
                justifyContent: 'center'
            }}>
                {/*Sign In Text*/}
                <Text style={{
                    fontSize: 30,
                    color: 'white',
                    marginLeft: 40,
                    fontWeight: '600'
                }}>Sign In</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7} onPress={goToHome}>
                <View style={{
                    height: 70,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-end'
                }}>
                    <View style={{
                        backgroundColor: '#c7b6e4',
                        borderRadius: 100,
                        marginRight: 40,
                        height: 50,
                        width: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Icon size={30} color={'white'} name={'arrowright'} type='antdesign' />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}
function Bottom(p: any) {

    const stcak = p.stack;

    function gotoSignUp() {
        stcak.navigate('SignUp')
    }
    return (
        // Sign Up Button
        <View style={{ flexDirection: 'row', marginTop: 110, marginRight: 10 }}>
            <TouchableOpacity onPress={gotoSignUp}>
                <View style={{
                    height: 70,
                    flex: 1,
                    justifyContent: 'center'
                }}>

                    <Text style={{
                        fontSize: 15,
                        color: '#000',
                        marginLeft: 40,
                        fontWeight: '900',
                        textDecorationLine: 'underline'
                    }}>Sign Up</Text>
                </View>
            </TouchableOpacity>
            <View style={{
                height: 70,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end'
            }}>

                <Text style={{
                    fontSize: 15,
                    color: '#000',
                    fontWeight: '900',
                    marginRight: 30,
                    textDecorationLine: 'underline'
                }}>Forgot Password</Text>
            </View>
        </View>
    )
}
const LoginScreen = (a: any) => {

    const stack = a.navigation;
    return (
        // Background Image
        <View style={sty.container}>
            <Image style={{
                width: '100%',
                height: '100%',
                position: 'absolute'
            }} source={require('../../assets/img/back2.jpg')}
                resizeMode='cover' />

            {/*Welcome Back Text*/}
            <Text style={{
                fontSize: 45, color: 'white', fontWeight: '600',
                marginTop: 150, marginLeft: 40, fontFamily: 'sans-serif-medium'
            }}>{'Welcome\nBack'}</Text>


            <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
                <LoginField stack={stack} />
            </KeyboardAwareScrollView>
        </View>
    );
}

export default LoginScreen
const sty = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})