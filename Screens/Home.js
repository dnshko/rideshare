import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput,ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Post from '../Components/Post'

export default function Home({navigation}) {
    return (
        <ScrollView nestedScrollEnabled = {true}>
        <LinearGradient  colors={['#BFAEC9', '#ADEEE6']} style={{
            flex: 1,
            paddingVertical: 34,
            flexDirection: "column"
        }}>
            <View style={{ flexDirection:'row',height: 55}}>
                <Image source={require('../assets/Rebrand-KCSPR.png')} onPress={()=>navigation.navigate('Home')} style={{height:50,width:50,borderRadius:50,marginLeft:20}}/>
                <View style={{ flex:2,justifyContent: 'center',paddingHorizontal:70}}>
                <Text style={{ fontSize: 35 }}>
                    Home
                </Text>
                </View>
                
            </View>
            <ScrollView style={{marginTop:70,height:530}} nestedScrollEnabled = {true}>
            <View style={{paddingHorizontal:30}}>
                <View style={{marginTop:15}}>
                    <Post/>
                </View>
                <View style={{marginTop:15}}>
                    <Post/>
                </View>
                <View style={{marginTop:15}}>
                    <Post/>
                </View>
                <View style={{marginTop:15}}>
                    <Post/>
                </View>
            </View>
            </ScrollView>
            <TouchableOpacity  onPress={()=>navigation.navigate('Create')}>
            <View style={{height:35,justifyContent:'center',alignItems:'center',marginTop:30}}>
                <View 
                    style={{width:40,height:40,borderWidth:2,borderRadius:50,borderColor:'#731D74',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:20,color:"#731D74"}}>+</Text>
                </View>
            </View>
            <View style={{alignItems:'center',marginTop:8}}>
                <Text style={{fontSize:15,fontWeight:'bold'}}>CREATE YOUR POST</Text>
            </View>
            </TouchableOpacity>
        </LinearGradient>
        </ScrollView>
    )
}
