import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput,ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

function Contact() {
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
                    <Text style={{ fontSize: 35,fontWeight:'bold' }}>
                        Contact Info</Text>
                </View>
            </View>

            <View style={{marginTop:40,alignItems:'center'}}>
                <Image source={require('../assets/Rebrand-KCSPR.png')} style={{width:95,height:95}}/>
            </View>

            <View style={{marginTop:20,alignItems:'center',width:300}}>
                <Text style={{fontWeight:'bold',fontSize:20}}>
                Kansas Coalition For Sentence And Prison Reform
                </Text>
            </View>

            <View style={{width:300,borderWidth:1,borderColor:'#731D74',borderRadius:10,marginTop:20,marginHorizontal:30,alignItems:'center'}}>
                <Text style={{fontSize:15,color:'#2F5E58',marginTop:20}}>
                4925 S Broadway Ave #1018 Wichita Kansas 67216
                </Text>

                <Text style={{fontSize:15,color:'#2F5E58',marginTop:20}}>
                +1 913 730 6386
                </Text>

                <Text style={{fontSize:15,color:'#2F5E58',marginTop:20}}>
                Email: brandilyn@kcspr.org
                </Text>
            </View>
        </LinearGradient>
    )
}

export default Contact
