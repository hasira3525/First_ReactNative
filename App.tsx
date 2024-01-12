import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from '@rneui/themed';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigations/AppNavigation';
import 'react-native-gesture-handler';
import WelcomePage from './src/screens/WelcomePage';

function App(): JSX.Element{
  return(
    <View style={sty.container}>
      {/* <WelcomePage/> */}
      <AppNavigation/>
      {/* <LoginScreen/> */}
      {/* <SignUpScreen/> */}
    </View>
  );
}


const sty = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
})
export default App;