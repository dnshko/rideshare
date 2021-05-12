import 'react-native-gesture-handler';
import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScrn from './Screens/LandingScrn'
import Signin from './Screens/Signin'
import Signup from './Screens/Signup'
import Terms from './Screens/TermsandConditions'
import MobVerify from './Screens/MobVerify'
import MobValidation from './Screens/MobValidation'
import Profile from './Screens/Profile'
import ForgotPassword from './Screens/ForgotPassword'
import Home from './Screens/Home'
import Preview from './Screens/PostPreview'
import CreatePost from './Screens/CreatePost'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Land" component={LandingScrn} />
          <Stack.Screen name="Signin" component={Signin}/>
          <Stack.Screen name="Signup" component={Signup}/>
          <Stack.Screen name="Terms" component={Terms}/>
          <Stack.Screen name="MobVerify" component={MobVerify}/>
          <Stack.Screen name="Profile" component={Profile}/>
          <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Create" component={CreatePost}/>
          <Stack.Screen name="Preview" component={Preview}/>
        </Stack.Navigator>
    </NavigationContainer>

  )
}
