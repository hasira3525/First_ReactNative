import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from '@rneui/themed';


function LoginField() {
    return (


        <View style={{ marginTop: 120, height: 425 }}>

            {/*Name Field*/}
            <View style={{
                backgroundColor: 'white',
                borderRadius: 20,
                height: 50,
                marginHorizontal: 30,
                justifyContent: 'center',
                paddingLeft: 20,

            }}>
                <TextInput placeholder='Name' placeholderTextColor={'#000'} />
            </View>

            {/*Your Email Field*/}
            <View style={{
                backgroundColor: 'white',
                borderRadius: 20,
                height: 50,
                marginHorizontal: 30,
                justifyContent: 'center',
                paddingLeft: 20,
                marginTop: 20
            }}>
                <TextInput placeholder='Your Email' placeholderTextColor={'#000'} />
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
                <TextInput placeholder='Password' placeholderTextColor={'#000'} />
            </View>
            <SignInButton />
            <Bottom />
        </View>
    );
}
function SignInButton() {
    return (
        // Sign Up Button
        <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <View style={{
                height: 70,
                flex: 1,
                justifyContent: 'center'
            }}>
                {/*Sign Up Text*/}
                <Text style={{
                    fontSize: 30,
                    color: 'white',
                    marginLeft: 40,
                    fontWeight: '600'
                }}>Sign Up</Text>
            </View>
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
        </View>
    )
}
function Bottom(p: any) {

    const stcak = p.stack;

    function gotoSignIn(){
        stcak.navigate('Login')
    }
    return (
        // Sign Up Button
        <View style={{ flexDirection: 'row', marginTop: 70, marginRight: 10 }}>
            <View style={{
                height: 70,
                flex: 1,
                justifyContent: 'center'
            }}>
            </View>
            <TouchableOpacity activeOpacity={0.7} onPress={gotoSignIn}>
                <View style={{
                    height: 70,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                }}>
                    {/* Sing In Text */}
                    <Text style={{
                        fontSize: 15,
                        color: '#000',
                        fontWeight: '900',
                        marginRight: 40,
                        marginBottom: 30,
                        textDecorationLine: 'underline'
                    }}>Sign In</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const SignUpScreen = (a: any) => {

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

            {/*Create Account Text*/}
            <Text style={{
                fontSize: 45, color: 'white', fontWeight: '600',
                marginTop: 150, marginLeft: 40, fontFamily: 'sans-serif-medium'
            }}>{'Create\nAccount'}</Text>


            <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
                <LoginField />
            </KeyboardAwareScrollView>
        </View>
    );
}

export default SignUpScreen
const sty = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})