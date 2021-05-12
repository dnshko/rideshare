import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, TextInput ,ScrollView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient'

function Signin({navigation}) {
    return (
        <ScrollView>
        <LinearGradient colors={['#BFAEC9','#ADEEE6']} style={{
            flex: 1,
            paddingHorizontal: 46,
            paddingVertical: 46,
            flexDirection: "column"
        }}>
            <View style={{ width: 148, height: 52 }}>
                <Text style={{ fontSize: 42, color: "#404642" }}>Sign In</Text>
            </View>

            <View style={{ marginVertical: 116, width: 288, height: 104 }}>
                <Text style={{ fontSize: 26 }}>
                    Welcome to Ride Share. Sharing Ride Appplication
                </Text>
            </View>

            <View style={{ width: 270, height: 45, paddingLeft: 20 }}>
                <Text style={{ fontSize: 13 }}>User Name</Text>
                <TextInput style={{ height: 40, borderBottomWidth: 1, borderBottomColor: 'black' }} />
            </View>
            <View style={{ width: 270, height: 45, paddingLeft: 20, marginTop: 30 }}>
                <Text style={{ fontSize: 13 }}>Password</Text>
                <TextInput style={{ height: 40, borderBottomWidth: 1, borderBottomColor: 'black' }} />
            </View>

            <View style={{
                flexDirection: 'row',
                marginTop: 16.5,
                paddingLeft: 10,
            }}>
                <CheckBox style={{ margin: 8, width: 20, height: 20 }} value='' />
                <Text style={{ margin: 8, fontSize: 17 }}>Remember Me</Text>
            </View>
            <View style={{marginTop:28}}>
                    <TouchableOpacity style={{
                        elevation: 8,
                        backgroundColor: '#731D74',
                        borderRadius: 24,
                        paddingVertical: 10,
                        paddingHorizontal: 18,
                    }} onPress={()=>navigation.navigate('Home')}>
                        <Text style={{
                            fontSize:15,
                            color:"white",
                            alignSelf: "center",
                            }} >Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View style={{height:19,alignItems:'center',marginTop:27}}>
                    <Text onPress={()=>navigation.navigate("ForgotPassword")}>I forgot my Password</Text>
                </View>
                <View style={{marginTop:28}}>
                    <TouchableOpacity style={{
                        // elevation: 8,
                        backgroundColor: 'transparent',
                        borderRadius: 24,
                        paddingVertical: 10,
                        paddingHorizontal: 18,
                        borderWidth:2,
                        borderColor:'#731D74'
                    }}  onPress={()=>navigation.navigate('Signup')}>
                        <Text style={{
                            fontSize:15,
                            color:"#731D74",
                            alignSelf: "center",
                            }} >Create an Account</Text>
                    </TouchableOpacity>
                </View>
        </LinearGradient>
        </ScrollView>
    )
}

export default Signin