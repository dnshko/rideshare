import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput ,ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

function MobVerify({navigation}) {
    return (
        <ScrollView>
        <LinearGradient colors={['#BFAEC9', '#ADEEE6']} style={{
            flex: 1,
            paddingHorizontal: 46,
            paddingVertical: 46,
            flexDirection: "column"
        }}>
            <View style={{height:55,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:45}}>
                    KCSPR
                </Text>
            </View>
            <View style={{marginTop:76,justifyContent:'center'}}>
                <Image source={require('../assets/Group-43.png')} style={{marginLeft:80}} />
            </View>

            <View style={{ height: 24, marginTop: 53}}>
                <Text style={{ fontSize: 20 }}>Verify Mobile Number</Text>
            </View>

            <View style={{ height: 55, marginTop: 31}}>
                <Text style={{ fontSize: 16 }}>
                Enter your four-digit code we sent you +1 444 444 4444
                </Text>
            </View>

            <View style={{ marginTop: 31,flexDirection:'row'}}>
                <View style={{marginLeft:20}}>
                    <TextInput style={{width:45,height:60,backgroundColor:'#3CCDB9',textAlign:'center',borderRadius:15,fontSize:35,color:'#ffff'}}/>
                </View>
                <View style={{marginLeft:20}}>
                    <TextInput style={{width:45,height:60,backgroundColor:'#3CCDB9',textAlign:'center',borderRadius:15,fontSize:35,color:'#ffff'}}/>
                </View>
                <View style={{marginLeft:20}}>
                    <TextInput style={{width:45,height:60,backgroundColor:'#3CCDB9',textAlign:'center',borderRadius:15,fontSize:35,color:'#ffff'}}/>
                </View>
                <View style={{marginLeft:20}}>
                    <TextInput style={{width:45,height:60,backgroundColor:'#3CCDB9',textAlign:'center',borderRadius:15,fontSize:35,color:'#ffff'}}/>
                </View>
            </View>

            <View style={{marginTop:100}}>
                    <TouchableOpacity style={{
                        elevation: 8,
                        backgroundColor: '#731D74',
                        borderRadius: 24,
                        paddingVertical: 10,
                        paddingHorizontal: 18,
                    }} onPress={()=>navigation.navigate('Profile')}>
                        <Text style={{
                            fontSize:15,
                            color:"white",
                            alignSelf: "center",
                            }}>Continue</Text>
                    </TouchableOpacity>
                </View>
        </LinearGradient>
        </ScrollView>
    )
}

export default MobVerify
