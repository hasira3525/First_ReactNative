import { View, Text, Image, StyleSheet, Button } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

function WelcomePage(p: any) {
    p.navigation

    function gotoSignUp() {
        p.navigation.navigate("SignUp");
    }
    function gotoSignIn() {
        p.navigation.navigate("Login");
    }
    return (
        <><View style={sty.container}>
            <Image style={{
                width: '100%',
                height: '100%',
                position: 'absolute'
            }} source={require('../../assets/img/welcomepage.jpg')}
                resizeMode='cover' />

            {/*Welcome Back Text*/}
            <Text style={{
                fontSize: 45, color: '#000', fontWeight: '600',
                marginTop: 150, marginLeft: 40, fontFamily: 'sans-serif-medium'
            }}>{'Welcome to\nAbc Bank'}</Text>

            <Text style={{
                width: '78%',
                fontSize: 12,
                color: '#000',
                marginTop: 15,
                marginBottom: 275,
                marginLeft: 40,
                textAlign: 'justify'
            }}>"Manage your finances on the go with our easy-to-use and secure bank app.
                Check your balance, transfer money, and pay bills, all from your smartphone."
            </Text>

            {/* Sign In Button  */}
            <TouchableOpacity activeOpacity={0.7} onPress={gotoSignIn}>
                <View style={{
                    width: '80%',
                    height: 55,
                    marginHorizontal: 40,
                    marginTop: 20,
                    justifyContent: 'center',
                    backgroundColor: '#c7b6e4',
                    borderRadius: 20
                }}>
                    <Text style={{
                        color: '#000',
                        textAlign: 'center',
                        fontWeight: '800',
                        fontSize: 20
                    }}>Sign In</Text>
                </View>
            </TouchableOpacity>

            {/* Sign Up Button  */}
            <TouchableOpacity activeOpacity={0.7} onPress={gotoSignUp}>
                <View style={{
                    width: '80%',
                    height: 55,
                    backgroundColor: '#c7b6e4',
                    marginTop: 20,
                    marginHorizontal: 40,
                    borderRadius: 20
                }}>
                    <Text style={{
                        color: '#000',
                        textAlign: 'center',
                        fontWeight: '800',
                        fontSize: 20,
                        marginTop: 15
                    }}>Sign Up</Text>
                </View>
            </TouchableOpacity>
        </View>
        </>
    )
}
export default WelcomePage
const sty = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
});