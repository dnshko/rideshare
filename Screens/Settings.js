import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput,ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

function Settings() {
    return (
        <LinearGradient  colors={['#BFAEC9', '#ADEEE6']} style={{
            flex: 1,
            paddingVertical: 34,
            flexDirection: "column"
        }}>
            <View style={{ flexDirection: 'row', height: 55 ,borderBottomWidth:2,borderBottomColor:'#fff'}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <Image source={require('../assets/Group-41.png')} style={{ marginTop:20,height: 24, width: 24, borderRadius: 50, marginLeft: 20 }} />
                </TouchableOpacity>
                <View style={{ flex: 2, justifyContent: 'center', paddingHorizontal: 70 }}>
                    <Text style={{ fontSize: 30,fontWeight:'bold' }}>
                       Settings</Text>
                </View>
            </View>

            <View style={{height:64,justifyContent:'center'}}>
                <Text style={{fontSize:15,fontWeight:'bold',marginLeft:20}}>Terms of Services</Text>
            </View>

            <View style={{marginTop:50,alignItems:'center'}}>
                <Image source={require('../assets/Rebrand-KCSPR.png')} style={{width:95,height:95}}/>
            </View>
        </LinearGradient>
    )
}

export default Settings
