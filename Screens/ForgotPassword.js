import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput,ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

export default function ForgotPassword() {
    return (
        <ScrollView>
        <LinearGradient colors={['#BFAEC9', '#ADEEE6']} style={{
            flex: 1,
            paddingVertical: 34,
            flexDirection: "column"
        }}>
            <View style={{ height: 55, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30 }}>
                    Password
                </Text>
            </View>

            <View style={{ height: 50, alignItems: 'center', marginTop: 34 }}>
                <Image source={require('../assets/Rebrand-KCSPR.png')} style={{ height: 50, width: 50, borderRadius: 50 }} />
            </View>
            <View style={{ height: 50, alignItems: 'center', marginTop: 7 }}>
                <Text>+1 475-874-0000</Text>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center' ,marginTop:35}}>
                <Text style={{ fontSize: 19}}>
                    Forget Password
                </Text>
            </View>

            <View style={{width:307,marginTop:86,paddingHorizontal:30}}>

            <View style={{ width: 307, height: 45, marginTop: 40 }}>
                    <Text style={{ fontSize: 13,color:'#2F5E58' }}>Previous Password</Text>
                    <TextInput style={{ height: 40, borderBottomWidth: 1, borderBottomColor: 'black' }} />
                </View>
                <View style={{ width: 307, height: 45, marginTop: 40 }}>
                    <Text style={{ fontSize: 13,color:'#2F5E58' }}>New Password</Text>
                    <TextInput style={{ height: 40, borderBottomWidth: 1, borderBottomColor: 'black' }} />
                </View>
                <View style={{ width: 307, height: 45, marginTop: 40 }}>
                    <Text style={{ fontSize: 13,color:'#2F5E58' }}>Confirm Password</Text>
                    <TextInput style={{ height: 40, borderBottomWidth: 1, borderBottomColor: 'black' }} />
                </View>
            </View>

            <View style={{marginTop:200,marginHorizontal:40}}>
                    <TouchableOpacity style={{
                        backgroundColor: '#731D74',
                        borderRadius: 24,
                        paddingVertical: 10,
                        paddingHorizontal: 18,
                        height:40,
                        width:268
                    }}>
                        <Text style={{
                            fontSize:15,
                            color:"white",
                            alignSelf: "center",
                            }}>Done</Text>
                    </TouchableOpacity>
                </View>
        </LinearGradient>
        </ScrollView>
    )
}
