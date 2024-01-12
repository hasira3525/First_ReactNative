import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomePage from '../screens/HomePage';
import WelcomePage from '../screens/WelcomePage';

const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={
                {
                    headerShown: false,
                }
            }>
                <Stack.Screen name="Welcome" component={WelcomePage}/>
                <Stack.Screen name="Login" component={LoginScreen} options={{
                    cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
                }}/>
                <Stack.Screen name="SignUp" component={SignUpScreen} options={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }} />
                <Stack.Screen name="Home" component={HomePage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation
